const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  for (let i = 0; i < 20; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = await bcrypt.hash("password123", 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    await prisma.userStats.create({
      data: {
        userId: user.id,
        loginCount: faker.number.int({ min: 1, max: 100 }),
        lastLogin: faker.date.recent(),
      },
    });

    await prisma.userSettings.create({
      data: {
        userId: user.id,
        theme: faker.helpers.arrayElement(["light", "dark"]),
        notificationsEnabled: faker.datatype.boolean(),
      },
    });

    console.log(`Created user ${i + 1}: ${email}`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
