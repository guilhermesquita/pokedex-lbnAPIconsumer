import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { changePageToPokedex } from '../routes/coordinator'


export const GoToPokedex = () => {

	const navigate = useNavigate()

	return (
		<Button bg={'#33A4F5'}
			position={'absolute'}
			right={'2vw'}
			color={'white'}
			_hover={{
				bg: '#0094FF'
			}}
			w={'15%'}
			h={'7vh'}
			fontFamily={'Poppins'}
			fontSize={'100%'}
			onClick={()=>changePageToPokedex(navigate)}
			>Pokédex</Button>
	)
}
