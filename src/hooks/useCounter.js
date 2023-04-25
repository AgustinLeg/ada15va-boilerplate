import { useState } from 'react'

// Reglas de un custom hook
// 1 - Tiene que empezar con "use"
// 2 - Puede llamar a otros hooks (useState, useEffect, useCallback, useMemo)
// 3 - No renderiza jsx
// 4 - No se debe retorar "set"

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue)

  const increase = () => setCounter((prev) => prev + 1)
  const decrease = () => setCounter((prev) => prev - 1)
  const reset = () => setCounter(0)

  return {
    counter,
    increase,
    decrease,
    reset,
  }
}
