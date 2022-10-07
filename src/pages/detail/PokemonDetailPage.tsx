import {
  Button,
  Card,
  CardActions,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeletePokemonMutation } from "../../app/services/api/pokemonApi";
import { useGetDetailPokemon } from "../../app/services/hooks/useGetDetailPokemon";
import withAuthGuard from "../../components/auth/withAuthGuard";
import PokemonDetailCard from "../../components/cards/PokemonDetailCard";
import DeleteDialog from "../../components/modal/DeleteDialog";
import UpdatePokemonModal from "../../components/modal/UpdatePokemonModal";

const PokemonDetailPage: React.FC = () => {
  const { pokemonId } = useParams();
  const { pokemon: data } = useGetDetailPokemon(pokemonId);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const [deletePokemon] = useDeletePokemonMutation();
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

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
            <Button onClick={() => setShowUpdateModal(true)} size="small">
              Edit
            </Button>
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
      {pokemonId && (
        <UpdatePokemonModal
          open={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          pokemonId={pokemonId}
        />
      )}
    </Container>
  );
};

export default withAuthGuard(PokemonDetailPage);
