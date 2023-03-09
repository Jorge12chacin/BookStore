const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Book', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        editorial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        inventario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ISBN: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
};
