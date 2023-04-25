import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { FavMoviesContext } from '../../context/FavMoviesContext'

export const MovieCard = ({ movie }) => {
  const { favorites, addMovieToFavorite } = useContext(FavMoviesContext)

  const isFavorite = favorites.some((m) => m.id === movie.id)

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={movie.img} alt={movie.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{movie.name}</Heading>
          <IconButton
            aria-label="Search database"
            colorScheme={isFavorite ? 'yellow' : 'gray'}
            icon={<StarIcon color={isFavorite ? 'white' : 'black'} />}
            onClick={() => addMovieToFavorite(movie)}
          />
        </Stack>
      </CardBody>
    </Card>
  )
}
