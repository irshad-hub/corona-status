import React, { useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchcountries  } from '../../api';



const CountryPicker = ({handleCountryChange}) =>{// destructuriing handdlecountrychange
    const [fetchedCountries, setfetchedCountries] = useState([]);


useEffect(() => {
    const fetchAPI= async () => {
        setfetchedCountries( await fetchcountries());
    };
    fetchAPI();
}, [setfetchedCountries]);// 2nd parameter




    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=" ">Global</option>
    { fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};



export default CountryPicker;
