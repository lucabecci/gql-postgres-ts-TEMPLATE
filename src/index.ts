import "reflect-metadata";
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

class Server {
  private _app: Application;
  constructor() {
    this._app = express();

    this.databaseInit();
    this.gqlInit(this._app);
  }
  private async databaseInit() {
    await createConnection();
  }

  private async gqlInit(app: Application): Promise<void> {
    const schema = await buildSchema({
      resolvers: [__dirname + "/modules/**/*.ts"],
    });
    const apolloServer = new ApolloServer({
      schema,
    });
    apolloServer.applyMiddleware({ app });
  }

  public run(): void {
    this._app.listen(4000, () => {
      console.log("Server running in:", 4000);
    });
  }
}

const server = new Server();

server.run();
