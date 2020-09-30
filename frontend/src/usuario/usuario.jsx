import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import UsuarioForm from '../usuario/usuarioForm'

export default class Usuario extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Usuário' small='Cadastro'></PageHeader>
                <UsuarioForm />
            </div>
        )
    }
}
