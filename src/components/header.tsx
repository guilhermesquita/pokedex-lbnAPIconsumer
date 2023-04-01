import {Flex} from '@chakra-ui/react'
import { GoToPokedex } from './goToPokedex'

export const Header = () => {
    return(
        <Flex height={'10vh'} justifyContent={'center'} alignItems={'center'} bg={'red'} width={'100vw'}>
            <p>sdcd</p>
            <GoToPokedex/>
        </Flex>
    )
}