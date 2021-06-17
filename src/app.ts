import "reflect-metadata";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import merge from "lodash.merge";
import { commonSchema } from "./common";
import { fileSchema, fileResolver } from "./file";

// MERGE RESOLVERS
export const resolvers = merge(fileResolver);

// SERVER
const app = fastify({ logger: true, trustProxy: false });

// GRAPHQL
const api = new ApolloServer({
    playground: {
        settings: {
            "request.credentials": "include",
        },
    },
    introspection: true,
    tracing: true,
    typeDefs: [fileSchema, commonSchema],
    uploads: {
        // 1.6 mb
        maxFileSize: 1677721.6,
    },
    resolvers,
    context: ({ request, reply }: { request: FastifyRequest; reply: FastifyReply }) => ({
        req: request,
        reply,
    }),
});

// MIDDLEWARES
app.register(api.createHandler({ path: "/graphql", cors: false }));

export default app;
