import { Card, Flex, Text } from "@chakra-ui/react"
import { Header } from "../components/header"
import { CardDetail } from "../components/cardDetail/CardDetail"
import pokeball from '../assets/imglogo/pokedexnoback.svg'

export const PokemonDetailPage = () => {
	return (
		<Card>
			<Header numberButton={3} />
			<Flex backgroundColor={'#5D5D5D'} h={'100%'} w={'100%'} paddingTop={'60px'}
				fontSize={'2.7rem'} paddingLeft={'90px'} flexDirection={'column'} gap={'50px'} paddingBottom={'50px'}
				bgImage={pokeball} bgRepeat={"no-repeat"} bgSize={'60%'} bgPosition={'center'}>

				<Text fontFamily={'Poppins'}
					fontWeight={700}
					color={'#fff'}>
					Detalhes
				</Text>

				<CardDetail />
			</Flex>
		</Card>
	)
}
