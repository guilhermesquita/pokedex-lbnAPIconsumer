import { Button, Flex } from '@chakra-ui/react'
import { GoToPokedex } from './goToPokedex'
import pokemonLogo from '../assets/imglogo/pokemonlogo.svg'
import { GoToPokelist } from './goToPokelist'
import { DeletePokemon } from './deletePokemon'

interface Props {
	numberButton: number
}

export const Header = (props: Props) => {


	const changeButton1 = () => {
		if(props.numberButton === 3){
			return <GoToPokelist/>
		}
	}

	const changeButton = () => {
		if (props.numberButton === 0) {
			return (
				<GoToPokedex />
			)
		} else if (props.numberButton === 1) {
			return <GoToPokelist/>
		} else {
			return <DeletePokemon/>
		}
	}

	return (
		<Flex height={'15vh'} justifyContent={'center'} alignItems={'center'} bg={'#FFFFFF'} width={'100%'}>
			{changeButton1()}
			<img src={pokemonLogo} alt="officallogo" width={'15%'} />
			{changeButton()}
		</Flex>
	)
}
