import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
})

// Create a Mongoose model for interacting with user data
// Efficiently reuse an existing model if available, otherwise create a new one
const User = models.User || model('User', UserSchema);

export default User;