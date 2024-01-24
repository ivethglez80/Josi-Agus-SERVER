
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Gift",
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, 
            imagen:{
                type: DataTypes.STRING,
                allowNull: false
            },
            nombre_art:{
                type: DataTypes.STRING,
                allowNull: false
            }, 
            descripcion:{
                type: DataTypes.STRING,
                allowNull: true
            },
            link:{
                type: DataTypes.STRING,
                allowNull: true
            },
            disponible:{
                type: DataTypes.BOOLEAN,
                defaultValue: true                
            },
            invitado:{
                type:DataTypes.STRING,
                allowNull: true,
                unique: false
            }

        },
        {timestamps: false}
    )
};