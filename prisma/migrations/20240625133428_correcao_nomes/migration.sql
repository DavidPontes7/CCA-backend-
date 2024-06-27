/*
  Warnings:

  - You are about to drop the `Contents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Conteudo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conteudo" DROP CONSTRAINT "Conteudo_categoriaId_fkey";

-- DropTable
DROP TABLE "Contents";

-- DropTable
DROP TABLE "Conteudo";

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contéudos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "corpo" TEXT NOT NULL,
    "autor" TEXT,
    "banner" TEXT NOT NULL,
    "publicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Contéudos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contéudos" ADD CONSTRAINT "Contéudos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
