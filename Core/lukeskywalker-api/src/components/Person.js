import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './style.css';

const Person = () => {
    const [person, setPerson] = useState("");
    //matches to id in the route
    const { id } = useParams();

    //pulling from api using axios
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${ id }`)
            .then(response =>{
                setPerson(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]);

    const { name, height, mass, hair_color, skin_color } = person;

    return(
        <div className='result'>
            <h1>Name: { name }</h1>
            <h4>Height: { height }</h4>
            <h4>Mass: { mass }</h4>
            <h4>Hair Color: { hair_color }</h4>
            <h4>Skin Color: { skin_color }</h4>
        </div>
    )
}

export default Person;