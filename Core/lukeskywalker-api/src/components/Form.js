import React, { useState } from 'react';
import { useParams } from 'react-router';
import './style.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

const Form = (props) => {
    const [option, setOption] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate;

    const onSubmitHandleSearch = (e) => {
        e.preventDefault();
        navigate(`/${ option }/${ id }`);

        setOption("");
        setId("");
    }

    const onChangeHandleOption = (e) => {
        setOption(e.target.value);
    }

    const onChangeHandleId = (e) => {
        setId(e.target.value);
    }

    return (
        <div>
            <form onSubmit={ onSubmitHandleSearch }>
                <lable>Search For:</lable>
                <select value={ option } onChange={ onChangeHandleOption }>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                <lable>ID:</lable>
                <input type="number" value={ id }/>

                <input type="submit" value="Search" onChange={ onChangeHandleId }/>

            </form>
        </div>
    )
}

export default Form;