// DEFUALT VALUES
const values = {

   // DATA
   data: {},

   // PROMPT PARAMS
   prompt: {
      visible: true,
      type: 'loading',
      payload: null
   }
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      // LOADING STATUS
      case 'init': { return {
         ...state,
         data: payload
      }}

      // SHOW SPECIFIC PROMPT
      case 'prompt': { return {
         ...state,
         prompt: {
            visible: true,
            ...payload
         }
      }}

      // HIDE PROMPT
      case 'hide-prompt': { return {
            ...state,
            prompt: {
               ...state.prompt,
               visible: false,
               payload: null
            }
      }}
      
      // FALLBACK
      default: {
         console.log('CONTEXT REDUCER TYPE NOT FOUND');
         return state;
      }
   }
}

export {
   values,
   reducer
}