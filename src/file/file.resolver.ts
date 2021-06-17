// import { FastifyRequest } from "fastify";
import { ApolloError, IResolvers } from "apollo-server-fastify";
import { GraphQLUpload } from "graphql-upload";
// import { FileEntity } from "./file.entity";

export const fileResolver: IResolvers = {
    Upload: GraphQLUpload,
    Mutation: {
        uploadFile: async (
            _root: undefined,
            { input: { file } }: any
        ): Promise<any | Error> => {
            try {
                const rawFile = await file;
                console.log(rawFile)
            } catch (e) {
                throw new ApolloError(e);
            }
        }
    }
};
