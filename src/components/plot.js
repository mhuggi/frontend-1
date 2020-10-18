import React, { Fragment } from 'react';
import Header from './header';
import '../interface/css/plot.scss';

export default ({ data, header }) => { return (
    <Fragment>
        <Header text={ header } />
        <div id={ 'plot' }></div>
    </Fragment>
)}