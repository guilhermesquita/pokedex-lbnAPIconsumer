import { NavigateFunction } from "react-router-dom";

export const changePageToPokedex = (navigate: NavigateFunction) => {
	navigate('/pokedex')
}

export const changePageToPokeList = (navigate: NavigateFunction) => {
	navigate('/')
}
