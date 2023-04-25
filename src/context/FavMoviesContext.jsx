import { useState, createContext } from 'react'

export const FavMoviesContext = createContext()

// children representa toda mi <App />
export const FavMoviesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addMovieToFavorite = (movie) => {
    // validar si la pelicula ya se encutra en el array
    // find - some
    const existMovie = favorites.some((m) => m.id === movie.id)
    if (!existMovie) {
      setFavorites([...favorites, movie])
    }
  }

  const removeMovieToFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id))
  }

  const clearFavorites = () => setFavorites([])

  return (
    <FavMoviesContext.Provider
      value={{
        favorites,
        addMovieToFavorite,
        removeMovieToFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavMoviesContext.Provider>
  )
}
