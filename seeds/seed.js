const sequelize = require('../config/connection');
const { Comment, User, Post, Theme, Tag, TagToPost } = require('../models');
const commentSeedData = require('./commentSeedData.json');
const postSeedData = require('./postSeedData.json');
const userSeedData = require('./userSeedData.json');
const tagSeedData = require('./tagSeedData.json');
const tagToPostSeedData = require('./tagToPostSeedData.json');
const themeSeedData = require('./themeSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Theme.bulkCreate(themeSeedData);
  await Post.bulkCreate(postSeedData);
  await Comment.bulkCreate(commentSeedData);
  await Tag.bulkCreate(tagSeedData);
  await TagToPost.bulkCreate(tagToPostSeedData);
  await Theme.bulkCreate(themeSeedData);
  process.exit(0);
};

seedDatabase();
