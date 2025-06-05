-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "levado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alimento_pkey" PRIMARY KEY ("id")
);
