import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Template } from './components/MainComponents';

import Routes from './Routes';

const Page = (props) => {

  return (
    <BrowserRouter>          
      <Template>
        <Routes />
      </Template>              
    </BrowserRouter>    
  );
}

export default Page;
