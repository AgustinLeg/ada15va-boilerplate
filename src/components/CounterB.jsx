import { Button } from '@chakra-ui/react'
import { useCounter } from '../hooks/useCounter'

export const CounterB = () => {
  const { counter, increase, decrease, reset } = useCounter(100)

  return (
    <div>
      <h1>Counter B</h1>
      <div>
        <h2>{counter}</h2>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
        <Button onClick={reset}>reset</Button>
      </div>
    </div>
  )
}
