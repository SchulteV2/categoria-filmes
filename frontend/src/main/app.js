import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)