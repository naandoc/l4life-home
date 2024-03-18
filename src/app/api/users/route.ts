import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { fullname, name, username, password } = data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      console.log("Usuário já cadastrado");
    } else {
      await prisma.user.create({
        data: {
          fullname,
          name,
          username,
          password,
        },
      });
    }
  } catch (error) {
    console.log({ error: "erro ao criar usuário" });
  }

  return NextResponse.json({ message: "teste" });
}
