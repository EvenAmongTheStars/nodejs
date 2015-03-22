var exec = require("child_process").exec;

function start(response) {
    console.log("路由請求處理 'start' 已執行.");
    // sleep(10000);
    // return "start!";

    exec("dir /a", function(error, stdout, stderr) {
        response.writeHead(200, {
            "Content-Type": "text/plain",
            "charset": "utf-8"
        });
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("路由請求處理 'upload' 已執行.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("upload!");
    response.end();
}

function cheer(response) {
    console.log("路由請求處理 'cheer' 已執行.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("cheer!");
    response.end();
}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}
exports.start = start;
exports.upload = upload;
exports.cheer = cheer;
