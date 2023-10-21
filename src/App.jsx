import { useState } from 'react'
import { Header } from './components/header/index.jsx'
import { ItemListContainer } from './components/itemListContainer/index.jsx'
import { Input } from './components/input/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Input/>
      <ItemListContainer/>
    </>
  )
}

export {App}
