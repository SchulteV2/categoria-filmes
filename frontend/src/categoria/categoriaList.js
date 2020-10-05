import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/categoria'

export default () => {

    const [nomes, setNome] = useState([]);

    useEffect(() => {
        const getNome = async () => {
            const { data } = await axios.get(URL)
            setNome(data)
        }
        getNome()

    }, [])

    const handleDelete = (_id) => {
        axios.delete(`${URL}/${_id}`)
            .then(resp => {
                const del = nomes.filter(nome => _id !== nome._id)
                window.location.reload()
            }) 
    }


    return (
        <div className="container">
            <h1>Lista de Categorias de Filmes</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {nomes.map(category => (
                        <>
                            <tr>
                                <td key={category._id} value={category._id}>
                                    {category.nome}
                                   
                                </td>
                                <td key={category._id} value={category._id}>
                                    <IconButton styled='danger' icon='trash'
                                        onClick={() => handleDelete(category._id)}></IconButton>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}