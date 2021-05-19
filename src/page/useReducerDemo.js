import React, { useReducer } from 'react'

function Example4(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state - 1
            default:
                return state
        }
    },0)
    return (
        <div>
            <div>useReducer现在的分数是{count} 了次</div>
            <button onClick={()=>{dispatch('add')}} >加上</button>
            <button onClick={()=>{dispatch('sub')}} >减去</button>
        </div>
    )
}

export default Example4;