import {Button} from '@chakra-ui/react'

export const GoToPokedex = () => {
    return(
        <Button ml={'auto'} bg={'#33A4F5'} color={'white'} _hover={{
            bg:'#0094FF'
        }}
        w={'20vh'}>Pokedéx</Button>
    )
}