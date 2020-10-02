import React, { useState } from 'react'
import axios from 'axios'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/filme'
// const URLCategory = 'http://localhost:3003/api/categoria'

export default () => {
    
    const [nome, setNome] = useState('');
    const [duracao, setDuracao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    
    const handleAdd = () => {
        axios.post(URL, { nome, duracao, categoriaId })
            .then(resp => console.log('Funcionou!'))
    }

    // const getCategoryIds = async () => {
    //     return await axios.get(URLCategory)
    // }
    
    return (
        <div role='form' className='filmeForm'>
            <Grid cols='12 9 10'>
                <input id='nome' className='form-control'
                    placeholder='Nome do filme'
                    onChange={e => setNome(e.target.value)}
                    value={nome}></input>
                <input id='duracao' className='form-control'
                    placeholder='Duração em minutos'
                    onChange={e => setDuracao(e.target.value)}
                    value={duracao}></input>
                {/* <select onChange={e => setCategoriaId(e.target.value)}>
                    {getCategoryIds.map(category => (
                        <option value={category.id}>{ category.nome }</option>
                    ))}
                </select> */}
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton styled='primary' icon='plus'
                    onClick={handleAdd}></IconButton>
            </Grid>
        </div>
    )
}