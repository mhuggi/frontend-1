import React, { useContext, useEffect } from 'react';
import { Context } from "../assets/context";
import { sleep } from "../funcs/misc";
import '../interface/css/prompt.scss';

import Multibar from './graphs/multibar';
import Line from './graphs/line';
import Matrix from './graphs/matrix';

import EventListener from 'react-event-listener';
import Plot from 'react-plotly.js';

// PROMPT CONTAINER
function Prompt() {
   
   // GLOBAL STATE
   const { state, dispatch } = useContext(Context);

   // TOGGLE VISIBILITY BASED ON STATE
   useEffect(() => {
      if (state.prompt.visible) {
         document.getElementById('prompt').style.display = 'flex';
         sleep(100).then(() => {
            document.getElementById('wrapper').style.filter = 'blur(6px)';
            document.getElementById('prompt').style.opacity = 1;
         })
      } else {
         document.getElementById('prompt').style.opacity = 0;
         document.getElementById('wrapper').style.filter = 'none';
         sleep(100).then(() => {
            document.getElementById('prompt').style.display = 'none';
         })
      }
   }, [state.prompt.visible]);

   // CLOSE PROMPT ON ESC KEY
   function key_event(event) {
      if (state.prompt.visible && event.code === 'Escape') {
         dispatch({ type: 'hide-prompt' })
      }
   }

   return (
      <div id={ 'prompt' }>
         <div id={ 'inner' }>
            <Content
               type={ state.prompt.type }
               header={ state.prompt.header }
               data={ state.prompt.data }
            />
            <EventListener
               target={ document }
               onKeyDown={ key_event }
            />
            <span
               id="close"
               onClick={() => { dispatch({ type: 'hide-prompt' }) }}
            />
         </div>
      </div>
   )
}

// PROMPT CONTENT
function Content({ type, header, data }) {
   switch(type) {

      // LOADING
      case 'loading': {
         return <div className="lds-dual-ring" />
      }

      // MULTI BAR CHART
      case 'matrix': {
         return <Matrix
            header={ header }
            data={ data }
            Plot={ Plot }
         />
      }

      // MULTI BAR CHART
      case 'multibar': {
         return <Multibar
            header={ header }
            data={ data }
            Plot={ Plot }
         />
      }

      // LINE CHART
      case 'line': {
         return <Line
            header={ header }
            data={ data }
            Plot={ Plot }
         />
      }

      // FALLBACK
      default: {
         return <div>Prompt type error</div>
      }
   }
}

export default Prompt;