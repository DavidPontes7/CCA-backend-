-- CreateTable
CREATE TABLE "LeituraDiaria" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titulo" TEXT NOT NULL,
    "corLiturgica" TEXT NOT NULL,
    "primeiraLeitura" TEXT NOT NULL,
    "salmoResponsorial" TEXT NOT NULL,
    "segundaLeitura" TEXT,
    "evangelho" TEXT NOT NULL,

    CONSTRAINT "LeituraDiaria_pkey" PRIMARY KEY ("id")
);
