const graphqlHTTP = require('express-graphql');
const R = require('ramda');

const api = require('../api/moviesApi');


exports.getDataMovie = async (name) => {
  const response = await api.getDataMovie(name);
  const data = await response.data.results;

  const getAllPosts = post => post;

  const mapPost = (post, idParam) => {
    return R.find(R.propEq('id', idParam))(post);
  }

  const root = {
    posts: () => data.map(getAllPosts),
    post: ({ id }) => {
      return mapPost(data, id)
    },
  };

  return root;
}



