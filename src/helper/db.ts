import { Station } from "src/entities/station.entity";
import { Location } from "src/entities/location.entity";
import { DataSource } from "typeorm";

// export const AppDataSource = new DataSource({
//     type: "mysql",
//      host: "localhost",
//      port: 3306,
//      username: "administrator",
//      password: "123456",
//      database: "kutaykoca",
//      entities: [Location, Station],
//      migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
//      synchronize: true,
//      logging: true,
//      subscribers: [],
// })

export const AppDataSource = new DataSource({
    type: "mysql",
     host: "db-mysql-sfo3-63827-do-user-9457349-0.b.db.ondigitalocean.com",
     port: 25060,
     username: "doadmin",
     password: "AVNS_JWionXfMubhSNVSto-u",
     database: "kutaykoca",
     entities: [Location, Station],
     migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
     synchronize: true,
     logging: true,
     subscribers: [],
     extra: {
        ssl: false
     }
})