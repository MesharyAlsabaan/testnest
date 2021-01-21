import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ORM:TypeOrmModuleOptions={

    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'test',
    entities:[__dirname + '/../**/*.entity.ts'],
    synchronize:true,
}