import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://snehalgupta502s:nandita502@cluster0.k57ax.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}