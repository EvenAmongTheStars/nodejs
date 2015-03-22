//import http module
var http = require("http");
//import url module
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("收到路由來自: " + pathName + " 的請求!");

        //excute router
        route(handle, pathName, response);

        // response.writeHead(200, {
        //     "Content-Type": "text/plain",
        //     "charset": "utf-8"
        // });
        // response.write(String(routeResponse));
        // response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log("開啟伺服器連線!");
}

exports.start = start;
