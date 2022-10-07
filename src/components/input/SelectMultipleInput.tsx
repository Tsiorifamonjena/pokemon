import React from "react";
import Select, { SelectProps } from "@mui/material/Select";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";

type SelectMultipleInputProps = SelectProps & { items: string[] };

const SelectMultipleInput: React.FC<SelectMultipleInputProps> = ({
  items,
  ...props
}) => {
  return (
    <Select
      multiple
      renderValue={(selected: unknown) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {(selected as string[]).map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
      {...props}
    >
      {items.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectMultipleInput;
