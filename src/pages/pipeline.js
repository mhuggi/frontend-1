import React, { useContext, Fragment } from 'react';
import { Context } from "../assets/context";
import List from '../components/list';
import training from '../data/training.json';
import validation from '../data/validation.json';
import fitting from '../data/fitting.json';
import basic_fitting from '../data/basic_fitting.json';
import classification from '../data/classification.json';
import confusion_matrix from '../data/confusion_matrix.json';
import matrix_bar from '../data/matrix_bar.json';
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
                    ['MULTIBAR CLASS', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'multibar',
                            header: 'classifier result',
                            data: matrix_bar
                        }
                    }) }],
                    ['MATRIX TEST', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'matrix',
                            header: 'classifier result',
                            data: confusion_matrix
                        }
                    }) }],
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