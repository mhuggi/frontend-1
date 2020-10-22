import React, { useContext, useEffect, useState, Fragment } from 'react';
import { Context } from "../assets/context";
import List from '../components/list';
import axios from 'axios';
import { options } from '../funcs/misc';

export default ({ match }) => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // LOCAL STATE
    const [local, set_local] = useState({
        regression_fitting: [],
        predictions: {
            regression: [],
            classifiers: []
        }
    })

    // ON LOAD, FETCH ALL PIPELINES
    useEffect(() => {
        axios.get('http://localhost:8000/pipelines/' + match.params.name).then(result => {
            if (result.status === 200) {
                console.log(result.data)
                set_local(result.data)
            }
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <List
                header={ 'regression model fittings' }
                type={ 'triggers' }
                data={ options(local.regression_fitting, dispatch) }
            />
            <List
                header={ 'regression ensemble predictions' }
                type={ 'triggers' }
                data={ options(local.predictions.regression, dispatch) }
            />
            { Object.keys(local.predictions.classifiers).map(model =>
                <List
                    key={ model }
                    header={ model + ' confusion matrix' }
                    type={ 'triggers' }
                    data={ options(local.predictions.classifiers[model], dispatch) }
                />
            )}
        </Fragment>
    )
}