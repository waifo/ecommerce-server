import getAllProducts from "./all-products";
import { collections, collectionByTitle } from "./collections";

const ProductQueries = {
  Query: {
    getAllProducts,
    collections,
    collectionByTitle
  }
};

export default ProductQueries;
