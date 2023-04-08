import { Card, Text, Flex, Button } from "@chakra-ui/react"
import { Skills } from "./skills"

export const CardPokemon = () => {
	return (
		<Flex width={'30%'} height={'27vh'} backgroundColor={'#729F92'} borderRadius={'12px'} paddingLeft={'30px'}
			paddingTop={'25px'} flexDirection={'column'} paddingRight={'20px'}>
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

				<Flex gap={'2px'}>
					<Skills />
					<Skills />
				</Flex>

				<Flex justifyContent={'space-between'} borderColor={'red'} alignItems={'center'}>

					<Text fontSize={'13px'} color={'#fff'} fontFamily={'Poppins'} fontWeight={700}
						textDecoration={'underline'}>
						<a href="#">Detalhes</a></Text>

					<Button color={'black'} fontSize={'14px'} fontWeight={400}
						width={'38%'} fontFamily={'Poppins'} height={'35px'}>Capturar!</Button>

				</Flex>
			</Flex>

		</Flex>
	)
}
