import React from "react"
import './Emblemas.css'
import elite from '../../../assets/img/button/elite.png'
import lenda from '../../../assets/img/button/lenda.png'
import surreal from '../../../assets/img/button/surreal.png'
import play from '../../../assets/img/button/play.png'
import platina from '../../../assets/img/button/platina.png'
import ouro from '../../../assets/img/button/ouro.png'
import prata from '../../../assets/img/button/prata.png'
import bronze from '../../../assets/img/button/bronze.png'
import diamante from '../../../assets/img/button/diamante.png'
import { useNavigate } from "react-router-dom"



const Emblemas = () => {
    const navigate = useNavigate();
    const goToCursoPage = () => {
    navigate('/curso');
  }
return(
<div className='body'>
        <div className='first-div'>
                    <div >
                        <img src={play} alt='botão play' onClick={goToCursoPage} className='first-div__img'/>
                        <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                    </div>
                    
                <div>
                <img src={bronze} alt='emblema bronze' onClick={goToCursoPage} className='first-div__img' />
                <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div>
                <img src={prata} alt='emblema prata' onClick={goToCursoPage} className='first-div__img'/>
                <div class="arrow-down">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
            </div>

            <div className='first-div'>
                <div>
                <img src={diamante} alt='emblema diamante' onClick={goToCursoPage} className='first-div__img'/>
                <div class="arrow-down">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="arrow-down">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
               
                <div>
                <img src={platina} alt='emblema platina' onClick={goToCursoPage} className='first-div__img' />
                <div class="arrow-left">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                </div>
                
                <div>
                <img src={ouro} alt='emblema ouro' onClick={goToCursoPage} className='first-div__img'/>       
                <div class="arrow-left">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>         
                </div>
               
            </div>

            <div className='first-div'>
                <div>
                <img src={elite} alt='emblema lenda' onClick={goToCursoPage} className='first-div__img'/>
                <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                </div>                
                <div>
                <div>
                <img src={lenda} alt='emblema lenda' onClick={goToCursoPage} className='first-div__img'/>
                <div class="arrow-down">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div>
                <img src={surreal} alt='emblema surreal' onClick={goToCursoPage} className='first-div__img'/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Emblemas;