import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Categoria from '../categoria/categoria'
import Filme from '../filme/filme'

export default props => (
    <Router history={hashHistory}>
        <Route path='/categorias' component={Categoria} />
        <Route path='/filmes' component={Filme} />
        <Redirect from='*' to='/filmes' />
    </Router>
)