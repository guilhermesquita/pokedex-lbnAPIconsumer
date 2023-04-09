import {Box, Card, Flex, Text} from '@chakra-ui/react'
import { Header } from '../components/header'
import { CardPokemon } from '../components/card/cardPokemon'

export const Pokelist = () => {
  return(
    <Card>
      <Header numberButton={0}/>
      <Flex backgroundColor={'#5D5D5D'} h={'100%'} w={'100%'} paddingTop={'60px'}
      fontSize={'2.7rem'} paddingLeft={'90px'} flexDirection={'column'} gap={'50px'} paddingBottom={'50px'}>

        <Text fontFamily={'Poppins'}
        fontWeight={700}
        color={'#fff'}>
          Todos Pokémons
        </Text>

        <Flex gap={'25px'} flexWrap={'wrap'} rowGap={'90px'}>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
          <CardPokemon/>
        </Flex>

      </Flex>
    </Card>
  )
}
