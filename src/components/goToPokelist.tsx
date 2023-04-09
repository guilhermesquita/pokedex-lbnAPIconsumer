import { Flex, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { changePageToPokeList } from "../routes/coordinator"

export const GoToPokelist = () => {

	const navigate = useNavigate()

	return (
		<Flex position={'absolute'}
		left={'7vw'}>
			<Text cursor={"pointer"} fontFamily={'Poppins'} fontWeight={700} fontSize={'17px'}>
				<a onClick={()=>changePageToPokeList(navigate)}>Todos Pokémons</a>
			</Text>
		</Flex>
	)
}
