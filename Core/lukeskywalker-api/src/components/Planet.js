import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './style.css';

const Planet = () => {
    const [planet, setPlanet] = useState("");
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

    const { name, climate, population, terrain, surface_water} = planet;

    return(
        <div className='result'>
            <h1>Name: { name }</h1>
            <h4>Climate: { climate }</h4>
            <h4>Population: { population }</h4>
            <h4>Terrain: { terrain }</h4>
            <h4>Surface Water: { surface_water }</h4>
        </div>
    )
}

export default Planet;