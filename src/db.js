const Sequelize = require ("sequelize");
const GuestModel = require ("./../models/Guest");
require ("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DEPLOY}=process.env;

//ACTIVA PARA LOCAL
// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/guestslist`,
//     {logging:false} //esto es para que no llene la consola
// );

//ACTIVA PARA PRODUCCION
const sequelize = new Sequelize(
    DB_DEPLOY,
    {logging:false} //esto es para que no llene la consola
);


GuestModel(sequelize);

const Guest = sequelize.models.Guest;

module.exports = {sequelize, ...sequelize.models}