/* eslint-disable prettier/prettier */
// ormconfig.js
// ormconfig.js
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cars',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
