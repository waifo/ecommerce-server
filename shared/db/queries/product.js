import { createReadQuery } from "../create-query";

export const getAllProducts = db =>
  createReadQuery(() => ({
    query: db
      .collection("products")
      .find({})
      .toArray()
      .then(res =>
        res.reduce(
          (combinedArray, product) => combinedArray.concat(product["items"]),
          []
        )
      )
  }));

export const getAllCollections = db =>
  createReadQuery(() => ({
    query: db
      .collection("products")
      .find({})
      .toArray()
      .then(res => res)
  }));

export const getCollectionByTitle = (title, db) =>
  createReadQuery(() => ({
    query: db
      .collection("products")
      .find({ routeName: title })
      .toArray()
      .then(res => res[0])
  }));
