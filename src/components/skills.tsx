import { Card, Text, Flex } from "@chakra-ui/react"

export const Skills = () => {
    return(
        <Flex backgroundColor={'green'} 
            w={'25%'} gap={1} 
            alignItems={'center'} 
            justifyContent={'center'}
            h={'23%'} borderRadius={'8px'}>
                    <Text fontSize={12}>O</Text>
                    <Text fontSize={12} fontFamily={'Poppins'} color={'#fff'}>Testetxt</Text>
            </Flex>
    )
}