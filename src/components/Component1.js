
import {Component} from 'react';

export class Component1 extends Component
{
    constructor()
    {
        super();
        this.state ={count:0};
    }

    textCount = (event) =>{
        this.setState({
            count: event.target.value.length
        })
    }

    render()
    {
        return(
            <div>
                <h1>
                    Responsive Paragraph Word Count
                </h1>
                <div>
                    <textarea name="" id=""cols="30" rows="10" placeholder='Enter your text here.....' onChange={this.textCount}></textarea>
                    <p>Word Count: {this.state.count}</p>
                </div>
            
            </div>
        )
    }
}