function chart(data, dispatch) {

    // CONTAINER
    const container = []

    // LOOP THROUGH KEYS
    Object.keys(data).forEach(name => {

        // BAR CHART
        if ('R2' in data[name]) {
            console.log('multibar')
            container.push([
                name,
                () => { dispatch({
                    type: 'prompt',
                    payload: {
                        type: 'multibar',
                        header: 'LINREG Fitting History',
                        data: data[name]
                    }
                }) }
            ])

        // CONFUSION MATRIX
        } else if ('matrix' in data[name]) {
            container.push([
                name,
                () => { dispatch({
                    type: 'prompt',
                    payload: {
                        type: 'matrix',
                        header: 'training predictions',
                        data: data[name]
                    }
                }) }
            ])

        // LINE CHART
        } else {
            container.push([
                name,
                () => { dispatch({
                    type: 'prompt',
                    payload: {
                        type: 'line',
                        header: 'training predictions',
                        data: data[name]
                    }
                }) }
            ])
        }
    })

    return container
}

export {
    chart
}