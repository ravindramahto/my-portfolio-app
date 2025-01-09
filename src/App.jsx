import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="pt-16"> {/* Add padding-top to account for fixed header */}
    <Header />
    // {/* Your other content */}
  // </div>
  )
}

export default App
