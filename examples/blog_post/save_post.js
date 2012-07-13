// Generated by CoffeeScript 1.3.3
(function() {
  var BlogPost, Dynasaur, aws_credentials, blog_post, dynasaur;

  aws_credentials = {
    accessKeyId: 'your_aws_key',
    secretAccessKey: 'your_aws_secret'
  };

  Dynasaur = require('./lib/Dynasaur');

  dynasaur = new Dynasaur(aws_credentials);

  BlogPost = require('./models/BlogPost')(dynasaur);

  blog_post = BlogPost["new"]();

  blog_post.title = 'Dynasaur';

  blog_post.author = 'Someone';

  blog_post.body = 'Dynasaur is a DynamoDB ORM that builds some neat features on top of DynamoDB like S3 backups, Elastic Map Reduce and Multi-indexing';

  blog_post.date = new Date();

  blog_post.save(function(err, data) {
    return console.log(err);
  });

}).call(this);