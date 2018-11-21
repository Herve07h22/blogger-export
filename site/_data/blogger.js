var axios  = require('axios');
var toJSON = require('xml2js').parseString;

var url = process.env.BLOGGER_FEED ||'http://france.googleblog.com/feeds/posts/default';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        // turn the feed XML into JSON
        toJSON(response.data, function (err, result) {
          // create a path for each item based on Medium's guid URL
          let posts = []
          let urls = []
          result.feed.entry.forEach(element => {
            // console.log(element)
            let item = { 
              'title' : element.title[0]._,
              'content' : element.content[0]._,
              'published' : element.published[0],
              'thumbnail' : 'media:thumbnail' in element ? element['media:thumbnail'][0].$.url : 'default.png',
              'path' : element.link.filter( link => link.$.rel=='alternate')[0].$.href.split('/').reverse()[0]
            }
            // console.log(item)
            posts.push(item)
            urls.push(item.url)
          });
          resolve({'posts':posts});
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
