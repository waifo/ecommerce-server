import {
  getAllCollections,
  getCollectionByTitle
} from "../../../shared/db/queries/product";

export const collections = (_, __, { db }) => getAllCollections(db)();
export const collectionByTitle = (_, { title }, { db }) => {
  return getCollectionByTitle(title, db)();
};
