import React,{Component} from 'react';

export class AdderSub extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicks: 0,
            show:true
        };  
    }

    incrementItem(){
        this.setState({clicks:this.state.clicks+1});
    }
    decrementItem(){
        this.setState({clicks:this.state.clicks-1});
    }

    render(){
        return(
            <div>
            <button onClick={()=>this.incrementItem()}>Click to increment 1</button>    
            <button onClick={()=>this.decrementItem()}>Click to decrement 1</button>    
            {this.state.show?<h2>{this.state.clicks}</h2>:''}
            </div>
        )
    };
   
        
    }           