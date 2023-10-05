import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import CursoPage from './pages/curso';
import PerfilPage from './pages/perfil';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/curso' element={<CursoPage />} />
        <Route path='/perfil' element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App