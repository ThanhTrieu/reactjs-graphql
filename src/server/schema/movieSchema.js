const { buildSchema } = require('graphql');

exports.createSchema = () => {
  const schema = buildSchema(`
    type Query {
      posts: [Post]
      post(id: Int!): Post
    }

    type Post {
      id: Int!
      title: String
      overview: String
    }
  `);
  return schema
}



