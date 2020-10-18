import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data }) => { return (
    <div id={ 'list' }>
        { data.map((value, index) =>
            <Link to={ 'pipelines/' + value } key={ index }>
                <div id={ 'row' }>{ value }</div>
            </Link>
        )}
    </div>
)}