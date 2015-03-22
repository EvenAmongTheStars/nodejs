var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// var handle = {}
// handle["/"] = requestHandlers.start;
// handle["/start"] = requestHandlers.start;
// handle["/upload"] = requestHandlers.upload;
// handle["/cheer"] = requestHandlers.cheer;

var handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/upload": requestHandlers.upload,
    "/cheer": requestHandlers.cheer
}


server.start(router.route, handle);
