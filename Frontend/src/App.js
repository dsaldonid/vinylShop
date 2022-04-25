import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UserProfile from './components/UserProfile/UserProfile';
import Catalog from './components/Catalog/Catalog';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
