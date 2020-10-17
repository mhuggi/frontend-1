import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default ({ data, header, }) => { return (
    <Fragment>
        <div id={ 'header' }>{ header } ({ data.length })</div>
        <div id={ 'container' }>
            { data.map((value, index) =>
                <Link to={ 'pipelines/' + value } key={ index }>
                    <div id={ 'row' }>{ value }</div>
                </Link>
            )}
        </div>
    </Fragment>
)}