import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> CategoriaFilmes
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/categoria'>Categorias</a></li>
                    <li><a href='#/filmes'>Filmes</a></li>
                    <li><a href='#/usuario'>Usuário</a></li>
                </ul>
            </div>
        </div>
    </nav>
)