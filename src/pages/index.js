import { useEffect, useState } from "react"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Navbar from "../components/Navbar"
import { Grid } from "@mui/material"
import SideFilters from "../components/SideFilters"
import ProductList from "../components/Products"

const MainScreen = () => {
    useEffect(() => {
    }, [])
    const [value, setValue] = useState(0)
    const [filter, setFilter] = useState()
    const [cartValue, setCartValue] = useState(0)
    return (
        <MainContainer >
            <Header title={'MYCOOLSHOP.COM'} />
            <Navbar cartValue={cartValue} setValue={setValue} value={value} />
            <Grid sx={{ marginTop: '10px' }} container>
                <Grid xs={2}>
                    <SideFilters setFilter={setFilter} filter={filter} />
                </Grid>
                <Grid xs={10}>
                    <ProductList setCartValue={setCartValue} featured={value} filterValue={filter} />
                </Grid>
            </Grid>
        </MainContainer >
    )
}

export default MainScreen