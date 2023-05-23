const AuthorControllers =require('../controllers/author.controller')

module.exports=app=>{
    app.get('/api/author' , AuthorControllers.getAllAuthors);
    app.get('/api/author/:id', AuthorControllers.findOneAuthor);
    app.post('/api/author', AuthorControllers.createAuthor);
    app.patch('/api/author/:id/edit', AuthorControllers.updateAuthor);
    app.delete('/api/author/:id', AuthorControllers.deleteAuthor);  
}