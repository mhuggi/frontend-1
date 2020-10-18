import React from 'react';
import Plot from 'react-plotly.js';

export default ({ data }) => {
    return (
        <Plot
            data={[{
                x: Object.keys(data),
                y: Object.values(data),
                type: 'scatter',
                mode: 'lines',
                line: {
                    width: 1
                }
            }]}
            layout={{
            }}
        />
    )
}