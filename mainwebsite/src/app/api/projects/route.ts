import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;

  const projects = await prisma.project.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ page, limit, data: projects });
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.ownerId) {
    return NextResponse.json(
      { error: 'Name and ownerId are required' },
      { status: 400 }
    );
  }

  const project = await prisma.project.create({ data: body });
  return NextResponse.json(project, { status: 201 });
}
