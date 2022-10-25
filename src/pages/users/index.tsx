import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr,Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../componets/header";
import { Pagination } from "../../componets/pagination";
import { Sidebar } from "../../componets/sidebar";

export default function Userlist() {
    const isWideVersion = useBreakpointValue ({
        base: false,
        lg:true
    })
    return (
        <Box>
            <Header/>

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar/>


                    <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">Usuarios</Heading>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}></Icon> }> add user</Button>
                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4","4","6"]}color="gray.300" width="8">
                                        <Checkbox colorScheme="pink"></Checkbox>
                                    </Th>
                                    <Th>Usuarios</Th>
                                    { isWideVersion && <Th>data de cadastro</Th>}
                                    <Th width="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={["4","4","6"]}>
                                        <Checkbox colorScheme="pink"></Checkbox>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">João Pedro França Freitas</Text>
                                            <Text fontSize="sm" color="gray.300">joaofrancaf@hotmail.com</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>12 de abril, 2022</Td>}
                                    <Td><Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiPencilLine}></Icon> }> edit</Button></Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Pagination/>
                    </Box>
                </Flex>
        </Box>
    )
}