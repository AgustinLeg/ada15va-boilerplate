import { movies } from '../../data/movies'
import { MovieCard } from './MovieCard'

import { Flex } from '@chakra-ui/react'

export const MovieList = () => {
  return (
    <Flex gap={5} wrap="wrap" justify="center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Flex>
  )
}
