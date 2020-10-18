var http = require("http");

var options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "8080",
  "path": "/api/v2/parse",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "9c610a0f-9ce0-8ad4-6e66-4770259a9b2e"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ data: 'JOHN0000MICHAEL0009994567' }));
req.end();
