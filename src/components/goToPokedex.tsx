import {Button, border} from '@chakra-ui/react'

export const GoToPokedex = () => {
    return(
        <Button bg={'#33A4F5'} 
        position={'absolute'} 
        right={'2vw'} 
        color={'white'} 
        _hover={{
            bg:'#0094FF'
        }}
        w={'15%'}
        h={'7vh'}
        fontFamily={'Poppins'}
        fontSize={'100%'}>Pokédex</Button>
    )
}