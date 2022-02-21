const sequelize = require('../config/connection');

const {
  User,
  Post,
  Like,
  Comment,
  Theme,
  Set,
  Tag,
  TagToPost,
} = require('../models');

const userSeedData = require('./userSeedData.json');
const setSeedData = require('./setSeedData.json');
const postSeedData = require('./postSeedData.json');
const tagSeedData = require('./tagSeedData.json');
const tagToPostSeedData = require('./tagToPostSeedData.json');
const themeSeedData = require('./themeSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const seedUser = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  const seedPost = await Post.bulkCreate(postSeedData);
  const seedTag = await Tag.bulkCreate(tagSeedData);
  const seedTagToPost = await TagToPost.bulkCreate(tagToPostSeedData);
  const seedTheme = await Theme.bulkCreate(themeSeedData);
  const seedSet = await Set.bulkCreate(setSeedData);
  process.exit(0);
};

seedDatabase();
