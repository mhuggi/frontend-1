import React, { useEffect, useContext } from 'react';
import { Context } from "../assets/context";
// import foobar from '../data/regression.json';

export default ({ match }) => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // ON LOAD, SET THE PAGE HEADER
    useEffect(() => {
        dispatch({
            type: 'header',
            payload: match.params.name
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id={ 'horizontal' }>
            <div>
                <div id={ 'vertical' }>
                    <div>
                        <svg />
                    </div>
                    <div>
                        <svg />
                    </div>
                </div>
            </div>
            <div>
                <div id={ 'vertical' }>
                    <div>
                        <svg />
                    </div>
                    <div>
                        <svg />
                    </div>
                </div>
            </div>
        </div>
    )
}