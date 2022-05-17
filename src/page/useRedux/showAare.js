import React,{useContext} from 'react';
import {ColorContext} from './color'
function ShowArea(){
    const {  state } =  useContext(ColorContext);
    
    return (
        <div style={{color:state.color,backgroundColor:state.background}}>有趣的老凌</div>
    )
}

export default ShowArea