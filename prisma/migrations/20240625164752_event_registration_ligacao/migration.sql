/*
  Warnings:

  - The primary key for the `Events` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Registrations" DROP CONSTRAINT "Registrations_eventId_fkey";

-- AlterTable
ALTER TABLE "Events" DROP CONSTRAINT "Events_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Events_id_seq";

-- AlterTable
ALTER TABLE "Registrations" ALTER COLUMN "eventId" SET DATA TYPE TEXT;

-- DropEnum
DROP TYPE "ContentType";

-- AddForeignKey
ALTER TABLE "Registrations" ADD CONSTRAINT "Registrations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
