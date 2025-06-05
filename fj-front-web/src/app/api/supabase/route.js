import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY 
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

export default async function handler(req, res) {
  for (const nome of alimentos) {
    const { error } = await supabase.from('alimentos').insert([{ nome }])
    if (error) {
      return res.status(500).json({ message: `Erro ao inserir ${nome}`, error })
    }
  }

  res.status(200).json({ message: 'Todos os alimentos foram inseridos com sucesso!' })
}
