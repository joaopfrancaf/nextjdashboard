import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile () {
    return (
        <Flex align='center'>
                    <Box mr='4' textAlign="right">
                        <Text>João Pedro</Text>
                        <Text color="gray.300">joaofrancaf@hotmail.com</Text>
                    </Box>
                <Avatar size="md" name="João Pedro" src=""></Avatar>
        </Flex>
    )
}