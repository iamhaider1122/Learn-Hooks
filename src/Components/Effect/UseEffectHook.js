import {  useState } from "react";
 
 import UseEffectHook1 from './UseEffectHook1'
export default function UseEffectHook() {

  const [flag, setFlag] = useState(true)
  return (
    <>


      <button onClick={() => setFlag(!flag)}>Mount/Unmount</button>
       {flag  && <UseEffectHook1/>}

    </>
  );
}


// useEffect(()=>{},[]) act as a componentDidMount
// useEffect(()=>{},[dependency]) act as a componentDidUpdate

//useEffect(()=>{           act as a componentwillunmount
//   return function(){

//   }
// },[])    

//in jsx boolena value can't be displayed directly so we have  to convert them to string first