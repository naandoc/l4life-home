import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: {
      username: "vamosnessa777",
    },
  });

  if (existingUser) {
    console.log(
      "Usuário com este username já existe. Não foi possível criar um novo usuário."
    );
  } else {
    await prisma.user.create({
      data: {
        username: "vamosnessa777",
        password: "123456",
        fullname: "José Wanderson Cavalcanti da Silva",
        name: "Nando Cavalcanti",
        apartments: {
          create: {
            imgs: ["teste"],
            bgImg: "imagem de fundo",
          },
        },
      },
    });
  }

  const allUsers = await prisma.user.findMany({
    include: {
      apartments: true,
    },
  });
  console.log("Usuários", allUsers);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
