import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  CardFooter,
  IconButton,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { FavMoviesContext } from '../../context/FavMoviesContext'

export const FavMovieCard = ({ movie }) => {
  const { removeMovieToFavorite } = useContext(FavMoviesContext)

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '100px' }}
        src={movie.img}
        alt={movie.name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{movie.name}</Heading>
        </CardBody>

        <CardFooter>
          <IconButton
            variant="ghost"
            colorScheme="red"
            icon={<DeleteIcon />}
            onClick={() => removeMovieToFavorite(movie.id)}
          />
        </CardFooter>
      </Stack>
    </Card>
  )
}
