import mongoose from 'mongoose';

const studentschema=new mongoose.Schema(
    {
        name:{type:String,required:true,trim:true},
        age:{type:Number,required:true,min:18,max:60},
        fees:{type:mongoose.Decimal128,requires:true,validate:(value)=>value>=5000.5}

    }
)
const studentmodel=mongoose.model("student",studentschema)

export default studentmodel