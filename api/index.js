import axios from 'axios';
import CountryPicker from '../components/CountryPicker/CountryPicker';

const url = "https://covid19.mathdro.id/api";   //https://api.covid19india.org/data.json


export const fetchData = async ( country) => {
    let changeableUrl=url;
if(country){
        changeableUrl = '${url}/countries/${country}';
}
    
try {
 const {data :{confirmed, recovered, deaths, lastUpdate}} = await axios.get( changeableUrl);// try is excuted if the data is fetched// instead of writing response.data we can structure the data in braces

//  const modifiedData={
//      confirmed,
//      recovered,
//      death,
//      lastupdate,

//  }  
 

    return {confirmed, recovered,deaths,lastUpdate};// instead of writing above object and returning modifiedd data we can write and retur in single line.
}
catch(error){
// catch will show error if try is not executed...
}
}
export const fetchDailyData = async ()=>{
    try{
const {data} =await axios.get('${url}/daily');

const modifiedData=data.map((dailyData) =>({
    confirmed: dailyData.confirmed.total,
    deaths:dailyData.deaths.total,
    date: dailyData.reportDate,


}));  // in order to get this data we need to call the function fetvhDailyData hence we will call this functio in chart.jsx
  
return modifiedData;

}
    catch( error){

    }
}

export const fetchcountries = async () => {
    try{
        const {data:{countries}} = await axios.get('${url}/countries');
       
        return countries.map((countries) => CountryPicker.name);
    }
    catch(error){
       

    }
    
}