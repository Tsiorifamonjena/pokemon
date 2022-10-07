import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
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
    postPokemons: builder.mutation<unknown, Pokemon>({
      query: (body) => ({
        url: "pokemons",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Pokemon", id: "LIST" }],
    }),
    putPokemons: builder.mutation<unknown, Omit<Pokemon, "created">>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `pokemons/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Pokemon", id }],
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useDeletePokemonMutation,
  usePostPokemonsMutation,
  usePutPokemonsMutation,
} = pokemonApi;
