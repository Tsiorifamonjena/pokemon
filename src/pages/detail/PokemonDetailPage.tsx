import {
  Button,
  Card,
  CardActions,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeletePokemonMutation,
  useGetPokemonsQuery,
} from "../../app/services/api/pokemonApi";
import withAuthGuard from "../../components/auth/withAuthGuard";
import PokemonDetailCard from "../../components/cards/PokemonDetailCard";
import DeleteDialog from "../../components/modal/DeleteDialog";

const PokemonDetailPage: React.FC = () => {
  const { pokemonId } = useParams();
  const { data, isLoading } = useGetPokemonsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => {
      return {
        data: data?.find((pokemon) => pokemon.id.toString() === pokemonId),
        isLoading,
      };
    },
  });
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const [deletePokemon, { isLoading: isDeleting }] = useDeletePokemonMutation();

  async function handleDeletePokemon() {
    if (data && data.id) {
      await deletePokemon(data.id).unwrap();
      setOpenDialog(false);
      goBack();
    }
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
        Détail pokemon
      </Typography>
      <Typography variant="h2" textAlign={"center"}>
        {data?.name}
      </Typography>
      {data && (
        <Card>
          <PokemonDetailCard {...data} />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button onClick={goBack} size="small">
              Back
            </Button>
            <Button size="small">Edit</Button>
            <Button onClick={() => setOpenDialog(true)} size="small">
              Delete
            </Button>
          </CardActions>
        </Card>
      )}
      <DeleteDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onDelete={handleDeletePokemon}
      />
    </Container>
  );
};

export default withAuthGuard(PokemonDetailPage);
