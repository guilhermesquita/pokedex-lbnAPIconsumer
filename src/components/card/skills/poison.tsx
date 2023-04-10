import { Text, Flex } from "@chakra-ui/react"

export const Poison = () => {
    return(
        <Flex backgroundColor={'green'}
            w={'25%'} gap={1}
            alignItems={'center'}
            justifyContent={'center'}
						cursor={'pointer'}
            h={'30px'} borderRadius={'8px'}>
                    <Text fontSize={12}>O</Text>
                    <Text fontSize={12} fontFamily={'Poppins'} color={'#fff'}>Testetxt</Text>
            </Flex>
    )
}
