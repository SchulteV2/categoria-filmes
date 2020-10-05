import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/filme'

export default () => {

    const [nomes, setNome] = useState([]);
    const [duracao, setDuracao] = useState([]);
    const [categoriaId, setCategoriaId] = useState([]);

    const handleDelete = (_id) => {
        axios.delete(`${URL}/${_id}`)
            .then(resp => {
                const del = nomes.filter(nome => _id !== nome._id)
                window.location.reload()
            })
    }

    useEffect(() => {
        const getNome = async () => {
            const { data } = await axios.get(URL)
            setNome(data)
            setDuracao(data)
            setCategoriaId(data)
        }
        getNome()
    }, [])

    return(
        <div className="container">
            <h1>Lista de Filmes</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Filme</th>
                        <th>Duração</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {nomes.map(nome => (
                        <>
                            <tr>
                                <td key={nome._id} value={nome._id}>{nome.nome}</td>
                                <td key={nome._id} value={nome._id}>{nome.duracao}</td>
                                <td key={nome._id} value={nome._id}>{nome.categoriaId}</td>
                                <td key={nome._id} value={nome._id}>
                                    <IconButton styled='danger' icon='trash'
                                        onClick={() => handleDelete(nome._id)}></IconButton>
                                </td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}