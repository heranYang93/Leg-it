const sequelize = require('../config/connection');
const { Comment, User, Post } = require('../models');
const commentSeedData = require('./commentSeedData.json');
const postSeedData = require('./postSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postSeedData);
  await Comment.bulkCreate(commentSeedData);
  process.exit(0);
};

seedDatabase();
