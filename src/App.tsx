import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddPokemonPage from "./pages/add/AddPokemonPage";
import PokemonDetailPage from "./pages/detail/PokemonDetailPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pokemon/:pokemonId",
    element: <PokemonDetailPage />,
  },
  {
    path: "add",
    element: <AddPokemonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
