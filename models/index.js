const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');
const Theme = require('./Theme');
const Tag = require('./Tag');
const TagToPost = require('./TagToPost');

// >>> hy
//1. Theme
// Theme:Post = 1:N
Theme.hasMany(Post, {
  foreignKey: 'theme_id',
});

Post.belongsTo(Theme, {
  foreignKey: 'theme_id',
  onDelete: 'CASCADE',
});

//2. Tag
// Post:Tag = N:M
Post.belongsToMany(Tag, {
  foreignKey: 'post_id',
  through: TagToPost,
});
Tag.belongsToMany(Post, {
  foreignKey: 'tag_id',
  through: TagToPost,
});

// <<< hy

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

module.exports = { User, Post, Like, Comment, Theme, Tag, TagToPost };
