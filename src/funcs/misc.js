// WAIT FOR GIVEN MILLISECONDS
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}

// WRAP RESPONSE IN PROMISE
function promisify(data, time) {
   return new Promise(resolve => {
      sleep(time * 1000).then(() => {
         resolve(data)
      })
   })
}

// SELECT GRAPH TYPE
function options(json, dispatch) {

    // CONTAINER
    const container = []

    // LOOP THROUGH JSON KEYS
    Object.keys(json).forEach(key => {

        // DECONSTRUCT PARAMS
        const { data, graph } = json[key]

        // LOOP IN OPTIONS
        switch (graph) {

            // LINECHART
            case 'line':
                container.push([
                    key,
                    () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'line',
                            header: 'training predictions',
                            data: data
                        }
                    }) }
                ])
            break;

            // CONFUSION MATRIX HEATMAP
            case 'matrix':
                container.push([
                    key,
                    () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'matrix',
                            header: 'training predictions',
                            data: data
                        }
                    }) }
                ])
            break;

            // BARCHART
            case 'bar':
                container.push([
                    key,
                    () => { dispatch({
                        type: 'prompt',
                        payload: {
                            type: 'multibar',
                            header: 'LINREG Fitting History',
                            data: data
                        }
                    }) }
                ])
            break;

            // FALLBACK
            default: console.log('no graph match')
        }
    })

    return container
}

export {
   sleep,
   promisify,
   options
}