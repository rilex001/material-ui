import React from 'react'
import CoffeCard from './CoffeCard'
import {Grid} from '@material-ui/core'

function Content() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4} >
                <CoffeCard />
            </Grid>
        </Grid>
    )
}

export default Content
