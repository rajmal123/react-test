import { Box } from '@mui/system'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './index.css'

function Navbar({ setValue, value, cartValue }) {

    const handleChange = (value) => {
        setValue(value)
    }
    return (
        <Box className='navbar'>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                cursor: 'pointer'
            }}>
                <div className={value === 0 ? 'bold' : ''} onClick={() => handleChange(0)}>All Products</div>
                <div className={value === 1 ? 'bold' : ''} onClick={() => handleChange(1)}>Featured</div>
            </Box>
            <div>
                <ShoppingCartIcon sx={{ cursor: 'pointer' }} />{cartValue}
            </div>
        </Box>
    )
}

export default Navbar