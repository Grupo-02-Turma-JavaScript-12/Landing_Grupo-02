import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CardIntegrantes } from './components/cardintegrantes/CardIntegrantes'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='min-h-[80vh]'>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/integrantes' element={<CardIntegrantes />} />
        </Routes>  
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
