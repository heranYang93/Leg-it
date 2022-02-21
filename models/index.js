const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');

// >>> hy

//1. Set
// Post:Set = 1:1
const Set = require('./Set');
Post.hasOne(Set, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});
Set.belongsTo(Post, { foreignKey: 'post_id' });

//2. Theme
// Theme:Set = 1:n
const Theme = require('./Theme');
Theme.hasMany(Set, {
  foreignKey: 'theme_id',
  onDelete: 'CASCADE',
});
Set.belongsTo(Theme, { foreignKey: 'theme_id' });
// <<< hy

//3. Tag
// Post:Tag = n:n
const Tag = require('./Tag');
const TagToPost = require('./TagToPost');
Post.hasMany(Tag, {
  foreignKey: 'post_id',
  through: TagToPost,
});
Tag.belongsToMany(Post, {
  foreignKey: 'tag_id',
  through: TagToPost,
});
// <<< hy

//Lego and Parts // hy

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

//added Lego, Part, LegoPart //hy
module.exports = { User, Post, Like, Comment, Lego, Part, LegoPart };
