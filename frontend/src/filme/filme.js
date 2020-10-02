import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import FilmeForm from './filmeForm'
import FilmeList from './filmeList'

export default class Filme extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Filmes' small='Cadastro'></PageHeader>
                <FilmeForm />
                <FilmeList />
            </div>
        )
    }
}
