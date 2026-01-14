import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendSuccess, sendError } from '@/lib/responseHandler';
import { ERROR_CODES } from '@/lib/errorCodes';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Correct destructuring
    const { email, password } = body;

    // ✅ Validation
    if (!email || !password) {
      return sendError(
        'Missing required fields',
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return sendError(
        'Invalid email or password',
        ERROR_CODES.VALIDATION_ERROR,
        401
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return sendError(
        'Invalid email or password',
        ERROR_CODES.VALIDATION_ERROR,
        401
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    return sendSuccess(
      { token },
      'Login successful',
      200
    );
  } catch (error) {
    return sendError(
      'Login failed',
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
