import React from 'react';
import './Country.css';

const Country = (props) => {

    // console.log(props);
    const {area,region,population,name,flags} = props.country;
    return (
        <div className='country'>
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" srcset="" />
             <p>Area : {area}</p>
             <p><small>Region : {region}</small></p>
             <p><small>Population : {population}</small></p>

        </div>
    );
};

export default Country;