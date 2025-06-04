import { alimentos, addLevar } from "@/lib/data";

export async function POST(req) {
  const body = await req.json();
  const { item } = body;

  if (!item || !alimentos.includes(item)) {
    return new Response(JSON.stringify({ erro: "Item inválido." }), { status: 400 });
  }

  addLevar(item);
  return Response.json({ sucesso: true });
}
