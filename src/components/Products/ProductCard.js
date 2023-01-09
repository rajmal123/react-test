import { Box } from '@mui/system'
import React from 'react'
import './index.css'

function ProductCard({ name, color, material, price, img, setCartValue }) {

    return (
        <Box onClick={() => {
            setCartValue(value => value + 1)
        }} className={`cardbox`}>
            <p className='innertext'>Add to cart</p>
            <div style={{
                margin: '6px',
            }}>
                <img width='332px' height='442px' src={img} alt='product img' />
            </div>
            <div style={{
                fontSize: '20px',
                fontWeight: '500'
            }}>{name}</div>
            <div style={{
                textTransform: 'uppercase',
                fontSize: '12px',
            }}> <span style={{
                color:color || 'black'
            }}> {color} </span> {material} </div>
            <div style={{ marginTop: '2px', fontSize: '12px' }}>INR {price}</div>
        </Box>
    )
}

export default ProductCard