import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { generatePokemonColors } from "../../theme/colors";
import PokemonTypeChip from "./PokemonTypeChip";

type PokemonCardsProps = {
  name: string;
  picture: string;
  createdAt: Date;
  types: string[];
  onClick: () => void;
};

const PokemonCards: React.FC<PokemonCardsProps> = ({
  name,
  picture,
  createdAt,
  types,
  onClick,
}) => {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <div>
            <img src={picture} alt={name} />
          </div>
          <div>
            <Typography variant="subtitle1">{name}</Typography>
            <p>{createdAt.toLocaleDateString()}</p>
            <PokemonTypeChip types={types} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCards;
