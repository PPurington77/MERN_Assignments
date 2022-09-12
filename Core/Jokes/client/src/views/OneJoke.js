import { useParams } from 'react-router-dom';

export const OneJoke = (props) => {
    const { id } = useParams();
    return <h2>One Joke: id ${ id } </h2>
}

export default OneJoke;