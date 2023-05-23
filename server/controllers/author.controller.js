const Author = require('../models/author.model');

module.exports.getAllAuthors=(req,response)=>{
    Author.find({})
    .then(authors=>{
        console.log(authors);
        response.json(authors);
    })
    .catch(err=>{
        console.log(err)
        response.json(err)
    })
}



module.exports.findOneAuthor=(req,res)=>{
    Author.findOne({_id:req.params.id})
    .then(author=>res.json(author))
    .catch(err=> res.json(err))
}

module.exports.createAuthor=(req,res)=>{
    Author.create(req.body)
    .then(newCreatedAuthor=>{
        res.json({author: newCreatedAuthor})
    })
    // const { name } = req.body;
    // Author.create({
    //     name:name
    // })
    // .then(author => res.json(author))
    
    //         .catch(err => res.status(400).json(err))
    //         console.log(err)
    .catch(err => res.json({error:err}))
}

module.exports.updateAuthor=(req,res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        )
        .then(updatedAuthor=>{
            res.json({author: updatedAuthor})
        })
        .catch(err=>{
            res.json({error:err})
        })
}
module.exports.deleteAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch(err=>{
        res.json({message:'Somthing went wrong...', error:err})
        console.log(err)
    })
}