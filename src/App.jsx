import React, { useState } from 'react'
import Form from './components/Form'
import Main from './components/Main'

const App = () => {
  const [servicios, setServicios] = useState([]);
  const [servicio, setServicio] = useState({})
  return (
    <div>
      <Main
       servicios={servicios}
       setServicio={setServicio}
      />

      <Form
      
      servicio={servicio}
      servicios={servicios}

      setServicio={setServicio}
      setServicios={setServicios}
      />

    </div>
  )
}

export default App