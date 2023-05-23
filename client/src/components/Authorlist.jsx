import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './Delete';
const AuthorList = (props) => {

    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId))
    }
    return (
        <div className='List'>
            <h1>Author List</h1>
            
            <table 
        className='table-striped table-hover'>
            <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr></thead>
            {author.map((author, idx) => {
                return (
                    
                        <tbody>
                        <tr key={author}>
                            <td value={idx}> {author.name}</td>
                            <td>
                                <Link to={"authors/"+ author._id+"/edit" }>
                                    <button>Edit</button>
                                </Link>
                                <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                            </td>
                        </tr></tbody>
                        )
            })}

                    
                
            
                    </table>
        </div>// <div key={author}>
                    //         <p value={idx}>
                    //             Author:  {author.name}
                    //         </p>
                    //     <Link to={"/edit/" + author._id}>
                    //         <button> Edit</button>
                    //     </Link>
                    //     <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                    // </div>
    )
}
export default AuthorList;