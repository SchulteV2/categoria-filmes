import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='filmeForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Nome do filme'></input>
            <input id='description' className='form-control'
                placeholder='Duração em minutos'></input>
            <input id='description' className='form-control'
                placeholder='Categoria do filme'></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'></IconButton>
        </Grid>
    </div>
)