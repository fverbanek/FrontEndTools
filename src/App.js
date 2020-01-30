import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import {Container} from './styles/stylesGlobal'
import Header from './components/Header'
import Router from './routes'




function App() {
  return (
    <>
    <BrowserRouter>

      <Header />
      <ToastContainer  autoClose={3000}/>
      <Container>  
              
        < Router />
      </Container>

    </BrowserRouter>

    </>
  );
}

export default App;
