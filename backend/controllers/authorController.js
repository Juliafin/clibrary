const Author = require('./../models/author');

module.exports = {
  authorCreate : (author, initial=false) => {
    if (initial) {
      return Author.findAll()
      .count()
      .then( (count) => {
        if (count > 0) {
          return;
        }
      })
      
    }
    return Author
      .create(author, {new:true})
      .then((response) => {
        // console.log('Author has been created:', response);
      })
      .catch( (err) => {
        // console.log('Author was not created, see error: ', err);
      })    
  }
}