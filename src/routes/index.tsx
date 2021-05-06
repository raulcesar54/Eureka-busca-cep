import React from 'react'
import Home from '../pages/home'
import { Switch, Route, } from 'react-router-dom'
const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Home} />
    </Switch>
)

export default Routes