
import HomePage from './components/landingPage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rcorp from './components/Rcorp'
import Innovative_Community from './components/Innovative_Community'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects/rcorp' element={<Rcorp />} />
      <Route path='/projects/innovative' element={<Innovative_Community />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
