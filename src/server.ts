import dotenv from "dotenv";
import process from "process";

process.on("uncaughtException", (err: Error) => {
    console.log(`EXCEPTION: ${err.name} ${err.message}`);
});

dotenv.config({ path: "./.env" });
import db from "./connections";
import app from "./app";

const port = process.env.PORT;

async function bootstrap() {
    try {
        await db();
        await app.listen(port);

        process.on("unhandledRejection", (err: Error) => {
            app.log.error(err);
            app.close(() => {
                process.exit(1);
            });
        });

        process.on("SIGTERM", () => {
            app.log.error("SIGTERM RECEIVED");
        });
    } catch (err) {
        app.log.error(err);
    }
}

bootstrap();
