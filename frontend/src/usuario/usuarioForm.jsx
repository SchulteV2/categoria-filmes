import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='categoriaForm'>
        <Grid cols='12 9 10'>
            <input type='email' id='description' className='form-control'
                placeholder='exemple@exemple.com'></input>
            <input type='password' id='description' className='form-control'
                placeholder='Sua senha'></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'></IconButton>
        </Grid>
    </div>
)