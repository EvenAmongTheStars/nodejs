function route(handle, pathName, response) {
    console.log("收到路由請求: " + pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response);
    } else {
        console.log("找不到處理路由: " + pathName);
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("找不到處理路由: " + pathName);
        response.end();
    }
}

exports.route = route;
