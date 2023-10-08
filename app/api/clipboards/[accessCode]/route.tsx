import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { accessCode: string } }
) {
  try {
    const { accessCode } = params;

    if (!accessCode) {
      return NextResponse.json(
        {
          message: "Código não informado",
        },
        { status: 400 }
      );
    }

    const clipboard = await db.clipboard.findUnique({
      where: {
        accessCode,
      },
    });

    if (!clipboard) {
      return NextResponse.json(
        {
          message: "Não encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(clipboard);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
