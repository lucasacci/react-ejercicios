import { useState } from 'react'
import { CambiarConClick } from './components/CambiarConClick'
import { CambiarEstado } from './components/CambiarEstado'
import { HelloWorld } from './components/HelloWorld'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <HelloWorld/>
      <CambiarEstado frase='my friend'/>
      <CambiarConClick frase='my friend'/>
   </>
  )
}

export default App
