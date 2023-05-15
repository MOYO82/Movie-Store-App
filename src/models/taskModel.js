import { Schema, model, Types, Query } from "mongoose";

const movieSchema = mongoose.Schema({
    movieTitle : {
        type : String,
        required: true,
    trim: true, 
    minlength: 8,
    maxlength: 80
    },
    
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require: true,
    },

    genre: { 
        type: genreSchema,  
        required: true
    },

    ProducerName: {
        type: string,  
        required: true
    },

    releasedDate: {
        type: Date,
        required: true,
      },
    status: {
        type: String,
        enum: ["started", "in-progress", "completed"],
    },

    timestamps : true
})

const Movie = mongoose.model("Movie",movieSchema);
module.exports = Movie;