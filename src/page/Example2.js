import React, { useState } from 'react'
function Example(){
    // 声明一个值 [ 数值, 设置函数 ] 0为初始值 (声明不能存在于条件判断中)
    const  [ count, setCount ] = useState(0);
    return (
        <div>
            <div>useState点击我{count} 了次</div>
            <button onClick={()=>{setCount( count + 1 )}} >点击我</button>
        </div>
    )
}

export default Example;