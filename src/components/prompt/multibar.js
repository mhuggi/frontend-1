import React, { Fragment, useEffect, useState } from 'react';
import { withSize } from 'react-sizeme';
import Plot from 'react-plotly.js';
import '../../interface/css/plot.scss';

function Foo({ header, data, size }) {

   // LOCAL STATE
   const [bars, set_bars] = useState([])

   useEffect(() => {
      const colours = ['#FF99CC', '#CC99FF', '#99CCFF', '#99FF99', '#FFFF99']
      const container = []
      Object.keys(data).forEach((key, index) => {
         container.push({
            name: key,
            x: Object.keys(data[key]),
            y: Object.values(data[key]),
            type: 'bar',
            text: Object.values(data[key]).map(value => {
               return String(value).substring(0, 5)
            }),
            textfont: {
               size: 14,
               color: 'white'
            },
            textposition: 'outside',
            marker: {
               color: colours[index],
               opacity: 0.7
            }
         })
      })
      set_bars(container)
   }, [data])
   
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
      showlegend: true,
      legend: {
         font: {
            size: 14,
            color: 'white'
         },
         borderwidth: 2,
         x: 1.01,
         y: 0.5
      },
      xaxis: grid_layout,
      yaxis: {
         ...grid_layout,
         fixedrange: true,
         range: [0.97, 1   ],
      },
      plot_bgcolor: 'rgba(124, 213, 255, 0.11)',
      paper_bgcolor: 'transparent'
   }

   return (
      <Fragment>
         <div id={ 'header' }>{ header }</div>
         <div id={ 'plot' }>
            <Plot
               data={ bars }
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