import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import { RiDashboardLine } from "react-icons/ri"
import Link from "next/link"
import { ActiveLink } from "../Activelink"

interface NavlinkProps {
    icon: ElementType,
    children: string,
    href: string
}

export function Navlink ({icon, children,href, ...rest}: NavlinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}