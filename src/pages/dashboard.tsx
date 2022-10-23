import { Flex } from "@chakra-ui/react";
import { Header } from "../componets/Header";
import { Sidebar } from "../componets/Sidebar";

export default function Dashboard () {
    return (
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
            </Flex>
        </Flex>
    ) 
}