import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Account from './Pages/Account';

function App() {
  return (
    <>
      <AuthContextProvider>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
        
      </AuthContextProvider>
    </>
  );
}

export default App;
