import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import AllBeers from './components/pages/AllBeers/AllBeers'
import BeerDetails from './components/pages/shared/BeerDetails/BeerDetails'
import Navbar from './components/pages/shared/Navbar/Navbar'

function App() {
  const usedPath = useLocation().pathname

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all-beers' element={<AllBeers/>}/>
        <Route path='/:details/:id' element={<BeerDetails/>}/>
      </Routes>
      {usedPath !== "/" && <Navbar/>}
    </>
  )
}

export default App
