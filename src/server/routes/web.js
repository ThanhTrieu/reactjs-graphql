const graphqlHTTP = require('express-graphql');
const movieSchema =  require('../schema/movieSchema');
const graphqlHttp = require('../controller/movieController');


module.exports = async (app) =>  {
  const schemaMovie = movieSchema.createSchema();
  const rootMovie = await graphqlHttp.getDataMovie('Avengers');

  app.use('/graphql', graphqlHTTP({
    schema: schemaMovie,
    rootValue: rootMovie,
    pretty: true,
    graphiql: true,
  }));

}

