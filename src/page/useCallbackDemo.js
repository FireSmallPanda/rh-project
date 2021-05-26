import React, { useState ,useEffect,useCallback} from 'react'

function useWinSize(){
    const [size, setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    
    })
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            return window.removeEventListener('resize',onResize)
        }
    })
    return size
}


function Example(){
    const size = useWinSize();
    return (
        <div>
            <div>useCallback</div>
            <div>当前的屏幕宽度是？{size.width}x{size.height}</div>
        </div>
    )
}

export default Example;