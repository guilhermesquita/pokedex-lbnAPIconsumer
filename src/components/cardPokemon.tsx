import { Card, Text, Flex } from "@chakra-ui/react"
import { Skills } from "./skills"

export const CardPokemon = () => {
    return(
        <Flex width={'30%'} height={'25vh'} backgroundColor={'#729F92'} borderRadius={'12px'} paddingLeft={'30px'} 
        paddingTop={'25px'} flexDirection={'column'}>
            <Flex flexDirection={'column'}>
                {/* NOME E NUMERAÇÃO DO POKEMON */}
                <Flex>
                    <Text fontSize={'15px'} fontFamily={'Inter'} fontWeight={700} color="#fff">#01</Text>
                </Flex>

                <Flex>
                    <Text fontSize={'70%'} fontFamily={'Inter'} fontWeight={700} color="#fff">Bulbasaur</Text>
                </Flex>
            </Flex>

            <Skills/>

        </Flex>
    )
}