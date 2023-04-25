import { Heading, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { FavDrawer } from './fav-movies/FavDrawer'
import { LoginModal } from './auth/LoginModal'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { LangMenu } from './lang/LangMenu'

export const Header = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <SimpleGrid columns={2} p={2}>
      <Heading as="h1">15va</Heading>
      <HStack justifyContent="flex-end">
        {user ? <Button onClick={logout}> Logout</Button> : <LoginModal />}
        <FavDrawer />
        <LangMenu />
      </HStack>
    </SimpleGrid>
  )
}
