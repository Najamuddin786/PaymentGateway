import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentPage from './Pages/PaymentPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <PaymentPage/>
      </>
  )
}

export default App
