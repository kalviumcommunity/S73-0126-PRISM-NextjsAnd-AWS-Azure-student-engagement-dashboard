import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const project = await tx.project.create({
        data: {
          name: 'Transactional Project',
          ownerId: 1,
        },
      });

      const task = await tx.task.create({
        data: {
          title: 'Initial Task',
          projectId: project.id,
          userId: 1,
        },
      });

      return { project, task };
    });

    return NextResponse.json({
      message: 'Transaction successful',
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Transaction failed, rolled back' },
      { status: 500 }
    );
  }
}
