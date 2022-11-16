import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { autenticar } = useContext(AuthContext);
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('handleSubmit')

    const data = {
      email,
      password
    }

    await autenticar(data);
  }

  return (
      <form onClick={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>
  )
}
