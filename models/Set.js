const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Set extends Model {}

Set.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    theme_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'theme',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'set',
  }
);

module.exports = Set;
