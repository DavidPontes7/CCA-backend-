/*
  Warnings:

  - The primary key for the `Admins` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Admins" DROP CONSTRAINT "Admins_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Admins_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Admins_id_seq";
