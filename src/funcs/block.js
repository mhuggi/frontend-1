function chart(data, dispatch) {

    // CONTAINER
    const container = []

    // LOOP THROUGH KEYS
    Object.keys(data).forEach(name => {
        console.log(data[name])

        // BAR CHART
        if (data[name].fold_0 !== undefined && 'R2' in data[name].fold_0) {
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