
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const alimentos = await prisma.alimento.findMany();
  return NextResponse.json(alimentos);
}