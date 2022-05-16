import React, { useState,createContext,useContext } from 'react'
export const CountContext = createContext()
function Counter(){
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Example4(){
    const [count,setCount] = useState(0)
    return (
        <div>
            <div>useContext点击我{count} 了次</div>
            <button onClick={()=>{setCount( count + 1 )}} >点击我</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example4;