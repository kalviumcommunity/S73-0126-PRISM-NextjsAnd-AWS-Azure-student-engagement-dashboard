  import { prisma } from '@/lib/prisma';
  import { sendSuccess, sendError } from '@/lib/responseHandler';
  import { ERROR_CODES } from '@/lib/errorCodes';
  import { taskSchema } from '@/lib/schemas/taskSchema';




  export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        project: true,
        user: true,
      },
    });

    return sendSuccess(tasks, 'Tasks fetched successfully');
  } catch (error) {
    return sendError(
      'Failed to fetch tasks',
      ERROR_CODES.INTERNAL_ERROR,
      500,
      error
    );
  }
}

  export async function POST(req: Request) {
    try {
      const body = await req.json();

      const result = taskSchema.safeParse(body);

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

      const task = await prisma.task.create({
        data: result.data,
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



