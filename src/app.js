import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./assets/context";
import './interface/css/general.scss';

import Init from './assets/init';
import Pages from './assets/pages';
import Menu from './components/menu';

export default () => { return (
   <BrowserRouter>
      <Provider>
         <Init />
         <div id={ 'wrapper' }>
            <Menu />
            <Pages />
         </div>
      </Provider>
   </BrowserRouter>
)}