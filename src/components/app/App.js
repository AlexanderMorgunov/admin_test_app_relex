import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import TestsPage from '../pages/TestsPage/TestsPage';
import UsersPage from '../pages/UsersPage/UsersPage';

function App() {

const [isLogged, setLogged] = useState(localStorage.isLogIn);

const log = () => {
  setLogged(isLogged => true);
  localStorage.isLogIn = true;
}

const exitLog = () => {
  setLogged(isLogged => false);
  localStorage.isLogIn = false;
}

  
  return(
    <Router>
    <div className='App'>
    <main>
      <Routes>
              <Route path="/" element={<UsersPage log={log} exitLog = {exitLog} isLogged={isLogged}/>}/> 
              <Route path="/tests" element={<TestsPage log={log} exitLog = {exitLog} isLogged={isLogged}/>}/> 
      </Routes>
    </main>
    </div>
    </Router>
  )
}

export default App;
