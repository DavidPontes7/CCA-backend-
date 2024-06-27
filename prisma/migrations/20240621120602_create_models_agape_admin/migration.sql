-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('NEWS', 'FORMATION');

-- CreateTable
CREATE TABLE "Conteudos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "ContentType" NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conteudos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscricoes" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "group" TEXT,
    "sector" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inscricoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inscricoes" ADD CONSTRAINT "Inscricoes_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
