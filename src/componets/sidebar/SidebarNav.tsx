import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { Navlink } from "./Navlink";
import { Navsection } from "./Navsection";

export function SidebarNav () {
    return (
        <Stack spacing="12" align="flex-start">
                <Navsection title="GERAL">
                    <Navlink icon={RiDashboardLine} href="/dashboard">Dashboard</Navlink>
                    <Navlink icon={RiContactsLine} href="/users">Usuarios</Navlink>
                </Navsection>
                <Navsection title="AUTOMAÇÃO">
                    <Navlink icon={RiInputMethodLine} href="/forms">Forms</Navlink>
                    <Navlink icon={RiGitMergeLine} href="/automation">Automação</Navlink>
                </Navsection>
            </Stack>
    )
}