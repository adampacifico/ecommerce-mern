import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    countInStock:{
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    // variants
})

const Product = mongoose.model('product', productSchema);

export default Product;