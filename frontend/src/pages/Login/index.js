import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({history}){

    const [email, setEmail] = useState('');
    // passando desse jeito, toda vez que houver alteração do campo email, ele salva
    // passando sempre o ultimo resultado

    async function handleSubmit(event){
        event.preventDefault();

    const response = await api.post('/sessions', {email});

    const { _id } = response.data;

    localStorage.setItem('user',  _id);

    history.push('/dashboard');
    } 

    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

            <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email *</label>
            <input 
                type="email" 
                id="id" 
                placeholder="Seu email por-favor"
                onChange={event => setEmail( event.target.value)}
                value={email}
            />
            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}