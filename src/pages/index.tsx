import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import React from 'react'


export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as='form' width='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir="column">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor='email'>E-mail</FormLabel> {/* htmlFor é para indicar qual input ela pertence (precisa coloca id no input tambem) */}
            <Input id='email' name='email' type='email' focusBorderColor='pink.500' bgColor="gray.900" variant="filled" _hover={{bgColor: 'gray.900'}} size='lg'></Input>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' name='password' type="password" focusBorderColor='pink.500' bgColor="gray.900" variant="filled" _hover={{bgColor: 'gray.900'}} size='lg'></Input>
          </FormControl>
          <Button type="submit" colorScheme='pink'>Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
