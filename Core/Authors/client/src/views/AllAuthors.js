import { useEffect, useState } from 'react';
import { deleteAuthorById, getAllAuthors  } from '../services/internalApiService';
import { Link, useNavigate } from 'react-router-dom';

export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllAuthors()
        .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDeleteAuthorById = (idToDelete) => {
        deleteAuthorById(idToDelete)
            .then((deletedAuthor) => {
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToDelete;
                });
                setAuthors(filteredAuthors);
                navigate("/");
            })
    }

    return (
        <div className='w-70 mx-auto text-left'>
        <Link to="/authors/new" className='btn btn-sm btn-outline-primary mx-1'>Add New Author</Link>
            <h2 className='text-info'>We have quotes by:</h2>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                        {authors.map((author) => {
                            const { _id, name} = author;
                            return (
                                <tr>
                                    <td key={ _id }>{ name }</td>
                                    <td>
                                        <Link to={ `/authors/${ _id }/edit`} className='btn btn-md btn-outline-primary mx-1'>Edit</Link>
                                        <button onClick={(e) => {handleDeleteAuthorById(_id) } }className='btn btn-md btn-outline-danger mx-1'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;