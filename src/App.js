import React from 'react';
import './App.css';

function App(){
  const lerLogin = () =>{
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (email ==='eduardo.lino@pucpr.br' && senha === '123456'){
      mensagem.textContent = 'Acessado com sucesso';
    }else{
      mensagem.textContent = 'Usuário ou senha incorretos!';
    }
  };

  return(
    <div className="container">
      <h2 className="titulo">Login</h2>
      <input type="email" id="email" placeholder="E-mail" className="input"/>
      <input type='password' id='senha' placeholder='Senha' className='input'/>
      <button onClick={lerLogin} className='botao'>Acessar</button>
      <p id='mensagem' className='mensagem'></p>
    </div>
  )
}

export default App;
