const fetchData = require('../helpers/fetchData.js');

const endPoint = 'https://saavutettava.fi/wp-json/wp/v2/posts?per_page=10';

module.exports = async function fetchPosts() {
	return fetchData('posts', endPoint);
};
