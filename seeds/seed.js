const sequelize = require('../config/connection');
const { Post, Lego, Part, LegoPart } = require('../models');

const legoSeedData = require('./legoSeedData.json');
const partSeedData = require('./partSeedData.json');
const legoPartSeedData = require('./legoPartSeedData.json');
const postSeedData = require('./postSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const seedLego = await Lego.bulkCreate(legoSeedData);
  const seedPart = await Part.bulkCreate(partSeedData);
  const seedLegoPart = await LegoPart.bulkCreate(legoPartSeedData);

  process.exit(0);
};

seedDatabase();
