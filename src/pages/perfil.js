import React from 'react';
import '../assets/css/perfil.css'
import '../assets/css/dados.css'
import dadospessoais from '../assets/img/dadospessoais.png'
import StudentInfo from '../components/container/StudentInfo';
import ProjectInfo from '../components/container/ProjectInfo';
import projetos from '../assets/img/projetos.png'
import Header from '../components/container/header/index'


const studentData = {
    name_user: 'Josina Gomes Viana',
    email: 'josina@passosmagicos.org',
    age: '17 anos',
    classRoom: '3 ano do ensino médio',
    period: 'matutino',
    address: 'Rua Trás os Montes',
};

const descriptionData = {
	text_description: 'Projeto de empresa fictícia Desenvolvimento Web <br> Projeto Prefeitura de Embu-Guaçu <br> Infraestrutura <br> Projeto Empresa Local - <br> Desenvolvimento Web <br> Sistema Integrado de controle de estoque'
};


const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '60px', // Margem de 30px à esquerda
  },
  formContainer: {
    width: '50%', // Metade da largura da tela
    backgroundColor: '#799B9F', // Cor de fundo azul
    color: 'black', // Cor do texto
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left', // Alinhado à esquerda
  },
  title: {
    borderBottom: '1px solid #799B9F', // Adicione uma linha sob o título
    paddingBottom: '10px', // Espaço após o título
  },
};

const PerfilPage = () => (
    <>
        <Header/>
        <div className='div-perfil'>
            <div className='div-dados'>
						<div style={styles.appContainer}>
							<div className="student-info-form" style={styles.formContainer}>
								<h1 style={styles.title}>Meus Dados</h1>
								<StudentInfo {...studentData} />
							</div>
						</div>
						<div style={styles.appContainer}>
							<div className="student-info-form" style={styles.formContainer}>
								<h1 style={styles.title}>Projetos</h1>
								<ProjectInfo {...descriptionData} />
							</div>
						</div>

                {/* <img src={dadospessoais} alt='Dados pessoais' className='img-dados'/> */}
                {/* <img src={projetos} alt='Mural de projetos' className='img-projetos'/> */}
            </div>
            <div className='div-projetos'></div>
        </div>
    </>
);

export default PerfilPage;