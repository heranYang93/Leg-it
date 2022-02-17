const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');

//Lego and Part // hy

// Lego and Part should have a MANY-TO-MANY relationship;
// One Lego model has multiple Parts
// One Part can belong to many Lego model
const Lego = require('./Lego');
const Part = require('./Part');
const LegoPart = require('./LegoPart');
Lego.belongsToMany(Part, {
  foreignKey: 'lego_id',
  through: LegoPart,
  onDelete: 'CASCADE',
});
Part.belongsToMany(Lego, {
  foreignKey: 'part_id',
  through: LegoPart,
  onDelete: 'CASCADE',
});

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
