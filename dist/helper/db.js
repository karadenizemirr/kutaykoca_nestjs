"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const station_entity_1 = require("../entities/station.entity");
const location_entity_1 = require("../entities/location.entity");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "administrator",
    password: "123456",
    database: "kutaykoca",
    entities: [location_entity_1.Location, station_entity_1.Station],
    migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
    synchronize: true,
    logging: true,
    subscribers: [],
});
//# sourceMappingURL=db.js.map