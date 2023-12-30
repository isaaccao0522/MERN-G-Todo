import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`MongoDb is Connected`);
    })
    .catch(err => {
      console.log(err.message);
    });
};

export default connectDB;