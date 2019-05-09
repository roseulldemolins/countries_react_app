import React from 'react';
import CountriesTile from './CountriesTile'
import './CountriesContainer.css'

const CountriesContainer = (props) => {
  const countriesList = props.selectedCountriesData.map((country,index)=>{
    return(
      <CountriesTile key={index} country={country}/>
    )
  });
    return(
      <div className = 'CountriesContainer'>
        {countriesList}
      </div>
  )
}

export default CountriesContainer;
