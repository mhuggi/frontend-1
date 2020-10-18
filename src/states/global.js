// DEFUALT VALUES
const values = {

   // DATA
   data: {},

   // PAGE HEADER
   header: 'default',
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      // LOADING STATUS
      case 'init': { return {
         ...state,
         data: payload
      }}

      // SET HEADER
      case 'header': { return {
         ...state,
         header: payload
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