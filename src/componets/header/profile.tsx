import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData? : boolean
}
export function Profile ({showProfileData = true}: ProfileProps) {
    return (
        <Flex align='center'>
            { showProfileData && (
                    <Box mr='4' textAlign="right">
                        <Text>João Pedro</Text>
                        <Text color="gray.300">joaofrancaf@hotmail.com</Text>
                    </Box>
            )}
                <Avatar size="md" name="João Pedro" src=""></Avatar>
        </Flex>
    )
}