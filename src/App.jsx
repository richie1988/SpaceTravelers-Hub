import { useState } from 'react'
import './scss/main.scss'
import './App'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header/>
        <button className='button' onClick={()=> setCount((count)=> count + 1)}> count:{count}</button>
        </div>      
  )
}

export default App
