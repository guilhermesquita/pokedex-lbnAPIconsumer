import { Button, Flex } from '@chakra-ui/react'
import { GoToPokedex } from './goToPokedex'
import pokemonLogo from '../assets/imglogo/pokemonlogo.svg'
import { GoToPokelist } from './goToPokelist'

interface Props {
	numberButton: number
}

export const Header = (props: Props) => {


	const changeButton = () => {
		if (props.numberButton === 0) {
			return (
				<GoToPokedex />
			)
		} else if (props.numberButton === 1) {
			return <GoToPokelist/>
		} else {
			return <Button>cscs</Button>
		}
	}

	return (
		<Flex height={'15vh'} justifyContent={'center'} alignItems={'center'} bg={'#FFFFFF'} width={'100%'}>
			<img src={pokemonLogo} alt="officallogo" width={'15%'} />
			{changeButton()}
		</Flex>
	)
}
