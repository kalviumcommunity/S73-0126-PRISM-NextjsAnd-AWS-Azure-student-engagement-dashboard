import { prisma } from '@/lib/prisma';
import { sendSuccess, sendError } from '@/lib/responseHandler';
import { ERROR_CODES } from '@/lib/errorCodes';
import { userSchema } from '@/lib/schemas/userSchema';


export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return sendSuccess(users, 'Users fetched successfully');
  } catch (error) {
    return sendError(
      'Failed to fetch users',
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}




export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = userSchema.safeParse(body);

    if (!result.success) {
      return sendError(
        'Validation Error',
        ERROR_CODES.VALIDATION_ERROR,
        400,
        result.error.issues.map((e) => ({
          field: e.path[0],
          message: e.message,
        }))
      );
    }

    const user = await prisma.user.create({
      data: result.data,
    });

    return sendSuccess(user, 'User created successfully', 201);
  } catch (error) {
    return sendError(
      'Failed to create user',
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
