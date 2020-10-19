import React, { useContext, Fragment } from 'react';
import { Context } from "../assets/context";
import List from '../components/list';
import training from '../data/training.json';
import validation from '../data/validation.json';
import fitting from '../data/fitting.json';
import basic_fitting from '../data/basic_fitting.json';
//match.params.name

export default ({ match }) => {

    // GLOBAL STATE
    const { dispatch } = useContext(Context);

    function trigger() {
        console.log('foo')
    }

    return (
        <Fragment>
            <List
                header={ 'calibrating predictions' }
                type={ 'triggers' }
                data={[
                    ['Training', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'training predictions',
                            data: training
                        }
                    }) }],
                    ['Validation', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'validation predictions',
                            data: validation
                        }
                    }) }]
                ]}
            />
            <List
                header={ 'regression fitting history' }
                type={ 'triggers' }
                data={[
                    ['Linear Regression', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'bar',
                            header: 'LINREG Fitting History',
                            data: basic_fitting
                        }
                    }) }],
                    ['LSTM', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'LSTM Fitting History',
                            data: fitting
                        }
                    }) }],
                    ['RCNN', trigger],
                ]}
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