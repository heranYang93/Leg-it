const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Like, {
  foreignKey: 'post_id',
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Like, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Like, Comment };
