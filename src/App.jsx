import { Suspense, useState, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Suspense fallback={<div>Loading page...</div>}>
      <Navigation/>
      
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage/>} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast/>} />
          <Route path='reviews' element={<MovieReviews/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </Suspense>
    </main>
  )
}

export default App
