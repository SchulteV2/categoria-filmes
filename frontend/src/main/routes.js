import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'


import Categoria from '../categoria/categoria'
import Filme from '../filme/filme'

export default props => (
    <HashRouter>
        <Route path='/categoria' component={Categoria} />
        <Route path='/filme' component={Filme} />
        <Redirect from='*' to='/categoria' />
    </HashRouter>
)