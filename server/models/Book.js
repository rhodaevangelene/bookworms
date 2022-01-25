const { Schema, model, Mongoose } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        
        authors: {
            type: [String]
        },

        description: {
            type: String
        },

        imgUrl: {
            type: String
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Book = model('Book', bookSchema);

module.exports = Book;

