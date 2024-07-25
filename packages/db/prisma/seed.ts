import bcrypt from "bcrypt";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const shubham = await prisma.user.upsert({
    where: { number: "1234512345" },
    update: {},
    create: {
      number: "1234512345",
      password: await bcrypt.hash("shubham", 10),
      name: "shubham",
      Balance: {
        create: { amount: 100000, locked: 0 },
      },
      OnRampTransaction : {
        create : {
          status : "Success",
          startTime : new Date(),
          amount : 20000,
          token : '_token_1',
          provider : 'BOB bank'
        }
      }
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })