import { Card, Flex } from "@chakra-ui/react"
import { Header } from "../components/header"

export const PokedexPage = () => {
  return(
    <Card>
			<Header numberButton={1}/>
			<Flex backgroundColor={'#5D5D5D'} h={'100vh'} w={'100%'} paddingTop={'60px'}
      fontSize={'2.7rem'} paddingLeft={'90px'} flexDirection={'column'} gap={'50px'} paddingBottom={'50px'}></Flex>
		</Card>
  )
}
