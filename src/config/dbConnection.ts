import { Sequelize, Dialect } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

interface DatabaseConfig {
    name: string;
    host: string;
    username: string;
    password: string;
    dialect: Dialect;
}

const databaseConfig : DatabaseConfig = {
    name: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "",
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    dialect: (process.env.DB_DIALECT as Dialect) || "mysql",
}

const sequelizeConnection = new Sequelize(databaseConfig.name, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
});

export default sequelizeConnection;