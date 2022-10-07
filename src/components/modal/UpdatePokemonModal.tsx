import React from "react";
import Modal from "@mui/material/Modal";
import PokemonFormCards from "../cards/PokemonFormCards";
import withUpdateForm from "./withUpdateForm";

type UpdatePokemonModalProps = {
  open: boolean;
  pokemonId: string;
  onClose: () => void;
};

const UpdatePokemonModal: React.FC<UpdatePokemonModalProps> = ({
  open,
  pokemonId,
  onClose,
}) => {
  const Form = withUpdateForm(PokemonFormCards, pokemonId);
  return (
    <Modal open={open} onClose={onClose}>
      <Form />
    </Modal>
  );
};

export default UpdatePokemonModal;
