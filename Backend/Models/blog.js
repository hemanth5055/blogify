const {Schema,model} = require("mongoose")

const blogSchema = Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    body:{
        type:String,
        required:true
    },
    createdDate:{
        type:String,
        required:true,
    },
    ownerName:{
        type:String,
        required:true,
    },
    writtenBy:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true
    }

},{timestamps:true})
const Blog = model("blogs",blogSchema)
module.exports=Blog;