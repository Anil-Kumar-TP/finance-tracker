import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
