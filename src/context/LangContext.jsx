import { useContext, useState, createContext } from 'react'

export const LangContext = createContext()

const languages = {
  es: {
    login: 'Iniciar Sesion',
    logout: 'Cerrar Sesion',
    email: 'Correo Electronico',
    password: 'Contraseña',
    required: 'Este campo es requerido',
  },
  en: {
    login: 'Login',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    required: 'this field is required',
  },
}

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en') // es | en

  const changeLang = (language) => {
    setLang(language)
  }

  // translate
  // t('login')
  const t = (text) => {
    const langMain = languages[lang]

    return langMain[text] || text
  }

  return (
    <LangContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => useContext(LangContext)
