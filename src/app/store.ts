import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/api/pokemonApi";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});