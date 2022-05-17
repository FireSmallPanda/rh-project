import React, { createContext,useReducer } from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'
export const UPDATE_BACK = 'UPDATE_BACK'
const initState = {
    color:'black',
    background:'#fff'
}
const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return  {...state,color:action.value};
        case UPDATE_BACK:
            return  {...state,background:action.value}
        default:
            return state
    }
}

export const Color = props =>{
    const [state,dispatch] = useReducer(reducer, initState)
    return (
        <ColorContext.Provider value={{state,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
