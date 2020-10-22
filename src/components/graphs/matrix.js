import React, { Fragment } from 'react';
import { withSize } from 'react-sizeme';
import '../../interface/css/plot.scss';

function Foo({ header, data, size, Plot }) { return (
   <Fragment>
      <div id={ 'header' }>{ header }</div>
      <div id={ 'plot' }>
         <Plot
            data={[{
               x: ['buy', 'sell', 'hold'],
               y: ['hold', 'sell', 'buy'],
               z: data,
               opacity: 0.7,
               hoverinfo: 'none',
               colorbar: {
                  tickcolor: 'white',
                  tickfont : {
                     size : 14,
                     color : 'white'
                  }
               },
               type: 'heatmap'
            }, {
               x: ['buy', 'sell', 'hold', 'buy', 'sell', 'hold', 'buy', 'sell', 'hold'],
               y: ['hold', 'hold', 'hold', 'sell', 'sell', 'sell', 'buy', 'buy', 'buy'],
               mode: "text",
               text: data.flat().map(String),
               type: "scattergl",
               hoverinfo: 'none',
               textfont: {
                  color: 'white',
                  size: 20
               }
            }]}
            layout={{
               width: size.width,
               ...plot_layout
            }}
         />
      </div>
   </Fragment>
)}

export default withSize()(Foo)

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