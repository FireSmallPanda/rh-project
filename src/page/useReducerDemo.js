import React, { useReducer } from 'react'

const initState = {
    name:0,
    age: 0,
    address: 0,
    height: 0
}

function Example4(){
    const [info,dispatch] = useReducer((state,action)=>{
        console.log(state);
        console.log(action);
        switch(action.type){
            case 'name':
                return {...state,name:action.value}
            case 'age':
                return {...state,age:action.value}
            case 'address':
                return {...state,address:action.value}
            case 'height':
                return {...state,height:action.value}
            default:
                return state
        }
    },initState)
    return (
        <div>
            <div>name:{info.name} age:{info.age} address:{info.address} height:{info.height} </div>
            <button onClick={()=>{dispatch({type:'name',value:Math.random()})}} >change name</button>
            <button onClick={()=>{dispatch({type:'age',value:Math.random()})}} >change age</button>
            <button onClick={()=>{dispatch({type:'address',value:Math.random()})}} >change address</button>
            <button onClick={()=>{dispatch({type:'height',value:Math.random()})}} >change height</button>
        </div>
    )
}

export default Example4;