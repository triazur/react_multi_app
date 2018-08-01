import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom' 

export default class App3 extends Component{
    render(){
        return(
            <Router>
                <div>
                    <hr />
                    <div>Hello APP 3 React</div>
                    <hr />
                    <ul>
                        <li><Link to='/app3/page1'>Page 1</Link></li>
                        <li><Link to='/app3/page2'>Page 2</Link></li>
                        <li><Link to='/app3/page3'>Page 3</Link></li>
                    </ul>

                    <Route exact path="/app3/page1" component={Page1} />
                    <Route path="/app3/page2" component={Page2} />
                    <Route path="/app3/page3" component={Page3} />
                    <hr />
                    <a href='/app1'>Aller à l'App 1</a>
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