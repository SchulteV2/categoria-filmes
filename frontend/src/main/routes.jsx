import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Categoria from '../categoria/categoria'
import Filme from '../filme/filme'
import Usuario from '../usuario/usuario'

export default props => (
    <Router history={hashHistory}>
        <Route path='/categorias' component={Categoria} />
        <Route path='/filmes' component={Filme} />
        <Route path='/usuario' component={Usuario} />
        <Redirect from='*' to='/filmes' />
    </Router>
)