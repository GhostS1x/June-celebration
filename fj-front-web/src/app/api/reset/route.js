import { resetLevados } from "@/lib/data";

export async function POST() {
  resetLevados();
  return Response.json({ sucesso: true });
}