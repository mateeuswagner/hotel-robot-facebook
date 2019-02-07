const PostMessage = require('../controller/post_message');

module.exports = (router) => {
    router.route('/post_message').post(PostMessage);
}