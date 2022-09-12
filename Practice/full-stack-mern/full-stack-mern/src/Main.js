import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
    const [message, setMessage ] = useState("loading...")
    useEffect(() => {
        axios.get("https://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            <h2>Message from the backend: { message }</h2>
        </div>
    )
};