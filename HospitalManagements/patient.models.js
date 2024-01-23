import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema(
  {
    name : {
      type :String,
      required : true
    },
    diagnoisedWith:{
      type : String,
      required : true
    },
    address:{
      type : String,
      required : true
    },
    age:{
      type : Number,
      required : true
    },
    bloodGroup:{
      type : String,
      required : true
    },
    Gender:{
      type : String,
      required : true,
      enum : ['M','F','Other']
    },
    admittedIn:{
      type : mongoose.Schema.Types.ObjectId,
      ref : "Hospital"
    }
  },
  {timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema)