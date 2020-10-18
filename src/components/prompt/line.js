import React, { Fragment } from 'react';

export default ({ header, data }) => { return (
   <Fragment>
      <div id={ 'header' }>{ header }</div>
      <div id={ 'content' }>LINE CHART</div>
   </Fragment>
)}