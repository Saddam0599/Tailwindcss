import { useState } from 'react'
import './App.css'
import Header from './companents/Header'
import Hero from './companents/Hero'
import Imggril from './companents/Imggril'
import Main from './companents/Main'
import Footer from './companents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Header />
<Hero />
<Imggril />
<Main />
<Footer />
    </div>
  )
}

export default App
