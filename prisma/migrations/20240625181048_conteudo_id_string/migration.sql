/*
  Warnings:

  - The primary key for the `Conteudo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Conteudo" DROP CONSTRAINT "Conteudo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Conteudo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Conteudo_id_seq";
