import React, { useContext } from 'react';
import { Context } from "../assets/context";

export default () => {
    
    // GLOBAL STATE
    const { state } = useContext(Context);

    return (
        <div id={ 'header' }>{ state.header }</div>
    )
}