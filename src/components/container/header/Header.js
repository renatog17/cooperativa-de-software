import React from 'react'
import './Header.css'
import icone from '../../../assets/img/icon/icone.png'
import nome from '../../../assets/img/nome.png'
import perfil from '../../../assets/img/perfil.png'
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    
    const goToCursoPage = () => {
        navigate('/');
    }
    const goToPerfilPage = () => {
        navigate('/perfil');
    }
  
    return (
        <header className="app-header">
            <div className="app-header__logo">
                <img src={icone} alt='icone' onClick={goToCursoPage} className='app-header__logoimg'/>
                <img src={nome} alt='tech for change' className='app-header__nome'/>
            </div> 
            <div className="app-header__logo">
                <img src={perfil} alt='perfil' onClick={goToPerfilPage} className='app-header__perfil'/>
            </div>               
        </header>
    );
}

export default Header;
