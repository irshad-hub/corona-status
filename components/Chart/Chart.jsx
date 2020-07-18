import React, {useState, useEffect} from 'react';// here we are using state and effect hooks
import { fetchDailyData} from '../../api';
import { line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
import { green } from '@material-ui/core/colors';



const Chart = ({data : {confirmed,recovered, deaths}, country}) =>{
    const [dailyData, setDailyData] =useState({});//this isthe same as the state={dailyData:{}} and empty string but we immedietly get the setter method for it 
   

    useEffect(()=>{
        const fetchAPI= async ()=>{
setDailyData (await fetchDailyData() ); //daily data is populated. here dailydata is fetched ffom api and set to set daily data
        }


        fetchAPI();// calling  function
    },[]);//useEfffect functiion acceepts callbacks and its hard to use async hence we will use another async function inside this
   
   
   const lineChart= (
dailyData.length ? (<line 
data={{
    labels: dailyData.map(({date})=>date),
    datasets:[{
          data:dailyData.map(({data}) => data.confirmed),
          label: 'Infected',
          borderColor:'#3333ff',
          fill: true,
    }, {
        data:dailyData.map(({data}) => data.deaths),
        label: 'Deaths',
        borderColor:'red',
        backgroundColor: 'rgba(255,0,0,0.5)',
        fill: true,
    },],
}}
   
/>):null

   );
   const barChart =(
       confirmed ? (
           <Bar
           data={{
               labels: ['Infected', 'Recovred', 'Deaths'],
               datasets: [{
                   label:'people',
                   backgroundColor: [
                       'rgba(0,0,255,0.5)',
                       'rgba(0,3255,0,0.5)',
                       'rgba(255,0,0,0.5)',
                   ],
                   data: [confirmed.value, recovered.value, deaths.value],
               },],
           }}
           options= {{
               legend:{display: false},
               title :{display: true,  Text: 'Current state in  ${country}'},
           }}
           />
       ):null
   );
   
    return (
       <div className={styles.container}>
           {country ? barChart : lineChart}
       </div>
    );
};


export default Chart;
