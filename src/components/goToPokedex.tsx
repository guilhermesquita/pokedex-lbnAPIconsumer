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
        w={'28vh'}
        h={'7vh'}>Pokédex</Button>
    )
}