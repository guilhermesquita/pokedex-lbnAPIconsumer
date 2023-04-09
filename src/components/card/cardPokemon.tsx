import { Text, Flex, Image } from "@chakra-ui/react"
import { Skills } from "./skills"
import { Details } from "./details"
import { ButtonAD } from "./buttonActiveDesactive"
import pokedexnoback from '../../assets/imglogo/pokedexnoback.svg'

export const CardPokemon = () => {
	return (
		<Flex width={'30%'} height={'27vh'} backgroundColor={'#729F92'} borderRadius={'12px'} paddingLeft={'30px'}
			paddingTop={'25px'} flexDirection={'column'} paddingRight={'20px'} position={'relative'}>
			<Flex flexDirection={'column'}>
				{/* NOME E NUMERAÇÃO DO POKEMON */}
				<Flex>
					<Text fontSize={'12px'} fontFamily={'Inter'} fontWeight={700} color="#fff">#01</Text>
				</Flex>

				<Flex>
					<Text fontSize={'70%'} fontFamily={'Inter'} fontWeight={700} color="#fff">Bulbasaur</Text>
				</Flex>
			</Flex>

			<Flex flexDirection={'column'} gap={'30px'}>
				{/* SKILSS */}
				<Flex gap={'2px'}>
					<Skills />
					<Skills />
				</Flex>
				{/* DETALHE E CAPTURAR */}
				<Flex justifyContent={'space-between'} borderColor={'red'} alignItems={'center'}>
					<Details />
					<ButtonAD />
				</Flex>
			</Flex>

			<Image src={pokedexnoback}
			position={'absolute'}
			height={'30vh'}
			bottom={2}
			left={'29vh'}/>

		</Flex>
	)
}
