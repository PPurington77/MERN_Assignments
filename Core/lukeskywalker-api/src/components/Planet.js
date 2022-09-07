import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './style.css';

const Planet = (props) => {
    const [planet, setPlanet] = useState(null);
    //matches to id in the route
    const { id } = useParams();

    //pulling from api using axios
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${ id }`)
            .then(response =>{
                setPlanet(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]);

    return(
        <div className='result'>
            <h1>Name: { planet.name }</h1>
            <h4>Climate: { planet.climate }</h4>
            <h4>Population: { planet.population }</h4>
            <h4>Terrain: { planet.terrain }</h4>
            <h4>Surface Water: { planet.surface_water }</h4>
        </div>
    )
}

export default Planet;