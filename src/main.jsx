import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { FavMoviesProvider } from './context/FavMoviesContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { LangProvider } from './context/LangContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <LangProvider>
          <FavMoviesProvider>
            <App />
          </FavMoviesProvider>
        </LangProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
)
