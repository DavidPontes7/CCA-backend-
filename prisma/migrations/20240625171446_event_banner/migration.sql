/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Events` table. All the data in the column will be lost.
  - You are about to drop the column `videoUrl` on the `Events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "imageUrl",
DROP COLUMN "videoUrl",
ADD COLUMN     "banner" TEXT;
