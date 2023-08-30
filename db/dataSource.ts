import { DataSource } from "typeorm"
import { user } from './entity/user.entity.js';

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "homework1_reg",
    entities: [user],
    logging: true,
    synchronize: true,
})

export default dataSource;