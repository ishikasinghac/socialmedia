import logo from './logo.svg';
import './App.css';
import Authentication from './pages/authentication/Authentication';
import { Route,Routes } from 'react-router-dom';
import Message from './pages/message/Message';
import HomePage from './pages/home/HomePage';


function App() {
  return (
    <div className="">

      <Routes> 
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/*' element={<Authentication/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
