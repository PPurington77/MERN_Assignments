import React, { useState } from 'react';
import Box from './Box';

const Form = (props) => {
    const [boxes, setBoxes] = useState([]);
    const [newBoxColor, setNewBoxColor] = useState('');

    const handleForm = e => {

        setNewBoxColor(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const newBox = { 
            color: newBoxColor
        };

        setBoxes([...boxes, newBox]);

        setNewBoxColor('');

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Color:</label>
                <input
                    type="text" value={newBoxColor}
                    onChange={handleForm}/>
                <button type="submit" >Add</button>
            </form>

            <Box boxes={ boxes } />
        </>
    );
}

export default Form;