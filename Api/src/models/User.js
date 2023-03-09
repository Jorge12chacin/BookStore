
const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            default: 'requerir'
        },
        birthday: {
            type: Date,
            // default: "requerir"
          },
          email: {
            type: String,
            unique: true,
          },
          phone: {
            type: String,
          },
          pass: {
            type: String,
            required: true
          },
          roles: { 
            type: [String], 
            enum: ["public", "superAdmin", "admin"], 
            default: ["public"]
      
          }, 
          image: {
            type: String,
            default: "Not image"
          },
    });
};
