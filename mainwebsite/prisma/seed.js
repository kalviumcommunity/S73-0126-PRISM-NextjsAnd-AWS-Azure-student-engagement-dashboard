const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      name: 'Alice',
      email: 'alice@example.com',
      role: 'STUDENT',
    },
  });

  await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      name: 'Bob',
      email: 'bob@example.com',
      role: 'TEACHER',
    },
  });

  await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Student Engagement Dashboard',
      ownerId: alice.id,
    },
  });

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
