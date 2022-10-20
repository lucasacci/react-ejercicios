import React, { useState } from 'react'

export const CambiarConClick = (props) => {

const [msj, setMsj] = useState('')

    const handleClick= () =>{
        setMsj('(from changed state)');
    }

  return (
    <>
    <h1 >Hello {props.frase} {msj} !</h1>
    <button onClick={handleClick}>cambiar</button>
    </>
  )
}
