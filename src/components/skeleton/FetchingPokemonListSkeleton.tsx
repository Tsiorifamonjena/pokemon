import React from "react";
import { Box, Skeleton } from "@mui/material";

const FetchingPokemonListSkeleton: React.FC = () => (
  <>
    {Array.from(new Array(3)).map((item, index) => (
      <Box key={index} sx={{ width: 300, marginRight: 0.5, my: 5 }}>
        <Skeleton variant="rectangular" width={300} height={200} />
      </Box>
    ))}
  </>
);

export default FetchingPokemonListSkeleton;
