const {authorCreate} = require('./../controllers/authorController');

module.exports = (data) => {
  var authors = [];
  for (var key in data) {
    if (!key) {
      console.log('NO KEY')
      continue;
    }
    // console.log(key);
    var labelArr = [...data[key]["http://www.w3.org/2000/01/rdf-schema#label"]]
    for (var label of labelArr) {
      if (label.type) {
        delete label.type;
      }
    }
    // console.log(labelArr);

    var author = {
      authorUrl : key,
      authorName: labelArr
    };
    authors.push(author);
    if (!author.authorUrl) {
      console.log(author, 'NO URL');
    }
  authorCreate(author);
  }

  // console.log(JSON.stringify(authors, null, 2));
  return authors;

}