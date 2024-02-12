import './App.css'
import Navbar from './components/nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <div className='demos-container'>
        <h1>A11y DEMO</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default App
