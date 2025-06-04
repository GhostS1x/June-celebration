const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

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
  "Prato típico" 
];


let levados = [];

app.use(cors());
app.use(express.json());

app.get("/alimentos", (req, res) => {
  res.json({ alimentos, levados });
});

app.post("/levar", (req, res) => {
  const { item } = req.body;

  if (!item || !alimentos.includes(item)) {
    return res.status(400).json({ erro: "Item inválido." });
  }

  if (item === "Prato típico") {
    levados.push(item);
  } else {
    if (!levados.includes(item)) {
      levados.push(item);
    }
  }

  res.json({ sucesso: true });
});

// Rota para resetar os levados
app.post("/reset", (req, res) => {
  levados = [];
  res.json({ sucesso: true });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://192.168.1.104:${PORT}`);
});
