import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom' 
import add from '../../../models/testmodels'
import axios from 'axios'

export default class App1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            addition: 0,
            peoples
        }
    }
    componentDidMount(){
        this.setState({
            addition: add(32,4)
        })
        axios.get('/app1/peoples').then((d)=>{
            console.log(d.data);
            // this.setState({peoples: data})
        })
    }

    render(){
        return(
            <Router>
                <div>
                    <hr />
                    <div>Hello APP 1 React</div>
                    <hr />
                    <h3>addition: {this.state.addition}</h3>
                    <hr />
                    <ul>
                        <li><Link to='/app1/page1'>Page 1</Link></li>
                        <li><Link to='/app1/page2'>Page 2</Link></li>
                        <li><Link to='/app1/page3'>Page 3</Link></li>
                    </ul>

                    <Route exact path="/app1/page1" component={Page1} />
                    <Route path="/app1/page2" component={Page2} />
                    <Route path="/app1/page3" component={Page3} />
                </div>
            </Router>
        )
    }
};

const Page1 = () =>(
    <div>
        <h2>Page 1</h2>
    </div>
);

const Page2 = () =>(
    <div>
        <h2>Page 2</h2>
    </div>
);

const Page3 = () =>(
    <div>
        <h2>Page 3</h2>
    </div>
);