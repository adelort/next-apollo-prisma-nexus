import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

const insertAuthorCount = 10;

async function main() {
  let i;

  for (i = 0; i < insertAuthorCount; i++) {
    await prisma.author.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Posts: {
          createMany: {
            data: faker.datatype.array(faker.datatype.number(3)).map(() => ({
              title: faker.lorem.words(3),
              body: faker.lorem.lines(3),
              published: faker.datatype.boolean(),
            })),
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
