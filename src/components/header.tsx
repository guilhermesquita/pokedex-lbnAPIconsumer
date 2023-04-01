import {Flex} from '@chakra-ui/react'
import { GoToPokedex } from './goToPokedex'

export const Header = () => {
    return(
        <Flex alignItems={'center'}  justifyContent={'center'} borderColor={'red'}>
            <p>header</p>
            <GoToPokedex/>
        </Flex>
    )
}