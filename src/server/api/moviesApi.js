const axios = require('axios');

const getDataMovie = async (nameMovie) => {
  const api = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=cfe422613b250f702980a3bbf9e90716`;
  const proxyUrl  = `https://cors-anywhere.herokuapp.com/`;
  return await axios.get(proxyUrl+api,{
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }).catch(error => console.log(error));
}

module.exports.getDataMovie = getDataMovie;