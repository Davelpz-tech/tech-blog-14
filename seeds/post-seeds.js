const { Post } = require("../models");

const postData = [
  {
    title: "Title 1",
    content: "this is some cool content",
    user_id: 1,
  },
  {
    title: "Title 2",
    content: "this is also some cool content",
    user_id: 2,
  },
  {
    title: "Title 3",
    content: "this is the coolest content",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;