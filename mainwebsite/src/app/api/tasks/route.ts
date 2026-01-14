import { prisma } from '@/lib/prisma';
import { sendSuccess, sendError } from '@/lib/responseHandler';
import { ERROR_CODES } from '@/lib/errorCodes';

/**
 * GET /api/tasks
 * Fetch all tasks
 */
export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      select: {
        id: true,
        title: true,
        status: true,
        projectId: true,
        userId: true,
      },
    });

    return sendSuccess(tasks, 'Tasks fetched successfully');
  } catch (error) {
    return sendError(
      'Failed to fetch tasks',
      ERROR_CODES.DATABASE_FAILURE,
      500,
      error
    );
  }
}

/**
 * POST /api/tasks
 * Create a new task
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.projectId || !body.userId) {
      return sendError(
        'Missing required fields',
        ERROR_CODES.VALIDATION_ERROR,
        400
      );
    }

    const task = await prisma.task.create({
      data: {
        title: body.title,
        projectId: body.projectId,
        userId: body.userId,
      },
    });

    return sendSuccess(task, 'Task created successfully', 201);
  } catch (error) {
    return sendError(
      'Task creation failed',
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}
