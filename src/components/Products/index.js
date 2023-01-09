import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getFeaturedProducts, getFilters, getProducts } from '../../api/helpers'
import ProductCard from './ProductCard'

function ProductList({ filterValue, featured, setCartValue }) {
    const [filters, setFilters] = useState()
    const [products, setProducts] = useState([])
    const [featuredList, setFeatured] = useState([])
    useEffect(() => {
        getFeaturedProducts().then(featuredList => {
            setFeatured(featuredList.data.featured)
        }).catch(err=>console.log('error in getting featured products',err))
        getProducts().then(productResponse => {
            setProducts(productResponse.data.products)
        }).catch(err=>console.log('error in getting products',err))
        getFilters().then(filters => {
            setFilters(filters)
        }).catch(err=>console.log('error in getting filters ',err))
    }, [])

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto'
        }}>
            {products?.filter((product, index) => {
                if (featured) {
                    return featuredList.find(featuredProduct => {
                        return featuredProduct.productId === product.id
                    })
                }
                return true
            }).filter(product => {
                if (filterValue && filterValue.key === 'allmats') {
                    return filters.materials.find((filter) => product.materialId === filter.id)
                }
                if (filterValue && filterValue.key === 'allcolors') {
                    return filters.colors.find((filter) => product.colorId === filter.id)
                }
                if (filterValue && filterValue.type === 'colors') {
                    return product.colorId === filterValue.id
                }
                if (filterValue && filterValue.type === 'materials') {
                    return product.materialId === filterValue.id
                }
                return true
            }).map((product) => {
                return <ProductCard setCartValue={setCartValue} material={filters?.materials.find(material => material.id === product.materialId)?.name} color={filters?.colors.find(color => color.id === product.colorId)?.name} img={product.image} name={product.name} price={product.price} />
            })}
        </Box>
    )
}

export default ProductList