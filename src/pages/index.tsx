import { Flex,Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../componets/form/input'


export default function SingIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as='form' width='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir="column">
        <Stack spacing="5">
          <Input name="email" type="email" label="E-mail"/>
          <Input name="password" type="password" label="Password"/>
          <Button type="submit" colorScheme='pink'>Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
