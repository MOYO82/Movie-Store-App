import { Schema, model }  from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    require: true, 
    unique: true,
    min: 7,
    max: 45,
  },

  first_name: { 
    type: String, 
    require: true, 
    unique: true 
  },

  last_name: { 
    type: String, 
    require: true, 
    unique: true 
  },

  email: { type: String, 
    require: true, 
    unique: true,
    lowercase: true,
    immutable: true,
    validators: {
      match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please add a valid email string to the email path."]
    }
  },
  
  password: { 
    type: String, 
    require: true,
    unique: true,  
    minlength: 8,
    maxlength: 20
   },
   
  token: { 
    type: String, 
    require: true, 
    unique: true },
},
{
  timestamps: true
});

UserSchema.pre("save", function(next){
  this.fullName = this.firstName + " " +  this.lastName 
  next()
})
module.exports = mongoose.model("user", userSchema);