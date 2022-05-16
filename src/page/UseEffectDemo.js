import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'


function Example(){
    // 声明一个值 [ 数值, 设置函数 ] 0为初始值 (声明不能存在于条件判断中)
    const  [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log('使用useEffect')
        return () => {
            console.log('你更改了参数')
        }
    }, [count])

    // useEffect(() => {
    //     console.log('使用useEffect') 
    //     // 所有更新都执行
    // })

    // useEffect(()=>{
    //     console.log('使用useEffect')
    // },[]) // 仅在挂载和卸载的时候执行

    // useEffect(()=>{
    //     console.log(count)
    // },[count]) //count更新时执行
    return (
        <div>
            <div>useEffect点击我{count} 了次</div>
            <button onClick={()=>{setCount( count + 1 )}} >点击我</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" exact component={List} />
            </Router>
        </div>
    )
}
// 首页
function Index(){
    useEffect(() => {
        console.log('useEffect=》老弟来了【首页】')
        return () => {
            console.log('useEffect=》老弟你离开了【首页】')
        }
    }, [])
    return (
        <div>
           首页
        </div>
    )
}
// 列表页面
function List(){
    useEffect(() => {
        console.log('useEffect=》老弟来了【列表页面】')
        return () => {
            console.log('useEffect=》老弟你离开了【列表页面】')
        }
    }, [])
    return (
        <div>
           列表页面
        </div>
    )
}
export default Example;