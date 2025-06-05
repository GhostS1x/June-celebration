// src/app/api/supabase/route.js

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const alimentos = [
  "Bolos",
  "Cachorro-quente",
  "Milho cozido",
  "Batata doce",
  "Canjica",
  "Arroz doce",
  "Caldo de kenga",
  "Caldo verde",
  "Doces",
  "Salgados",
  "Refrigerante",
  "Caldo de mocotó",
  "Quentão",
  "Pastel",
  "Pipoca",
  "Vinho quente",
  "Paçoca",
  "Prato típico",
]

export async function GET() {
  for (const nome of alimentos) {
    const { error } = await supabase.from('alimentos').insert([{ nome }])
    if (error) {
      return Response.json({ message: `Erro ao inserir ${nome}`, error }, { status: 500 })
    }
  }

  return Response.json({ message: 'Todos os alimentos foram inseridos com sucesso!' })
}
