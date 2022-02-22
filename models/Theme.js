const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Theme extends Model {}

Theme.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'theme',
  }
);

module.exports = Theme;
