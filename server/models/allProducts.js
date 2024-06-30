const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    varients:[],
    price:[],
    category:{
        type:String,
    },
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true     
    }
})

const productModel = mongoose.model("allproducts",productSchema)

module.exports = productModel