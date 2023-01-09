import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './index.css'
import { getFilters } from '../../api/helpers'

const FilterNames = [
    {
        title: 'Tags',
        keyword: 'tags'
    },
    {
        title: 'Materials',
        keyword: 'materials',
    },
    {
        title: 'Colors',
        keyword: 'colors',
    }
]

function SideFilters({ setFilter, filter }) {

    const [filters, setFilters] = useState([])

    useEffect(() => {
        getFilters().then((responseFilters) => {
            let tagFilters = [
                { id: 0, name: 'all tags', key: 'alltags' },
                { id: 1, name: 'generic' },
                { id: 2, name: 'generic1' },
                { id: 3, name: 'generic2' }
            ]
            setFilters({ ...responseFilters, tags: tagFilters })
        }).catch((err)=>{
            console.log('error in getting filters')
        })
    }, [])

    const handleFilterClick = (item) => {
        setFilter(item)
    }
    return (
        <Box marginLeft='20px'>
            {FilterNames.map(({ title, keyword }) => {
                return (
                    <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                        {title}
                        {filters[keyword]?.map(item => <div className={item?.name === filter?.name ? 'selected-filter' : ''} onClick={() => handleFilterClick({ ...item, type: keyword })} style={{ marginTop: '6px', cursor: 'pointer' }}>{item.name}</div>)}
                    </div>
                )
            })}
        </Box>
    )
}

export default SideFilters