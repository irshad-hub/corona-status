import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({ data:{confirmed, recovered, deaths, lastUpdate}}) =>{
 // we have used props in app.js in cards

if(!confirmed){
        
    return("loading...");
}

    return(
        <div className={styles.container}>
<Grid container spacing={3} justify="center">
    <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom >Infected</Typography>
    <Typography varient="h5" >
        <Countup  start={0}  end= {confirmed.value} duration={2.5} separator=","/>
    </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
            <Typography varient="body2">Number of active cases of COVID-19</Typography>
        </CardContent>
    </Grid>
     <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
    <Typography varient="h5" >
    <Countup  start={0}  end={recovered.value} duration={2.5} separator=","/>
        </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
            <Typography varient="body2">Number of recovered cases from COVID-19</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography varient="h5" >
            <Countup  start={0}  end={deaths.value} duration={2.5} separator=","/>
            </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
            <Typography varient="body2">Number of deaths by COVID-19</Typography>
        </CardContent>
    </Grid>  

</Grid>

        </div>
    )
}

export default Cards;
