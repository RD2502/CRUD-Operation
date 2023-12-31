import mongoose from 'mongoose';
const connectdb=async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS={
            dbName:"school",
        };
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connected Successfully...")
    } catch (error) {
        console.log(error)
    }
}

export default connectdb