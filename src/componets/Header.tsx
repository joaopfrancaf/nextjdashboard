import { Flex, Input, Text, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddFill } from 'react-icons/ri'
export function Header() {
    return (
        <Flex as='header' w="100%" maxWidth={1280} h="20" mx="auto" mt="4" px="6" align="center">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                  Dashgo
                  <Text as="span" color="pink.500" marginLeft="1">.</Text>
            </Text>
            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full">
                    <Input color="gray.50" variant='unstyled' px="4" mr="4" placeholder="Buscar na Plataforma" _placeholder={{color:'gray.400'}}></Input>
                <Icon as={RiSearchLine} fontSize="20"/> {/*toda vez que for usar uma icone exterior do chakra, tem que passar ela desse jeito*/}
            </Flex>

            <Flex
                align='CENTER'
                ml="auto"
            >
                <HStack spacing='8' mx='8' pr="8" py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700"> {/*horizontal Stack (o padrao fica em vertical)*/}
                    <Icon as={RiNotificationLine} fontSize="20"/>
                    <Icon as={RiUserAddFill} fontSize="20"/>
                </HStack>

                <Flex align='center'>
                    <Box mr='4' textAlign="right">
                        <Text>João Pedro</Text>
                        <Text color="gray.300">joaofrancaf@hotmail.com</Text>
                    </Box>
                <Avatar size="md" name="João Pedro" src=""></Avatar>
                </Flex>
            </Flex>
        </Flex>

    )
}