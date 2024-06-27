/*
  Warnings:

  - You are about to drop the column `content` on the `Conteudos` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Conteudos` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Conteudos` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Conteudos` table. All the data in the column will be lost.
  - You are about to drop the column `videoUrl` on the `Conteudos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Conteudos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conteudos" DROP COLUMN "content",
DROP COLUMN "imageUrl",
DROP COLUMN "published",
DROP COLUMN "type",
DROP COLUMN "videoUrl",
ADD COLUMN     "descricao" TEXT NOT NULL;
