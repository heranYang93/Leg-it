const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lego extends Model {}

Lego.init(
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 5,
    //   references: {
    //     model: 'post',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'lego',
  }
);

module.exports = Lego;
