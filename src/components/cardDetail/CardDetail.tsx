import { Card, Flex, Text } from "@chakra-ui/react"
import { BaseStats } from "./baseStats"
import pokeball from '../../assets/imglogo/pokedexnoback.svg'
import { Skills } from "../card/skills"

export const CardDetail = () => {
	return (
		<Flex bgColor={'#729F92'}
			w={'90%'}
			h={'70vh'}
			borderRadius={'37.89px'} gap={'50px'}
			bgImage={pokeball} bgRepeat={"no-repeat"} bgSize={'50%'} bgPosition={'right'}>

			<Flex alignItems={'center'} h={'100%'}
				gap={'35px'} paddingLeft={'50px'} w={'60%'}>
				<Flex flexDirection={'column'} w={'50%'} h={'90%'} justifyContent={'center'} gap={'35px'}>
					<Card h={'50%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
						image
					</Card>
					<Card h={'50%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
						image
					</Card>
				</Flex>

				<BaseStats />
			</Flex>

			<Flex flexDirection={'column'} w={'20%'}>
				<Flex flexDirection={'column'} h={'30%'} justifyContent={'center'}>
					{/* NOME E NUMERAÇÃO DO POKEMON */}
					<Flex>
						<Text fontSize={'12px'} fontFamily={'Inter'} fontWeight={700} color="#fff">#01</Text>
					</Flex>

					<Flex>
						<Text fontSize={'70%'} fontFamily={'Inter'} fontWeight={700} color="#fff">Bulbasaur</Text>
					</Flex>

					<Flex gap={'5px'}>
						<Skills />
						<Skills />
					</Flex>

				</Flex>
				<Card h={'65%'} w={'100%'}>
					d
				</Card>
			</Flex>
		</Flex>
	)
}
