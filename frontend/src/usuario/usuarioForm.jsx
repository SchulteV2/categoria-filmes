import React from 'react'

export default props => (
    <div role='form' className='categoriaForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input type='email' id='description' className='form-control'
                placeholder='exemple@exemple.com'></input>
            <input type='password' id='description' className='form-control'
                placeholder='Sua senha'></input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
)