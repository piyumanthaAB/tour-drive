import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import isPortReachable from 'is-port-reachable';

let mongoServer;

before(async () => {


    process.env.JWT_COOKIE_EXPIRES_IN = '1'
    process.env.JWT_SECRET = 'my - secret - to - use - create - jwt - tokens.ihope - this - is - long_enough.lol.'
    process.env.JWT_EXPIRES_IN = '1d'

    console.log(await isPortReachable(8000, {host: 'localhost'}));
    
    try {
        mongoServer = new MongoMemoryServer.create();
        const mongoUri = await mongoServer.getUri();
        await mongoose.connect(mongoUri);
        console.log('\n\n💥 test db connected\n\n');
    } catch (error) {
        console.log({ error });
    }

    
});
  
const clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
};
  
beforeEach(async () => {
    await clearDatabase();
  });


after(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    await mongoose.connection.close();
});

  

