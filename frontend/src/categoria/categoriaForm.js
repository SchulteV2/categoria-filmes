import React, { useState } from 'react'
import axios from 'axios'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/categoria'

export default () => {

    const [nome, setNome] = useState('');

    const handleAdd = () => {
        axios.post(URL, { nome })
            .then(resp => console.log('Funcionou!'))
    }
    return (
        <div role='form' className='categoriaForm'>
            <Grid cols='12 9 10'>
                <input id='nome' className='form-control'
                    placeholder='Adicione uma categoria'
                    onChange={e => setNome(e.target.value)}
                    value={nome}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton styled='primary' icon='plus'
                    onClick={handleAdd}></IconButton>
            </Grid>
        </div>
    )
}