import { useContext, useEffect } from 'react';
import { Context } from "./context";

export default () => {
   
   // GLOBAL STATE
   const { state } = useContext(Context);

   // LOAD ONCE
   useEffect(() => {

      // HIDE METAMASK GARBAGE
      window.ethereum.autoRefreshOnNetworkChange = false;

      if (state) {
         console.log('success')
      }

   // eslint-disable-next-line
   }, [])

   return null;
}