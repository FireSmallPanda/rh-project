import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0}
    }

    render() {
        return (
            <div>
                <div>点击我{this.state.count} 了次</div>
                <button onClick={()=>{this.addCount() }} >点击我</button>
            </div>
        );
    }
    // 计数器
    addCount(){
        this.setState({count: this.state.count + 1 })
    }
}

export default Example;