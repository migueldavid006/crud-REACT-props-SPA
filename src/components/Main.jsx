import React from 'react'
import Servicio from './Servicio'

const Main = ({servicios,setServicio}) => {
    console.log(setServicio)
  return (
    <div>
      {
        servicios.map(serv=>{
            return(
                <Servicio

                    key={serv.id}
                    serv={serv}
                    setServicio={setServicio}
                />
                  
            )
        })
      }
    </div>
  )
}

export default Main
