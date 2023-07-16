import { Station } from "src/entities/station.entity";
import { Location } from "src/entities/location.entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
     host: "localhost",
     port: 3306,
     username: "administrator",
     password: "123456",
     database: "kutaykoca",
     entities: [Location, Station],
     migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
     synchronize: true,
     logging: true,
     subscribers: [],
})