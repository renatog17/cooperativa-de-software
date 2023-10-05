import React from 'react';
import '../assets/css/perfil.css'
import '../assets/css/dados.css'
import dadospessoais from '../assets/img/dadospessoais.png'
import projetos from '../assets/img/projetos.png'
import Header from '../components/container/header/index'

const PerfilPage = () => (
    <>
        <Header/>
        <div className='div-perfil'>
            <div className='div-dados'>
                <img src={dadospessoais} alt='Dados pessoais' className='img-dados'/>
                <img src={projetos} alt='Mural de projetos' className='img-projetos'/>
            </div>
            <div className='div-projetos'></div>
        </div>
    </>
);

export default PerfilPage;