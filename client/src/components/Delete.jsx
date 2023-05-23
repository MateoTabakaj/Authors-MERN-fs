import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;