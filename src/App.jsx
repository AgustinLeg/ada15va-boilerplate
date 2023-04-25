import { Counter } from './components/Counter'
import { CounterB } from './components/CounterB'
import { Header } from './components/Header'
import { MovieList } from './components/movies/MovieList'
import { Stack } from '@chakra-ui/react'
import { useBoolean } from './hooks/useBoolean'

function App() {
  const { value, setTrue } = useBoolean()

  return (
    <Stack as="main" spacing={8}>
      <Header />
      <MovieList />
      <Counter />
      <CounterB />

      <h1>{value ? 'Verdadero' : 'Falso'}</h1>
      <button onClick={setTrue}>Cambiar</button>
    </Stack>
  )
}

export default App
