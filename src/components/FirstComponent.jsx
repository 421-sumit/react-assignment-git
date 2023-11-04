
import React, {useEffect, useState} from "react";

const FirstComponent = ()=> {

    const [update, setUpdate] = useState(0);

    useEffect(() => {
        //mounting phase
     console.log('first component mounted')
      return () => {
        //unmounting phase
        console.log('first component unmounted')
      }
    }, [update]) // update phase

    useEffect(() => {
     console.log('second useEffect called');
    }, [])

    
    return(
        <div>FirstComponent
            <h4>update:{update}</h4>
            <button onClick={()=>setUpdate(update + 1)}>Update</button>
        </div>
    );
}

export default FirstComponent;