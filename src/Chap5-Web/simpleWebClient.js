const http = require('http');
const queryString = require('querystring');

const postData = queryString.stringify({
  'msg': 'Hello World'
});

const options = {
  hostname: 'localhost',
  port: 8989,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  },
  // 禁用 http.Agent 的 socket 池
  agent: false
};

const req = http.request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  // get data as chunks
  res.on('data', chunk => {
    console.log(`BODY: ${chunk}`);
  });

  // end response
  res.on('end', _ => {
    console.log(`No more data in response`);
  });
});

req.on('error', e => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();