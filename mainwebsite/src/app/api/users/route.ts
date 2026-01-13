import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true },
  });
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}
