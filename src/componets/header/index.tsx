import { Flex} from '@chakra-ui/react'
import { Logo } from './logo'
import { Notification } from './Notification'
import { Profile } from './profile'
import { Search } from './Search'

export function Header() {
    return (
        <Flex as='header' w="100%" maxWidth={1280} h="20" mx="auto" mt="4" px="6" align="center">
            <Logo/>
            
            <Search/>
            <Flex align='CENTER' ml="auto">
                <Notification/>
                <Profile/>
            </Flex>
        </Flex>

    )
}