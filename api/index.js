import express from "express";
import compression from "compression";
import Debug from "debug";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";

import config from "../webpack.config.js";
import apolloServer from "./apolloServer";
import { connectMongoDB } from "../shared/db/db";

const debug = Debug("api");
debug("logging with debug enabled :-)");
debug("Starting Server <-->");

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const compiler = webpack(config);

app.use(compression());
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

connectMongoDB().then(db => {
  debug(`connection db object ${db}`);
  apolloServer.applyMiddleware({ app, path: "/api" });
  (apolloServer.context = ({ req, res }) => {
    return {
      req,
      db
    };
  }),
    app.listen(port, () => debug(`GraphQL Server running on port ${port}/api`));
});
