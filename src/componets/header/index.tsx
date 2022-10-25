import { Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { Logo } from './logo'
import { Notification } from './Notification'
import { Profile } from './profile'
import { Search } from './Search'
import {useSidebarDrawer} from '../context/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
    const {onOpen} = useSidebarDrawer()
    
    const isWideVersion = useBreakpointValue ({
        base: false,
        lg: true,
    })
    return (
        <Flex as='header' w="100%" maxWidth={1280} h="20" mx="auto" mt="4" px="6" align="center">
            {!isWideVersion && (
                <IconButton icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" onClick={onOpen} mr="2" aria-label={''} >

                </IconButton>
            )}
            <Logo/>
            
            { isWideVersion && <Search/>}
            <Flex align='CENTER' ml="auto">
                <Notification/>
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>

    )
}