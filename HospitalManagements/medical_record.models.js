import mongoose from 'mongoose'

const mediacalRecordSchema = new mongoose.Schema({},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord",mediacalRecordSchema)
