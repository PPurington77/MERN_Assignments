import React from 'react';
import { useParams } from 'react-router-dom';

const WordColor = () => {
    const { word } = useParams();
    const { background } = useParams();
    const { color } = useParams();

    return (
        <div style={{ backgroundColor: background, color: color}}>
            <h1>{ word }</h1>
        </div>
    )
}

export default WordColor;