import React,{useContext} from 'react';
import {ColorContext} from './color'
function ShowArea(){
    const {color} =  useContext(ColorContext);
    return (<div style={{color:color}}>字体的颜色{color}</div>)
}

export default ShowArea