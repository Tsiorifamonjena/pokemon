import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

type DeleteDialogProps = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  onDelete,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Vous êtes sûr de vouloir supprimés ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Vous êtes sûr de vouloir supprimés ce pokémon définitivement
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={onDelete} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
