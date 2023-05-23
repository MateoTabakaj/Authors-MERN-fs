const mongoose=require('mongoose');

const AuthorSchema =new mongoose.Schema({
    name: {type: String,
    required:[true, "Author name is required"],
    minlength:[3, "Name has to be longer than 3"]
}},
    { timestamps: true });

    module.exports = mongoose.model('Author', AuthorSchema);
