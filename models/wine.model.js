// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento wine
const WineSchema = mongoose.Schema({
        Title: {
            type: String,
            requier: true
        },
        Description:{
            type: String,
            required: true
        },
        
    Capacity: {
        type: String,
        required: true
    },
    Grape: {
        type: String,
        required: true
    },
    Closure: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    Unit: {
        type: Number,
        required: true
    },
    Characteristics: {
        type: String,
        required: true
    },
    PerBottleCaseEach: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    ABV: {
        type: String,
        required: true
    },
    Style: {
        type: String,
        required: true
    },
    Vintage: {
        type: String,
        required: true
    }

    }
)

const Wine = mongoose.model('Wine', WineSchema);
module.exports= Wine;