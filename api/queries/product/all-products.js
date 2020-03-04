import { getAllProducts } from "../../../shared/db/queries/product";

export default (_, __, { db }) => {
  return getAllProducts(db)();
};
