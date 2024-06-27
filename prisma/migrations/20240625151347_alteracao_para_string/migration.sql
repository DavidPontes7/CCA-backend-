/*
  Warnings:

  - The primary key for the `Categorias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Contéudos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contéudos" DROP CONSTRAINT "Contéudos_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Categorias" DROP CONSTRAINT "Categorias_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Categorias_id_seq";

-- DropTable
DROP TABLE "Contéudos";

-- CreateTable
CREATE TABLE "Conteudo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "corpo" TEXT NOT NULL,
    "autor" TEXT,
    "banner" TEXT NOT NULL,
    "publicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "categoriaId" TEXT NOT NULL,

    CONSTRAINT "Conteudo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conteudo" ADD CONSTRAINT "Conteudo_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
