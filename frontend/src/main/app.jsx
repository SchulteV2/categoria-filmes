import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Categoria from '../categoria/categoria'
import Filme from '../filme/filme'

export default props => (
    <div className='container'>
        <Categoria />
        <Filme />
    </div>
)