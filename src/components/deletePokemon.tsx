import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { changePageToPokedex } from "../routes/coordinator"

export const DeletePokemon = () => {

	const navigate = useNavigate()

	return(
		<Button bg={'#FF6262'}
			position={'absolute'}
			right={'2vw'}
			color={'white'}
			transition='0.5s'
			_hover={{
				bg: '#F22E2E'
			}}
			w={'14%'}
			h={'7vh'}
			fontFamily={'Poppins'}
			fontSize={'90%'}
			fontWeight={400}
			onClick={()=>changePageToPokedex(navigate)}
			>Excluir da Pokédex</Button>
	)
}
