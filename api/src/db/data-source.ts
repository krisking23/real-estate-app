import { DataSource } from "typeorm";
import { User } from "./user-entity";
import { Test } from "./test-entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "basketball10",
  database: "real-estate",
  synchronize: true,
  logging: true,
  entities: [User, Test],
  subscribers: [],
  migrations: [],
});
