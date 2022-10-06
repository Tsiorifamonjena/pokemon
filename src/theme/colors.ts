const Colors = {
  normal: "#dcdde1",
  feu: "#e84118",
  eau: "#00a8ff",
  electrik: "#fbc531",
  poison: "#8c7ae6",
  fée: "#ff9ff3",
} as any;

export function generatePokemonColors(pokemonType: string) {
  return Colors[pokemonType] || "#f5f6fa";
}
