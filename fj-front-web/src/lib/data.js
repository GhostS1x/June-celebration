// lib/data.js

export const alimentos = [
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
];

export let levados = [];

export function addLevar(item) {
  if (item === "Prato típico") {
    levados.push(item);
  } else if (!levados.includes(item)) {
    levados.push(item);
  }
}

export function resetLevados() {
  levados = [];
}

export function getLevados() {
  return levados;
}
