import {Button, border} from '@chakra-ui/react'

export const GoToPokedex = () => {
    return(
        <Button bg={'#33A4F5'} position={'absolute'} right={'7vw'} color={'white'} _hover={{
            bg:'#0094FF'
        }}
        w={'20vh'}>Pokedéx</Button>
    )
}