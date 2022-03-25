import React from 'react'
import './spinner.css'
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return <div className='spinner'>
        <CircularProgress color="secondary" />
    </div>
};

export default Spinner;