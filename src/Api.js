import React, { useState, useEffect } from 'react';
import './Api.css'

const Api = props => {
    const [countries, setCountries] = useState(0);
    const [country, setcountry] = useState('');

    const handleCountry = () => {
        // setcountry(countries[Math.floor(Math.random() * countries.length)])
        setcountry(countries[Math.floor(Math.random() * countries.length)].name)
    }

    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch('https://restcountries.eu/rest/v2/all?fields=name');
            const jsonResponse = await response.json();
            setCountries(jsonResponse)
        }
        getCountries();
    }, []);

    return (
        <div>
            <h2>{props.firstname} {props.lastname}</h2>
            <div className='random'>
                <h3 >Next Trip : <b className='coutry'>{country}</b></h3>
                <button onClick={handleCountry}>Random</button>
            </div>
        </div>
    );
}

export default Api;