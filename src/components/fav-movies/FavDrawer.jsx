import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { useContext } from 'react'
import { FavMoviesContext } from '../../context/FavMoviesContext'
import { FavMovieCard } from './FavMovieCard'

export const FavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { favorites, clearFavorites } = useContext(FavMoviesContext)

  return (
    <>
      <Button
        colorScheme="yellow"
        color="white"
        onClick={onOpen}
        leftIcon={<StarIcon />}
      >
        Fav Movies
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Favorite Movies :D</DrawerHeader>

          <DrawerBody>
            <SimpleGrid gap={5}>
              {favorites.map((movie) => (
                <FavMovieCard key={`fav-${movie.id}`} movie={movie} />
              ))}

              {!favorites.length && (
                <Text align="center">No hay peliculas :(</Text>
              )}
            </SimpleGrid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={clearFavorites}>
              Clear
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
