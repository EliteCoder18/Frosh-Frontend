import Dither from './components/Dither.jsx'
import {Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index.jsx';
import Navbar from './components/navbar.jsx';
function App() {
  return (
   <Router>
      <Routes>

        <Route path='/'>
          <Route path='home' Component={Home} />
          <Route path='navbar' Component={Navbar}/>
        </Route>

        
     

      </Routes>
    </Router>
  )
}

export default App

