// DEFUALT VALUES
const values = {

   // DATA
   data: {},
}

// REDUCER
function reducer(state, { type, payload }) {
   switch (type) {

      case 'init': { return {
         ...state,
         data: payload
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