import React, { useRef,useState,useEffect } from 'react'
// useRef
function ExampleUseRef(){
    // 设定一个Ref
    const inputEl = useRef(null)
    const [text, setText] = useState('defValue')
    // 设置input上的值
    const onButtonClick = ()=>{
        inputEl.current.value = "hello，JSLing"
    }
    useEffect(()=>{
        // 试试监听值
        inputEl.current.value = text
    })

    return (
        <div>
            <div>useRef</div>
            <input ref={inputEl} type="text" />
            <button onClick={()=>{ onButtonClick() }}>在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>setText(e.target.value)}  ></input>
        </div>
    )
}

export default ExampleUseRef