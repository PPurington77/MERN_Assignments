import { useEffect, useState } from 'react';
import { getAllAuthors  } from '../services/internalApiService';
import { Link } from 'react-router-dom';

export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAllAuthors()
        .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className='w-70 mx-auto text-left'>
            <h2 className='text-info'>We have quotes by:</h2>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {authors.map((author) => {
                            const { _id, name} = author;
                            return (
                                <>
                                <td key={ _id }>{ name }</td>
                                <td>Edit Delete</td>
                                </>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;