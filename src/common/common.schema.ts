import {gql} from "apollo-server-fastify";

export const commonSchema = gql`
    scalar FileUpload

    type Query {
        _: String
    }

    type Mutation {
        _: String
    }

    type Subscription {
        _: String
    }
`
