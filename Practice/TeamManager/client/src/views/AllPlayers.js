import { useEffect, useState } from 'react';
import { deletePlayerById, getAllPlayers } from '../services/internalApiService';
import { Link } from 'react-router-dom';

export const AllPlayers = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getAllPlayers()
            .then((data) => {
                setPlayers(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleDeletePlayerClick = (idToDelete) => {
        deletePlayerById(idToDelete)
            .then((deletedPlayer) => {
                const filteredPlayers = players.filter((player) => {
                    return player._id !== idToDelete;
                });

                setPlayers(filteredPlayers);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    //player name, proferred position, actions
    return (
        <div className='w-80 mx-auto text-left'>
            <table className='table'>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
            </table>
        </div>
    )
}