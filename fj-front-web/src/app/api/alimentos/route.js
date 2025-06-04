import { alimentos, getLevados, addLevar } from "@/lib/data";

// GET - Lista alimentos e levados
export async function GET() {
  return Response.json({ alimentos, levados: getLevados() });
}

// POST - Adiciona um item na lista de levados
export async function POST(req) {
  const { item } = await req.json();
  addLevar(item);
  return Response.json({ success: true });
}