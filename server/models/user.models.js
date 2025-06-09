import mongoose from 'mongoose';
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({ 

    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

// compaire password
userSchema.methods.compairePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;