const sequelize = require('../config/connection');
const { Comment, User, Post, Like } = require('../models');
const commentSeedData = require('./commentSeedData.json');
const postSeedData = require('./postSeedData.json');
const userSeedData = require('./userSeedData.json');
const likeSeedData = require('./likeSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postSeedData);
  await Comment.bulkCreate(commentSeedData);
  await Like.bulkCreate(likeSeedData);
  process.exit(0);
};

seedDatabase();
