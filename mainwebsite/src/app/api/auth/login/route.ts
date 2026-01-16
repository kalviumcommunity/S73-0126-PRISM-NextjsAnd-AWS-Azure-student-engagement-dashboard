import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendSuccess, sendError } from '@/lib/responseHandler';
import { ERROR_CODES } from '@/lib/errorCodes';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return sendError('Missing required fields', ERROR_CODES.VALIDATION_ERROR, 400);
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return sendError('Invalid credentials', ERROR_CODES.VALIDATION_ERROR, 401);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return sendError('Invalid credentials', ERROR_CODES.VALIDATION_ERROR, 401);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    return sendSuccess({ token }, 'Login successful');
  } catch (error) {
    return sendError('Login failed', ERROR_CODES.INTERNAL_ERROR, 500, error);
  }
}
