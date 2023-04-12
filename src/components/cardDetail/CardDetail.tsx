import { Card, Flex } from "@chakra-ui/react"
import { BaseStats } from "./baseStats"
import pokeball from '../../assets/imglogo/pokedexnoback.svg'

export const CardDetail = () => {
	return (
		<Flex bgColor={'#729F92'}
			w={'90%'}
			h={'70vh'}
			borderRadius={'37.89px'} gap={'50px'}
			bgImage={pokeball} bgRepeat={"no-repeat"} bgSize={'50%'} bgPosition={'right'}>

			<Flex alignItems={'center'} h={'100%'}
				gap={'35px'} paddingLeft={'50px'} w={'50%'}>
				<Flex flexDirection={'column'} w={'50%'} h={'90%'} justifyContent={'center'} gap={'35px'}>
					<Card h={'50%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
						image
					</Card>
					<Card h={'50%'} w={'100%'} alignItems={'center'} justifyContent={'center'}>
						image
					</Card>
				</Flex>

				<BaseStats/>
			</Flex>

			<Flex flexDirection={'column'} w={'20%'}>
				<Flex h={'30%'}>teste</Flex>
				<Card h={'65%'} w={'100%'}>
					d
				</Card>
			</Flex>
		</Flex>
	)
}
