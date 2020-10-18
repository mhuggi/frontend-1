import React, { Fragment } from 'react';
import { withSize } from 'react-sizeme';
import Plot from 'react-plotly.js';
import '../../interface/css/plot.scss';

function Foo({ header, data, size }) {
   
   // STATIC GRID LAYOUT
   const grid_layout = {
      linecolor: 'rgba(124, 213, 255, 0.425)',
      tickcolor: 'rgba(124, 213, 255, 0.425)',
      linewidth: 1,
      mirror: true,
      gridcolor: '#ffffff15',
      tickfont : {
         size : 14,
         color : 'white'
      }
   }

   // STATIC PLOT LAYOUT
   const plot_layout = {
      height: 450,
      margin: {
         l: 50,
         r: 1,
         b: 30,
         t: 2,
         pad: 0
      },
      showlegend: false,
      xaxis: grid_layout,
      yaxis: {
         ...grid_layout,
         fixedrange: true
      },
      plot_bgcolor: 'rgba(124, 213, 255, 0.11)',
      paper_bgcolor: 'transparent'
   }

   return (
      <Fragment>
         <div id={ 'header' }>{ header }</div>
         <div id={ 'plot' }>
            <Plot
               data={[
                  {
                     x: Object.keys(data),
                     y: Object.values(data),
                     type: 'scatter',
                     mode: 'lines',
                     line: {
                        width: 1,
                        color: 'white'
                     }
                  }
               ]}
               layout={{
                  width: size.width,
                  ...plot_layout
               }}
               config={{
                  scrollZoom: true,
               }}
            />
         </div>
      </Fragment>
   )
}

export default withSize()(Foo)