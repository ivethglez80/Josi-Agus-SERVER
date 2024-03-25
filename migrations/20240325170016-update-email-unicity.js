'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Guests', 'email', {
      type: Sequelize.STRING, // Cambiar el tipo de dato según corresponda
      allowNull: true, // Permitir valores nulos
      unique: false // Eliminar la restricción de unicidad
    });
  },

  async down(queryInterface, Sequelize) {
    // Si es necesario, puedes agregar aquí el código para revertir los cambios
  }
};

