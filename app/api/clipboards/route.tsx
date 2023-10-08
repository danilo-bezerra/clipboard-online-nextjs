import { db } from "@/lib/db";
import { generateRandomNum } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { body } = await req.json();

    const text = body?.trim();

    if (!text || typeof text != "string") {
      return NextResponse.json(
        {
          message: "O texto deve ser informado",
        },
        { status: 400 }
      );
    }

    let accessCode = generateRandomNum();
    let existingClipboardWithCode = await db.clipboard.findUnique({
      where: {
        accessCode,
      },
    });

    while (existingClipboardWithCode) {
      accessCode = generateRandomNum();
      existingClipboardWithCode = await db.clipboard.findUnique({
        where: {
          accessCode,
        },
      });
    }

    const clipboard = await db.clipboard.create({
      data: {
        body: text,
        accessCode,
      },
    });

    setTimeout(async () => {
      try {
        console.log("executando", accessCode);

        await db.clipboard.delete({
          where: {
            accessCode,
          },
        });

        console.log("executei", accessCode);
      } catch (e) {
        console.log(e);
        console.log("ocorreu um erro ao deletar", accessCode);
      }
    }, 1000 * 60 * 15);

    return NextResponse.json(clipboard, { status: 201 });
  } catch {
    return NextResponse.json(
      {
        message: "Erro Interno!",
      },
      { status: 500 }
    );
  }
}
