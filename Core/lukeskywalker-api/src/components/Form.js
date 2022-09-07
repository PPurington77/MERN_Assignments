import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const [option, setOption] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const onSubmitHandleSearch = (e) => {
        e.preventDefault();
        navigate(`/${ option }/${ id }`);

        setId("");
    }

    const onChangeHandleOption = (e) => {
        setOption(e.target.value);
    }

    const onChangeHandleId = (e) => {
        setId(e.target.value);
    }

    return (
        <div className='formBody'>
            <form onSubmit={ onSubmitHandleSearch }>
                <label className='label'>Search For:</label>
                <select value={ option } onChange={ onChangeHandleOption }>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                <label className='label'>ID:</label>
                <input type="number" min='1' value={ id }  onChange={ onChangeHandleId }/>

                <input type="submit" value="Search"/>

            </form>
        </div>
    )
}

export default Form;