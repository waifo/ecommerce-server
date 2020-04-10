import Debug from "debug";
import { ApolloServer, gql } from "apollo-server-express";

import schema from "./schema";

const debug = Debug("api:graphql");
debug("setting up apollo configuration");

class ProtectedApolloServer extends ApolloServer {}

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  }
};

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => {
    return {
      req
    };
  },
  playground: process.env.NODE_ENV !== "production" && {
    settings: {
      "editor.theme": "light"
    },
    tabs: [
      {
        endpoint: "https://e-toy-server.herokuapp.com/api"
      }
    ]
  },
  introspection: process.env.NODE_ENV !== "production"
});

export default apolloServer;
