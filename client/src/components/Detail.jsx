import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from './Delete';


const Detail = (props) => {
    const navigate = useNavigate();

    const [author, setAuthor] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                console.log(res.data);
                setAuthor(res.data);
                // navigate("/"); // this will take us back to the Main.js

            })
            .catch( err => console.log(err) );
    }, []);

    return (
        <div>
            <p>Author: {author.name}</p>
            <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
        </div>
    );
}
export default Detail;

