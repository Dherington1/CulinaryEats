const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create Post model
class Post extends Model {}
// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    //may need to adjust
    ingredients: {
      type: DataTypes.STRING(7000),
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING(7000),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
module.exports = Post;
