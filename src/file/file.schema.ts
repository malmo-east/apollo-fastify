import { gql } from "apollo-server-fastify";

export const fileSchema = gql`
    extend type Mutation {
        uploadFile(input: UploadFileInput): File!
    }

    type File {
        id: ID!
        filename: String!
    }

    input UploadFileInput {
        file: FileUpload
    }
`;
