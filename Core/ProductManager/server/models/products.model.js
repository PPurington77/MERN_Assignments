const mongoose = require('mongoose');
//title..price..description
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minLength: [3, 'Title must be atleast 3 characters']
        },

        price: {
            type: Number,
            required: [true, 'Price is required']
        },

        description: {
            type: String,
            required: [true, 'Description is required'],
            minLength: [10, 'Description must be at least 10 characters']
        }
    },
    { timestamps: true }
);

//Register's schema with mongoose and proivdes a string to the name collection
const Product = mongoose.model('Product', ProductSchema);

//Always export as an object, just in case we need to add more later
module.exports = { Product: Product};