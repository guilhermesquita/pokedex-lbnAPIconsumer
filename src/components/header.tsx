import {Flex} from '@chakra-ui/react'
import { GoToPokedex } from './goToPokedex'
import pokemonLogo from '../assets/imglogo/pokemonlogo.svg'

export const Header = () => {
    return(
        <Flex height={'15vh'} justifyContent={'center'} alignItems={'center'} bg={'#FFFFFF'} width={'100%'}>
            <img src={pokemonLogo} alt="officallogo" width={'15%'}/>
            <GoToPokedex/>
        </Flex>
    )
}