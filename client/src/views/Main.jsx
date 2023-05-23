import React, { useState ,useEffect} from 'react';
import axios from 'axios'
import AuthorList from '../components/Authorlist';
import { Link } from 'react-router-dom';


const Main = (props) => {

    const [authorList, setAuthorList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthorList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const removeFromDom = authorId => {
        axios.delete("http://localhost:8000/api/author/" + authorId)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorList(authorList.filter(author => author._id !== authorId));
            })
            .catch((err) => console.log(err))

    }

    return (
        <div>
            <Link to={"authors/new"}>Add an author</Link>
            <AuthorList authorList={authorList} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;
