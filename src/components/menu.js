import React from 'react';
import '../interface/css/menu.scss';
import MenuItem from './menu/item';

export default () => { return (
    <div id={ 'menu' }>
        <MenuItem header={ 'BROWSE' } link={ '/pipelines' } />
        <MenuItem header={ 'CREATE' } link={ '/create' } />
    </div>
)}