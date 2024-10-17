import './App.css'
import { Auth } from './pages/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './pages/Chat'
function App() {

  return (
    <Router>
        <div className='app'>
          <Routes>
            <Route path="/" element={<Auth/ >} />
            <Route path="/chat" element={<Chat/ >} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
