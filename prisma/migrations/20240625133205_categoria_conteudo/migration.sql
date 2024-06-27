/*
  Warnings:

  - You are about to drop the column `description` on the `Contents` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Contents` table. All the data in the column will be lost.
  - Added the required column `name` to the `Contents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contents" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Conteudo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "corpo" TEXT NOT NULL,
    "autor" TEXT,
    "banner" TEXT NOT NULL,
    "publicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Conteudo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conteudo" ADD CONSTRAINT "Conteudo_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
