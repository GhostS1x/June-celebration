import { alimentos, getLevados } from "@/lib/data";

export async function GET() {
  return Response.json({ alimentos, levados: getLevados() });
}