import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/filme'
const URLCategory = 'http://localhost:3003/api/categoria'

export default () => {
    
    const [nome, setNome] = useState('');
    const [duracao, setDuracao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [categoryIds, setCategoryIds] = useState([]);
    
    const handleAdd = () => {
        axios.post(URL, { nome, duracao, categoriaId })
            .then(resp => console.log('Funcionou!'))
    }

    useEffect(() => {
        const getCategoryIds = async () => {
            const {data} = await axios.get(URLCategory)
            setCategoryIds(data)
        }
        getCategoryIds()
    }, [])

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
                <select onChange={e => setCategoriaId(e.target.value)}>
                    {categoryIds.map(category => (
                        <option key={category._id} value={category._id}>{category.nome}</option>
                    ))}
                </select>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton styled='primary' icon='plus'
                    onClick={handleAdd}></IconButton>
            </Grid>
        </div>
    )
}