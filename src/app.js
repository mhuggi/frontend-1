import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./assets/context";
import './interface/css/general.scss';

import Init from './assets/init';
import Menu from './components/menu';
import Header from './components/header';
import Pages from './assets/pages';

export default () => { return (
   <BrowserRouter>
      <Provider>
         <Init />
         <div id={ 'wrapper' }>
            <Menu />
            <Header />
            <Pages />
         </div>
      </Provider>
   </BrowserRouter>
)}