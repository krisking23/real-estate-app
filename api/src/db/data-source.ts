import { DataSource } from "typeorm";
import { User } from "./user-entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "basketball10",
  database: "real-estate",
  synchronize: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
