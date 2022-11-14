import { Flex,Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'; //api form para ao inves de criar 1 estado para cada dado no formulario, essa lib lida com isso
import { Input } from '../componets/form/input'

type SignInFormData = {
  email: string;
  password: string;
}
export default function SingIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSingIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout (resolve, 2000));

    console.log(values)
  }
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as='form' width='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSingIn)}>
        <Stack spacing="5">
          <Input name="email" type="email" label="E-mail" {...register('email')}/>
          <Input name="password" type="password" label="Password" {...register('password')}/>
          <Button type="submit" colorScheme='pink' isLoading={formState.isSubmitting}>Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
