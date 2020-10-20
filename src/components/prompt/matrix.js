import React, { Fragment } from 'react';
import { withSize } from 'react-sizeme';
import Plot from 'react-plotly.js';
import '../../interface/css/plot.scss';

function Foo({ header, data, size }) {
   
   // GRID STATE
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

   // LAYOUT STATE
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
      xaxis: {
         ...grid_layout,
         fixedrange: true
      },
      yaxis: {
         ...grid_layout,
         fixedrange: true
      },
      plot_bgcolor: 'rgba(124, 213, 255, 0.11)',
      paper_bgcolor: 'transparent'
   }

   // HEADMAP LABELS
   const heatmap_labels = {
      x: ['buy', 'sell', 'hold', 'buy', 'sell', 'hold', 'buy', 'sell', 'hold'],
      y: ['buy', 'buy', 'buy', 'sell', 'sell', 'sell', 'hold', 'hold', 'hold'],
      mode: "text",
      text: data.matrix.flat().map(String),
      type: "scattergl",
      hoverinfo: 'none',
      textfont: {
         color: 'white',
         size: 20
      }
   }

   return (
      <Fragment>
         <div id={ 'header' }>{ header }</div>
         <div id={ 'plot' }>
            <Plot
               data={[{
                  x: data.labels,
                  y: data.predictions,
                  z: data.matrix,
                  hoverinfo: 'none',
                  opacity: 0.7,
                  colorbar: {
                     tickcolor: 'white',
                     tickfont : {
                        size : 14,
                        color : 'white'
                     }
                  },
                  type: 'heatmap'
               }, heatmap_labels]}
               layout={{
                  width: size.width,
                  ...plot_layout
               }}
            />
         </div>
      </Fragment>
   )
}

export default withSize()(Foo)