import { createReadQuery, createWriteQuery, connectMongoDB } from "../";

export const getUserByEmail = createReadQuery(userObj => {
  if (userObj[0] === "{") {
    let user = JSON.parse(userObj);
    if (user.email) {
      return {
        query: connectMongoDB().users.find({ email: user.email })
      };
    }
  }
});

export const getAllUsers = db =>
  createReadQuery(() => ({
    query: db
      .collection("users")
      .find({})
      .toArray()
      .then(res => res.map(user => ({ email: user.email })))
  }));
