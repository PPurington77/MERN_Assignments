import React, { useState } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?limit=865";

    const fetchHandler = () => {
        fetch(pokeUrl)
            .then(response => {
                return response.json();
            })
            .then(response => {
                return setPokemon(response.results);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div style={{width: '10%', margin: '0 auto'}}>
            <button onClick={ fetchHandler }>Fetch Pokemon</button>
            {
                pokemon.map((poke, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>{ poke.name }</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pokemon;