import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date().toLocaleString()
        }

    }

    componentDidMount() {

        this.timer=setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
            console.log(new Date().toLocaleString());
        },1000)
        
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() { 
        return (  
            <div>
                {this.state.time}
            </div>
        );
    }
}
 
export default Time ;