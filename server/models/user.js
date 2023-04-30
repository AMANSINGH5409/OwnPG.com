import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: String,
    },
    isOwner: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.Users || mongoose.model('User', userSchema);