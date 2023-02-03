import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string; 
    age: number;
}
const userSchema: Schema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true
        
    },
    firstName: {
        type: String,
        require: true
        
    },
    lastName: {
        type: String,
        require: true
        
    },
    gender: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
},{ timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});

const User = mongoose.model<IUser>('User', userSchema);

export { IUser, User};