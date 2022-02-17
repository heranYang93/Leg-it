const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LegoPart extends Model {}

LegoPart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    lego_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lego',
        key: 'id',
      },
    },
    part_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'part',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'legoPart',
  }
);

module.exports = LegoPart;
