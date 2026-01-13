import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const tasks = await prisma.task.findMany({
    select: { id: true, title: true, status: true },
  });
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.title || !body.projectId || !body.userId) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const task = await prisma.task.create({ data: body });
  return NextResponse.json(task, { status: 201 });
}
