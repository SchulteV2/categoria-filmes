import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import CategoriaForm from '../categoria/categoriaForm'
import CategoriaList from '../categoria/categoriaList'

export default class Categoria extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }
    
    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Categoria' small='Cadastro'></PageHeader>
                <CategoriaForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <CategoriaList />
            </div>
        )
    }
}