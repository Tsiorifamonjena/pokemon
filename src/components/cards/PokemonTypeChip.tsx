import { Chip } from "@mui/material";
import React from "react";
import { generatePokemonColors } from "../../theme/colors";

const PokemonTypeChip: React.FC<{ types: string[] }> = ({ types }) => (
  <Chip
    label={types.join(",")}
    sx={{
      backgroundColor: generatePokemonColors(types[0].toLowerCase()),
    }}
  />
);

export default PokemonTypeChip;
