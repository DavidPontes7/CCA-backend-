/*
  Warnings:

  - Added the required column `name` to the `Admins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admins" ADD COLUMN     "name" TEXT NOT NULL;
