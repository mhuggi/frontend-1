import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../assets/context";
import List from '../components/list';

export default () => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // LOCAL STATE
    const [pipelines, set_pipelines] = useState([])

    // ON LOAD
    useEffect(() => {
        set_pipelines([
            'PIPELINE-1602803501',
            'PIPELINE-1602809242',
            'PIPELINE-1602809548',
            'PIPELINE-1602852348',
            'PIPELINE-1602857460',
            'PIPELINE-1602857897',
            'PIPELINE-1602858769',
            'PIPELINE-1602871098'
        ])

        // SET THE PAGE HEADER
        dispatch({
            type: 'header',
            payload: 'BROWSE AVAILABLE PIPELINES'
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <List
            header={ 'browse available pipelines' }
            data={ pipelines }
            type={ 'links' }
            location={ 'pipelines' }
            show_count={ true }
        />
    )
}