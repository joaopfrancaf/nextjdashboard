import { Icon, Link, Text } from "@chakra-ui/react"
import { ElementType } from "react"
import { RiDashboardLine } from "react-icons/ri"

interface NavlinkProps {
    icon: ElementType,
    children: string
}

export function Navlink ({icon, children, ...rest}: NavlinkProps) {
    return (
        <Link display="flex" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}