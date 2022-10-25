import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContext = UseDisclosureReturn

const SidebarDrawerContext = createContext ({} as SidebarDrawerContext);

export function SidebarDrawerProvider ({children}: SidebarDrawerProviderProps) {
    const disclousure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclousure.onClose()
    }, [router.asPath] ) //toda vez que mudar a rota o drawer fecha

    return (
        <SidebarDrawerContext.Provider value={disclousure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)