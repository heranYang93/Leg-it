const sequelize = require('../config/connection');
const {
  Comment,
  User,
  Post,
  Tag,
  TagToPost,
  Like,
  Follower,
} = require('../models');
const commentSeedData = require('./commentSeedData.json');
const postSeedData = require('./postSeedData.json');
const userSeedData = require('./userSeedData.json');
const tagSeedData = require('./tagSeedData.json');
const tagToPostSeedData = require('./tagToPostSeedData.json');
const likeSeedData = require('./likeSeedData.json');
const followerSeedData = require('./followerSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postSeedData);
  await Comment.bulkCreate(commentSeedData);
  await Tag.bulkCreate(tagSeedData);
  await TagToPost.bulkCreate(tagToPostSeedData);
  await Like.bulkCreate(likeSeedData);
  await Follower.bulkCreate(followerSeedData);

  process.exit(0);
};

seedDatabase();
