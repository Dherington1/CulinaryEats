const User = require("./User");
const Post = require('./Post');
const Comment = require('./Comment');
const Vote = require('./Vote');

// User.hasMany(Post, {
//     foreignKey: "user_id"
// });

// //check back on belongs to vs belongs to many
// Post.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'user_id'
// });

// Comment.belongsTo(User, {
//     foreignKey: "user_id"
// });

// Comment.belongsTo(Post, {
//     foreignKey: "post_id"
// });

// User.hasMany(Comment, {
//     foreignKey: "user_id"
// });

// Post.hasMany(Comment, {
//     foreignKey: "post_id"
// });


// create asociations 
// user has many post but post cany have many users
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  
  // for votes 
  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });
  
  
  
  // connects everything together for votes
  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });
  
  
  // connects everything together for comments
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

  
module.exports ={User, Post, Comment};