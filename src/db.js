const Sequelize = require ("sequelize");
const GuestModel = require ("./../models/Guest");
const GiftModel = require ("./../models/Gift");
require ("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DEPLOY}=process.env;

//ACTIVA PARA LOCAL
// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/evento`,
//     {logging:false} //esto es para que no llene la consola
// );

//ACTIVA PARA PRODUCCION
const sequelize = new Sequelize(
    DB_DEPLOY,
    {logging:false} //esto es para que no llene la consola
);


GuestModel(sequelize);
GiftModel(sequelize);

const Guest = sequelize.models.Guest;
const Gift = sequelize.models.Gift;

module.exports = {sequelize, ...sequelize.models}