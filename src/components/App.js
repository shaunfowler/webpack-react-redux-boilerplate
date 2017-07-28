import React from 'react'
import Home from './Home';
import About from './About';
import {Route, Link} from 'react-router-dom'

const App = () => (
    <div>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <hr/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </div>
)

export default App
