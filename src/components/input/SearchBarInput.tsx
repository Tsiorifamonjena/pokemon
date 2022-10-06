import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarInput: React.FC<{
  label: string;
}> = ({ label }) => (
  <Box sx={{ marginY: 5 }}>
    <TextField
      fullWidth
      label={label}
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Box>
);

export default SearchBarInput;
