const giveMeAJoke = require("give-me-a-joke");
const http = require("http");
const colors = require("colors");

http
  .createServer(function (req, res) {
    giveMeAJoke.getRandomDadJoke(function (joke) {
      console.log(colors.rainbow(joke));
      res.write(joke);
      res.end();
    });
  })
  .listen(8080);
