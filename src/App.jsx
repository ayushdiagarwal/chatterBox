import './App.css'
import { Auth } from './pages/Auth'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Chat from './pages/Chat'
import { auth } from '../config/firebase-config';

function PrivateRoute({ children }) {
  const currentUser = auth.currentUser;
  
  return currentUser ? children : <Navigate to="/" />;
}

function App() {

  return (
    <Router>
        <div className='app'>
          <Routes>
            <Route path="/" element={<Auth/ >} />
            <Route path="/chat" element={<PrivateRoute>
                <Chat />
              </PrivateRoute>} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
