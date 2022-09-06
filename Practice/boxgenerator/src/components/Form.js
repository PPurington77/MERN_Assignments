import React, { useState } from 'react';
import Box from './Box';

const Form = (props) => {
    const [boxes, setBoxes] = useState([]);
    const [newBoxColor, setNewBoxColor] = useState('');

    //function to handle the state of the form input and update it
    const handleForm = e => {

        setNewBoxColor(e.target.value);
    }

    //function to handle the form submission via submit button
    const handleSubmit = e => {
        e.preventDefault();

        const newBox = { 
            color: newBoxColor
        };

        //call setAll_colors to update all_colors variable to add our new color. setAll_colors needs to be passed a BRAND NEW array of colors
        setBoxes([...boxes, newBox]);


        // Ninja Bonus: clear out the color input on successful submission.
        //to clear the input box after submission, we need to set the input box to an empty string
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