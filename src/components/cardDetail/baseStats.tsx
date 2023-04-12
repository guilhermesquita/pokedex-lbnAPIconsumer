import { Card, Flex, Text } from "@chakra-ui/react"

export const BaseStats = () => {
	return(
		<Card height={'90%'} w={'40%'} fontSize={'20px'} padding={'20px'}>
			<Flex>
				<Text fontFamily={'Poppins'} fontWeight={'700'} w={'100%'} borderBottom={'2px'}
				borderColor={'#EFF1F0'} borderBottomWidth={'1px'}>Base Stats</Text>
			</Flex>
		</Card>
	)
}
