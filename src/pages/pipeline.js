import React, { useContext, Fragment } from 'react';
import { Context } from "../assets/context";
import List from '../components/list';
import foobar from '../data/regression.json';
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
                            data: foobar.label
                        }
                    }) }],
                    ['Validation', () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'bar',
                            header: 'validation predictions',
                            data: []
                        }
                    }) }]
                ]}
            />
            <List
                header={ 'regression fitting history' }
                type={ 'triggers' }
                data={[
                    ['Linear Regression', trigger],
                    ['LSTM', trigger],
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