import { Box, InputAdornment, TextField } from "@mui/material";
import { debounce } from "@mui/material/utils";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarInput: React.FC<{
  label: string;
  onChange: (value: string) => any;
}> = ({ label, onChange }) => (
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
      onChange={({ target: { value } }) => debounce(onChange(value), 10000)}
    />
  </Box>
);

export default SearchBarInput;
