// Este hook me permite cambiar el valor de un booleano a falso, verdadero y un toggle

import { useState } from 'react'

export const useBoolean = () => {
  const [value, setValue] = useState(false)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue((prev) => !prev)

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  }
}
