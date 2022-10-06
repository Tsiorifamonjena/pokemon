import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ng-pokemon-api.herokuapp.com/",
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], void>({
      query: () => "pokemons",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Pokemon", id } as const)),

              { type: "Pokemon", id: "LIST" },
            ]
          : [{ type: "Pokemon", id: "LIST" }],
    }),
    deletePokemon: builder.mutation<unknown, number>({
      query: (id) => {
        return {
          url: `pokemons/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Pokemon", id }],
    }),
  }),
});

export const { useGetPokemonsQuery, useDeletePokemonMutation } = pokemonApi;
