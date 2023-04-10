import { Sequelize } from 'sequelize';

const db = new Sequelize('mi_bdchallenge', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;