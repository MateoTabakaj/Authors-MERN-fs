import axios from 'axios';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
// import Detail from './components/Detail';
import Update from './components/Update';
import AuthorForm from './components/Authorform';
import('./App.css')

const App = () => {
  const [authorList, setAuthorList] = useState([]);
  const [nameErr, setNameErr] = useState("");


  const createAuthor = authorParam => {
    axios.post('http://localhost:8000/api/author', authorParam)
        .then(response => {
            // console.log(res);
            if(typeof response.data.error.errors.name.message === "string"){
              setNameErr(response.data.error.errors.name.message)
              console.log(response.data.error.errors.name.message)
            }else{
            setAuthorList([...authorList, response.data])
            // console.log(response.data)
          }
        })
        .catch((err) => console.log(err))
}
  return (
    <div className='App'>
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<AuthorForm onSubmitProp={createAuthor} nameErr={nameErr} initialName=""/>} path="/authors/new" />
          <Route element={<Update/>} path="authors/:id/edit"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;