import { Button } from '@chakra-ui/react'
import { useCounter } from '../hooks/useCounter'

export const Counter = () => {
  const { counter, increase, decrease, reset } = useCounter()

  return (
    <div>
      <h2>{counter}</h2>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
      <Button onClick={reset}>reset</Button>
    </div>
  )
}
