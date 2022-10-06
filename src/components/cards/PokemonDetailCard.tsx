import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, CardContent, CardMedia } from "@mui/material";
import { Pokemon } from "../../app/services/api/types";
import PokemonTypeChip from "./PokemonTypeChip";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PokemonDetailCard: React.FC<Pokemon> = ({
  picture,
  name,
  hp,
  cp,
  types,
  created,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        image={picture}
        alt={name}
        sx={{ width: 300 }}
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="right">{name}</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell>Points de vie</TableCell>
                <TableCell align="right">{hp}</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell>Dégats</TableCell>
                <TableCell align="right">{cp}</TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell>Types</TableCell>
                <TableCell align="right">
                  <PokemonTypeChip types={types} />
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell>Date de création</TableCell>
                <TableCell align="right">
                  {new Date(created).toLocaleDateString()}
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Box>
  );
};

export default PokemonDetailCard;
