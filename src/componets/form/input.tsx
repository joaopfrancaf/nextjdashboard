import { Input as Chakrainput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react';
import React, { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ChakraInputProps { //InputProps do chackra.props significa que pode passar qualquer tipo de proprioedade para dentro do componente ex.:id="" name="" focusBorderColor="" label=""
    name: string;
    label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}, ref) => { //..rest é a variavel que armazena todos as propriedades que for passar para o componente ex.:id="" name="" focusBorderColor="" label=""
    return  (
    <FormControl>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> /* htmlFor é para indicar qual input ela pertence (precisa coloca id no input tambem), e essa expressão toda só vai ser mostrada caso o label exista */} 
        <Chakrainput id={name} name={name} focusBorderColor='pink.500' bgColor="gray.900" variant="filled" _hover={{bgColor: 'gray.900'}} size='lg' {...rest} ref={ref}></Chakrainput>
      </FormControl>
    );
}

export const Input = forwardRef(InputBase);