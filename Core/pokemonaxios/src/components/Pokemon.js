import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?limit=865";

    const onClickFetchHandler = () => {
        axios.get(pokeUrl)
            .then(response => {
                // console.log(response)
                setPokemon(response.data.results)
                //needed .data.results to render, otherwise kept throwing map error due to array being empty
            })
            .catch(err => {
                console.log(err);
            })
            // console.log(pokemon, "88888888888888");
    };

    return (
        <div style={{width: '10%', margin: '20px auto'}}>
            <button onClick={ onClickFetchHandler }>Fetch Pokemon</button>
            {
                pokemon.map((pokes, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>{ pokes.name }</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pokemon; 