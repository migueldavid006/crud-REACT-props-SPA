import React from 'react'

const Servicio = ({serv,setServicio}) => {
  const editObj = () =>{
    setServicio(serv)
  }

  return (
    <div>Servicio
      <p>{serv.titulo}</p>
      <p>{serv.description}</p>

      {/* el objeto que recibe setServicio es el elemento de map()  */}
      <button onClick={editObj}>editar</button>
      {/* <button onClick={}>delete</button> */}
    </div>
  )
}

export default Servicio