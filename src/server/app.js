const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
require('./routes/web')(app);
const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);


