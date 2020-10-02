import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import CategoriaForm from './categoriaForm'
import CategoriaList from './categoriaList'

export default class Categoria extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Categoria' small='Cadastro'></PageHeader>
                <CategoriaForm />
                <CategoriaList />
            </div>
        )
    }
}