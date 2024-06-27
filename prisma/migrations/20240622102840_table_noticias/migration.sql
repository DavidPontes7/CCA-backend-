/*
  Warnings:

  - You are about to drop the `Conteudos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Conteudos";

-- CreateTable
CREATE TABLE "Noticias" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("id")
);
