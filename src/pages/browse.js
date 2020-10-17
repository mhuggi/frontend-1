import React, { useState, useEffect } from 'react';
import List from '../components/list';

export default () => {

    // LOCAL STATE
    const [local, set_local] = useState([])

    // ON LOAD
    useEffect(() => {
        set_local([
            'PIPELINE-1602803501',
            'PIPELINE-1602809242',
            'PIPELINE-1602809548',
            'PIPELINE-1602852348',
            'PIPELINE-1602857460',
            'PIPELINE-1602857897',
            'PIPELINE-1602858769',
            'PIPELINE-1602871098'
        ])
    }, [])

    return (
        <List
            header={ 'browse available pipelines' }
            data={ local }
        />
    )
}