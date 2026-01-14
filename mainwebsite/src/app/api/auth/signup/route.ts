import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { sendSuccess, sendError } from '@/lib/responseHandler';
import { ERROR_CODES } from '@/lib/errorCodes';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ FIX: destructure password correctly
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return sendError(
        'Missing required fields',
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return sendError(
        'User already exists',
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return sendSuccess(
      { id: user.id, email: user.email },
      'Signup successful',
      201
    );
  } catch (error) {
    return sendError(
      'Signup failed',
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
