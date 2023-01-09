import { Box } from '@mui/material'
import React from 'react'

function Header({ title }) {
    return (
        <Box sx={{
            margin: '25px'
        }}>
            {title}
        </Box>
    )
}

export default Header