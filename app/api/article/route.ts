import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { content } = await request.json();
  const article = await prisma.article.create({
    data: {
      title: "Post one",
      content,
      inviteLink: "one.com",
      cover: "image,jpg",
    },
  });
  return NextResponse.json(article);
};
