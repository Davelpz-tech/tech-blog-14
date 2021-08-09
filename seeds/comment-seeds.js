
const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "blah",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "blahblah",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "blahblahblah",
        user_id: 3,
        post_id: 3
    },

];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;