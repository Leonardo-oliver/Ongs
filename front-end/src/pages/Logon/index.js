import React,{ useState } from 'react'
import HeroesImg from '../../assets/heroes.png'
import { Link , useHistory } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
export default function Logon(){
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id })
            console.log(response.data.name)
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')

        }catch(err){
            alert('Falha no login , tente novamente')
        }
    }

    return(
       <div className="logon-container">
           <section className="form">
                <img src={LogoImg} alt="logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type='submit'>Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn 
                            size={16} 
                            color="#E02041" 
                        
                        /> 
                        Não tem cadastro
                    </Link>
                </form>
           </section>
           <img  src={HeroesImg} alt="Heroes" />
       </div>
    )
}
