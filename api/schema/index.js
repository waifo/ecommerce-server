import Debug from "debug";
import {
  makeExecutableSchema,
  addSchemaLevelResolveFunction
} from "graphql-tools";
import { merge } from "lodash";

import { User, Product, Collection } from "../types";
import UserQueries from "../queries/user";
import ProductQueries from "../queries/product";

const debug = Debug("api:schema");
debug("creating schema for graphql");

const IS_PROD = process.env.NODE_ENV === "production";

const ROOT = `
type Query{
    dummy:String
}
type Mutation{
    dummy:String
}
schema{
    query:Query
    mutation:Mutation
}
`;

const resolvers = merge({}, UserQueries, ProductQueries);

const schema = makeExecutableSchema({
  typeDefs: [ROOT, User, Product, Collection],
  resolvers
});

export default schema;
