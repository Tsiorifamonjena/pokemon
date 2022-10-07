import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  TextField,
  SxProps,
  CardActions,
  Button,
} from "@mui/material";
import SelectMultipleInput from "../input/SelectMultipleInput";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

const texFieldStyle = {
  marginBottom: 5,
} as SxProps;

const Types = ["Normal", "Feu", "Eau", "Electrik", "Poison", "Fée"];

export type PokemonFormProps = {
  name?: string;
  picture?: string;
  hp?: number;
  cp?: number;
  types?: string[];
  submit: (
    name: string,
    photo: string,
    hp: number,
    cp: number,
    types: string[]
  ) => void;
};

const PokemonFormCards: React.FC<PokemonFormProps> = (props) => {
  const [name, setName] = useState<string | undefined>(props.name);
  const [photo, setPhoto] = useState<string | undefined>(props.picture);
  const [hp, setHp] = useState<number | undefined>(props.hp);
  const [cp, setCp] = useState<number | undefined>(props.cp);
  const [types, setTypes] = useState<string[]>(props.types || []);
  const navigate = useNavigate();

  function submit() {
    if (name && photo && hp && cp) {
      props.submit(name, photo, hp, cp, types);
    }
  }

  return (
    <Card>
      <CardContent>
        <TextField
          sx={texFieldStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nom"
          fullWidth
          required
        />
        <TextField
          sx={texFieldStyle}
          label="Photo"
          fullWidth
          required
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <TextField
          sx={texFieldStyle}
          label="Points de vie"
          fullWidth
          required
          type="number"
          value={hp}
          onChange={(e) => setHp(parseInt(e.target.value))}
        />
        <TextField
          sx={texFieldStyle}
          label="Dégats"
          fullWidth
          required
          type="number"
          value={cp}
          onChange={(e) => setCp(parseInt(e.target.value))}
        />
        <FormControl fullWidth required>
          <InputLabel>Types</InputLabel>
          <SelectMultipleInput
            items={Types}
            value={types}
            onChange={(e) => {
              const value = e.target.value as string;
              setTypes(
                // On autofill we get a stringified value.
                typeof value === "string" ? value.split(",") : value
              );
            }}
          />
        </FormControl>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button size="small" onClick={submit}>
          Enregistrer
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonFormCards;
