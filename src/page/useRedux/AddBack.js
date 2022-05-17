import React, { useContext } from 'react';
import { ColorContext, UPDATE_BACK } from './color';
function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div >
            <button onClick={()=>{dispatch({type:UPDATE_BACK,value:'yellow'})}} >
                AddBack
            </button>
        </div>
        )
}

export default Buttons