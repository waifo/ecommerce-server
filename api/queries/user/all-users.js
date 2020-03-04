import { getAllUsers } from "../../../shared/db/queries/user";

export default (_, __, { db }) => {
  return getAllUsers(db)();
};
