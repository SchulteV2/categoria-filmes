import React, { useState } from 'react'
import axios from 'axios'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/categoria'

export default () => {

    const [nome, setNome] = useState('');

    const handleAdd = () => {
        axios.post(URL, { nome })
            .then(resp => window.location.reload())
    }
    return (
        <div role='form' className='categoriaForm'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input id='nome' className='form-control'
                    placeholder='Adicione uma categoria'
                    onChange={e => setNome(e.target.value)}
                    value={nome}></input>
            </div>
            <div className='col-xs-12 col-sm-3 col-md-2'>
                <IconButton styled='primary' icon='plus'
                    onClick={handleAdd}></IconButton>
            </div>
        </div>
    )
}