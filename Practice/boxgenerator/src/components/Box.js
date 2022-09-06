import React from 'react';

const Box = (props) => {
    const { boxes } = props;

    return(
        <div style={{display: 'flex', flexWrap: 'wrap', width: '60%', margin: '10px auto'}}>
            {
                boxes.map((box, i) => {
                    return (
                        <div key={i} style={{ backgroundColor: box.color, width: '200px', height: '200px', margin: '10px'}}></div>
                    )
                })
            }
        </div>
    )

}

export default Box;