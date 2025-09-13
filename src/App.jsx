
import { useState } from 'react'
import './App.css'
import Inicio from './pages/Inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Detalles from './components/Detalles'
import Descuento from './components/Descuento'

function App() {
  const [descuento, setDescuento] = useState(0);

  return (
    <Router>
      <div className='container'>
        <Navbar/>
        
        {/* Nuevo componente de descuento */}
        <Descuento onDescuentoChange={setDescuento} />

        <Routes>
          <Route path='/productos/:id' element={<Detalles descuento={descuento} />} />
          <Route path='/' element={<Inicio/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<Productos descuento={descuento} />} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
