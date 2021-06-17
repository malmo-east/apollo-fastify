import { Connection, createConnection } from "typeorm";

const common = {
    entities: [__dirname + "/**/*.entity.ts", __dirname + "/**/*.entity.js"],
    synchronize: true,
    logging: true,
    cli: {
        entitiesDir: "/entities",
        migrationsDir: "/migrations",
        subscribersDir: "/subscriber",
    },
};

const developmentORM = (): Promise<Connection> => {
    return createConnection({
        name: "default",
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ...common,
    });
};

const db = (): Promise<Connection> => {
    return developmentORM();
};

export default db;
