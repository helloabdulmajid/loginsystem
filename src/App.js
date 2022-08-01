import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"
          element={<Navbar/>}>
          </Route>
    </Routes>
 
    
    </BrowserRouter>
  
    </>
  );
}

export default App;
