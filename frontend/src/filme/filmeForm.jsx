import React from 'react'

export default props => (
    <div role='form' className='filmeForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control'
                placeholder='Nome do filme'></input>
            <input id='description' className='form-control'
                placeholder='Duração em minutos'></input>
            <input id='description' className='form-control'
                placeholder='Categoria do filme'></input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
)