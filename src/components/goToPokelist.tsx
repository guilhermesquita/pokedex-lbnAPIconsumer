import { Flex, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { changePageToPokeList } from "../routes/coordinator"
import arrow from '../assets/arrow.svg'

export const GoToPokelist = () => {

	const navigate = useNavigate()

	return (
		<Flex position={'absolute'}
		left={'7vw'} textAlign={'center'}>
			<Image src={arrow}/>
			<Text cursor={"pointer"} fontFamily={'Poppins'} fontWeight={700} fontSize={'17px'} textDecoration={'underline'}>
				<a onClick={()=>changePageToPokeList(navigate)}>Todos Pokémons</a>
			</Text>
		</Flex>
	)
}
