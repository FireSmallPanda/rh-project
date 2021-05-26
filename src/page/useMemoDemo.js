import React, { useState,useMemo } from 'react'
function Example(){
    // 声明一个值 [ 数值, 设置函数 ] 0为初始值 (声明不能存在于条件判断中)
    const  [ count, setCount ] = useState(0);
    // 声明一个值 [ 数值, 设置函数 ] 0为初始值 (声明不能存在于条件判断中)
    const  [ count2, setCount2 ] = useState(0);
    return (
        <div>
            <div>useMemo</div>
            <button onClick={()=>{setCount( new Date().getTime()  + '小红向我们走来' )}} >点击小红</button>
            <button onClick={()=>{setCount2( new Date().getTime() + '小绿向我们走来' )}} >点击小绿</button>
            <ChildrenCompent name={count} >{count2}</ChildrenCompent>
        </div>
    )
}
function ChildrenCompent({name,children}){
    function changeXiaohong(){
        console.log('她来了，她来了。小红向我们走来了')
        return name+',小红向我们走来了'
    }
    // 去除name的事实监听
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name])

    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
    )
}

export default Example;