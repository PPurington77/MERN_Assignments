import { useEffect, useState } from 'react';
import { getAllJokes } from '../services/internalApiService'

export const AllJokes = (props) => {
    const [jokes, setJokes] = useState([]);
    //array is second arg so it only runs on mount, not on other state changes
    useEffect(() => {
        getAllJokes()
            .then((data) => {
                setJokes(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="w-50 mx-auto text-center">
            <h2>All Jokes</h2>
            {jokes.map((joke) => {
                const { _id, setup, punchline } = joke;

                return <div key={ _id } className="shadow mb-4 rounded border p-4">
                    <h4>{ setup }</h4>
                    <h4>{ punchline }</h4>
                </div>
            })}
        </div>
    )
}

export default AllJokes;