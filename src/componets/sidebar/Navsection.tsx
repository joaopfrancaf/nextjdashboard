import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface NavsectionProps {
    title: string,
    children: ReactNode
} 
export function Navsection ({title, children}:NavsectionProps) {
    return (
        <Box>
            <Text fontWeight='bold' color="gray.400" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>               
        </Box>
    )
}