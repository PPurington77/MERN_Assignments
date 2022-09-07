import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css'

const Search = () => {
    const [searchState, setSearchState] = useState({
        option: "people",
        id: ""
    })
    const navigate = useNavigate;

    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search Submitted");

        //navigate here to whatever the user selected
        navigate("/" + searchState.option + "/" + searchState.id);
    }

    const onOptionChangeHandler = (e) => {
        setSearchState({
            ...searchState,
            [e.target.name]: e.target.value
        });
    }

    const onIdChangeHandler = (e) => {
        setSearchState({
            ...searchState, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={ onSearchSubmit }>
            <label>Search For:</label>
            <select name="option" value={ searchState.option } onChange={ onOptionChangeHandler }>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>

            <label>Id:</label>
            <input name="id" value={ searchState.id } onChange={ onIdChangeHandler }></input>

            <button>Search</button>
        </form>
    )
}

export default Search;