import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr,Text, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../componets/form/input";
import { Header } from "../../componets/header";
import { Pagination } from "../../componets/pagination";
import { Sidebar } from "../../componets/sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header/>

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar/>


                    <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                        <Heading size="lg" fontWeight="normal" >Criar Usuario</Heading>

                        <Divider my="6" borderColor="gray.700"/>

                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="nome completo"></Input>
                            <Input name="email" type="email" label="E-mail"></Input>
                            </SimpleGrid>

                            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="senha"></Input>
                            <Input name="password_congirmation" type="password" label="confirmar da senha"></Input>
                            </SimpleGrid>
                        </VStack>

                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                                <Button colorScheme="pink">Salvar</Button>
                            </HStack>
                        </Flex>
                    </Box>
                </Flex>
        </Box>
    )
}