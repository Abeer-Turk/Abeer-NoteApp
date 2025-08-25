import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: Promise<typeof mongoose> | undefined;
}

export async function connectMongo(uri: string) {
  if (!uri) throw new Error('MONGO_DB_URI is not set');
  if (!global._mongooseConn) {
    global._mongooseConn = mongoose.connect(uri, {});
  }
  return global._mongooseConn;
}
