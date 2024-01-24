const app = require("./src/app");
const {sequelize} = require("./src/db"); 
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT, ()=>{
    sequelize.sync({ force: false }) // Usa 'force: true' solo en desarrollo si necesitas recrear las tablas
    .then(() => {
        console.log("Tablas sincronizadas con éxito");
    })
    .catch(err => {
        console.error("Error al sincronizar las tablas:", err);
    });
    console.log(`listening on port ${PORT}`);
});