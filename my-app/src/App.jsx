import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProfile name="Tomasz" description="Full-stack developer and open source enthusiast." />
    <UserProfile name="kolega" description="moj kolegha" />
    </>
  )
}

export default App
