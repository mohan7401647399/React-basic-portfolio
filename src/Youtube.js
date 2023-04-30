import React from 'react';
import  ReactDOM  from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';


class youtube extends React.Component{
    constructor(){
    super()
    }
    render()
    {
        return(
            <body>
                <div class="Heading">
                    <div class="jumbotron text-center" id="Heading">
                        <h1 class="myname">Rockabye</h1>
                        <p class="myoccupation">Software Developer</p>
                    </div>
                </div>
            </body>
        )
    }
}
export default youtube;