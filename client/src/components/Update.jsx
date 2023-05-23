import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from './Delete';
import AuthorForm from './Authorform';
const Update = (props) => {
    
    
    const {id} = useParams(); 
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.patch('/api/author/'+id+'/edit' , author)
            .then(res => console.log(res));
            // navigate('/')

    }
    return (
        <div>
            <h6>Edit this author:</h6>
            {loaded && 
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}                        
                    />
                    <DeleteButton authorId={author._id} successCallback={() => navigate('/')} />
                </>
            }
        </div>
    )
}
export default Update;

