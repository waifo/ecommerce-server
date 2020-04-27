import { createReadQuery } from "../create-query";

export const getAllProducts = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("products")
      .find({})
      .toArray()
      .then((res) => res),
  }));

export const getAllCollections = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("categories")
      .find({})
      .toArray()
      .then((res) => res),
  }));

export const getProductsByCategory = (category, db) =>
  createReadQuery(() => ({
    query: db
      .collection("products")
      .find({ category: category })
      .toArray()
      .then((res) => res[0]),
  }));
