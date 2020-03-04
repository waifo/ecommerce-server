import { MongoClient, Server } from "mongodb";
import Debug from "debug";

const debug = Debug("shared:db");
const url = `mongodb+srv://forgql:mongo@cluster0-wnkgo.mongodb.net`;
let db = null;
export const connectMongoDB = () => {
  if (db) {
    return db;
  }
  return MongoClient.connect(url)
    .then(client => {
      debug("connected successfully to mongodb", client);
      return (db = client.db("e-commerce"));
    })
    .catch(error => debug(`Error connecting to mongodb ${error}`));
};
