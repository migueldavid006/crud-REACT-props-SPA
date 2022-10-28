import React, { useEffect, useState }  from 'react'



// el objeto proviene de boton onClick que SETEA a "servicio" {} para seteo 
// el objeto servicio solo contendra valores despues del EDIT
const Form = ({servicio,servicios,setServicio, setServicios}) => {
  const [titulo, setTitulo] = useState('')
  const [description, setDescription] = useState('')
  
  useEffect(() => {
    // if(Object.keys(servicio)>0){
    //   setTitulo(servicio.titulo)
    //   setDescription(servicio.description)
    // }
  if(Object.keys(servicio).length > 0){
      setTitulo(servicio.titulo)
      setDescription(servicio.description)
  }
  }, [servicio])
  
  // console.log(servicio)

  // const objetoServicio = {
  //   titulo:titulo,
  //   description: description
  // }

  const generarId = () =>{
    const fecha = Date.now()
    const math = Math.random().toString(36).substring(2)
    return fecha + math
  }

const handleSubmit = (e) =>{
  e.preventDefault();




  const objetoServicio = {
    titulo:titulo,
    description: description,
  }
  
  //desde aqui gracias al acceso del valor del estado {} servicios  
  //podemos comprobar ste objet vacio q contendra un id cuando se llene con onClick() EDIT 
  // servicio.id significa que el OBJETO EXISTE entonces estamos ante una EDICION
  if(servicio.id){
    objetoServicio.id = servicio.id
    console.log(objetoServicio)
    console.log(servicio)

  const servciosActualizado = servicios.map(servicioMap => servicioMap.id === 
    servicio.id ? objetoServicio : servicioMap)
  
    setServicios(servciosActualizado)
    setServicio({})
  }else{
    console.log('nuevo REGISTER')
    objetoServicio.id = generarId()
setServicios([...servicios,objetoServicio])

}

  setTitulo('')
  setDescription('')
}


  return (
    
       <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="titulo">title</label>
            <input
               id='titulo'
               type="text"
                placeholder='ingrese titulo'
                name='titulo'
                value={titulo}
                onChange={(e)=>setTitulo(e.target.value)}    
             />
        </div>
        <div>
            <label htmlFor="titulo">description</label>
            <input
               id='description'
               type="text"
                placeholder='ingrese description'
                name='description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}    
             />
        </div>
      
    <input 
    type="submit" 
    value="ENVIAR"
    />

    </form>
  
  )
}

export default Form
