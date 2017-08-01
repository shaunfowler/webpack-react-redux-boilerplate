import {Route, Link} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';

const App = () => (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
        <hr/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </div>
);

export default App;
