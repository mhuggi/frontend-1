import React, { useContext, useEffect, useState, Fragment } from 'react';
import { Context } from "../assets/context";
import List from '../components/list';
import axios from 'axios';
import { chart } from '../funcs/block';
import models_profit from '../data/models_profit.json';
import matrix_bar from '../data/matrix_bar.json';
import linreg from '../data/linreg.json';

export default ({ match }) => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    // LOCAL STATES
    const [reg_predictions, set_reg_predictions] = useState({})
    const [cls_train_predictions, set_cls_train_predictions] = useState([])
    const [cls_test_predictions, set_cls_test_predictions] = useState([])

    const [reg_fittings, set_reg_fittings] = useState([])
    //const [cls_fittings, set_cls_fittings] = useState([])

    // ON LOAD, FETCH ALL PIPELINES
    useEffect(() => {
        axios.get('http://localhost:8000/pipelines/' + match.params.name).then(result => {
            if (result.status === 200) {
                console.log(result.data)

                // SET TRAINING & VALIDATION PREDICTIONS
                set_reg_predictions(result.data.predictions.regression)
                
                let temp = chart(result.data.predictions.classifier.training, dispatch)
                set_cls_train_predictions(temp)

                temp = chart(result.data.predictions.classifier.validation, dispatch)
                set_cls_test_predictions(temp)

                temp = chart(result.data.fittings.regression, dispatch)
                set_reg_fittings(temp)
            }
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function trigger() {
        console.log('foo')
    }

    return (
        <Fragment>
            <List
                header={ 'regression predictions' }
                type={ 'triggers' }
                data={[
                    ['Training', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'training predictions',
                            data: reg_predictions.training
                        }
                    }) }],
                    ['Validation', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'validation predictions',
                            data: reg_predictions.validation
                        }
                    }) }],
                    ['Profit Test', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'validation predictions',
                            data: {
                                //close: Object.values(models_profit.close),
                                gauss_nb: Object.values(models_profit.gauss_nb_profit),
                                random_forest: Object.values(models_profit.random_forest_profit),
                                logreg: Object.values(models_profit.logreg_profit),
                                svc: Object.values(models_profit.svc_profit),
                            }
                        }
                    }) }],
                    ['Multibar Test', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'multibar',
                            header: 'validation predictions',
                            data: linreg
                        }
                    }) }]
                ]}
            />
            <List
                header={ 'classifier training predictions' }
                type={ 'triggers' }
                data={ cls_train_predictions }
            />
            <List
                header={ 'classifier validation predictions' }
                type={ 'triggers' }
                data={ cls_test_predictions }
            />
            <List
                header={ 'regression fitting history' }
                type={ 'triggers' }
                data={ reg_fittings }
            />
            <List
                header={ 'classifier fitting history' }
                type={ 'triggers' }
                data={[
                    ['Logistic Regression', trigger],
                    ['Random Forest', trigger],
                    ['Decision Tree', trigger],
                    ['LSTM', trigger],
                ]}
            />
        </Fragment>
    )
}