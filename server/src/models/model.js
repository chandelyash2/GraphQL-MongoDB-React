import  mongoose  from "mongoose";

export const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({
      
        firstname:{
            require:true,
            type:String
        },
        lastname:{
            type:String
        },
        email:{
            require:true,
            type:String
        },
        password:{
            require:true,
            type:String
        },
        company_id:{
            require:true,
            type:String
        },
        createdAt: {
            type: Date,
            default: new Date(),
          },

    })
)
