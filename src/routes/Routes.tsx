import { Routes } from "react-router"
import { Route } from "react-router-dom"
import { PokedexPage } from "../pages/PokedexPage"
import { Pokelist } from "../pages/Pokelist"
import { PokemonDetailPage } from "../pages/PokemonDetailPage"
import { NotFoundPage } from "../pages/NotFoundPage"

export const Router = () => {
  return(
    <Routes>
      <Route index element={<Pokelist/>}/>
      <Route path="/pokedex" element={<PokedexPage/>}/>
      <Route path="/:pokemon" element={<PokemonDetailPage/>}/>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}