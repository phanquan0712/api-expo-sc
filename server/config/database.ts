import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;
mongoose.connect(`${URI}`, (err: any) => {
   if(err) throw err;
   console.log('Connected to MongoDB');
})




