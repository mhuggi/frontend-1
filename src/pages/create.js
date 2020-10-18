import React, { useEffect, useContext } from 'react';
import { Context } from "../assets/context";

export default () => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // ON LOAD, SET THE PAGE HEADER
    useEffect(() => {
        dispatch({
            type: 'header',
            payload: 'create new pipeline'
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div></div>
    )
}