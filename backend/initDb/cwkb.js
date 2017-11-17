const axios = require('axios');
const convertAuthors = require('./convertAuthors');

module.exports = () => {
  return axios('http://cwkb.org/authors/json')
    .then((res) => {
      // var parsed = JSON.stringify(data, null, 2)
      // console.log(data)
      convertAuthors(res.data);

    })
    .catch((err) => {
      console.log('Data call failed', err);
    })
}