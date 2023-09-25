import { useState } from 'react'
import { Header } from './components/header/index.jsx'
import { ItemListContainer } from './components/itemListContainer/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ItemListContainer/>
    </>
  )
}

export default App
