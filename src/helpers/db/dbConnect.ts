import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

// const MONGODB_URI =
// "mongodb+srv://sorinwebdev:YIjo7kNGOhL3l627@cluster0.9xajp1z.mongodb.net/eshop?retryWrites=true&w=majority";

const MONGODB_URI = process.env.MONGO_DB as string;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    }).then(err => console.log(err));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
