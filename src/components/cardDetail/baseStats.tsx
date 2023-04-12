import { Card, Flex, Text } from "@chakra-ui/react"

export const BaseStats = () => {
	return(
		<Card height={'90%'} w={'40%'} fontSize={'20px'} padding={'20px'}>
			<Flex>
				<Text fontFamily={'Poppins'} fontWeight={'700'}>Base Stats</Text>
			</Flex>
		</Card>
	)
}
