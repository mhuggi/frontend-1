import React, { Fragment } from 'react';

export default ({ header, data }) => { return (
   <Fragment>
      <div id={ 'header' }>{ header }</div>
      <div id={ 'content' }>BAR CHART</div>
   </Fragment>
)}