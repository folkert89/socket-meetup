var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var Meetup = require("meetup")

server.listen(3002)


var mup = new Meetup()

let topicsCounter = {}


io.on('connection', socket => {
  console.log('got connection')

});

const countNames = (topicNames => {
  topicNames.forEach(name => {
    if (topicsCounter[name]){
      topicsCounter[name]++
    } else {
      topicsCounter[name] = 1
    }
  })
})

const sortTopicsArray = (arrayOfTopics) => {
  arrayOfTopics.sort((topicA, topicB) => {
    if (topicsCounter[topicA]>topicsCounter[topicB]){
      return -1
    } else if (topicsCounter[topicA]<topicsCounter[topicB]) {
      return 1
    } else {
      return 0
    }
  })
}

const topTenMapped = (topTen)=>  topTen.map(topic => {
  return {
    topic: topic,
    count: topicsCounter[topic]
  }
})

mup.stream("/2/rsvps", stream => {
  stream
    .on("data", item => {
      console.log("got item " + item)

      // inside of our stream event handler (!) we retrieve the group topics
      const topicNames = item.group.group_topics.map(topic => topic.topic_name)
      if (!topicNames.includes("Software Development")) return;

      countNames(topicNames);

      let arrayOfTopics = Object.keys(topicsCounter)
      sortTopicsArray(arrayOfTopics);

      const topTen = arrayOfTopics.slice(0,10)
      const topTenNew = topTenMapped(topTen);

      console.log(topTenNew)
      io.emit("actionCreateMeself", topTenNew)

    }).on("error", e => {
       console.log("error! " + e)
    });
});
