import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = () => {
    
    // recordar última página visitada
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Tino');
    navigate(lastPath, { replace: true }); // evita que tenga efecto del botón "atrás" del navegador
  }


  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>
      <button onClick={handleLogin} className='btn btn-primary'>Login</button>
    </div>
  )
}
