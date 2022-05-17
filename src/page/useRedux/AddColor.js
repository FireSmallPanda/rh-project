import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './color';
function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div >
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,value:'red'})}} >
                AddColor
            </button>
        </div>
        )
}

export default Buttons