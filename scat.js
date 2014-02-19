#!/usr/bin/env node

var open = require('opener')
var http = require('http')
var bl = require('bl')
var fs = require('fs')

var file = process.argv[2]
if (file) {
  boot(fs.readFileSync(file))
} else {
  process.stdin.resume()
  process.stdin.pipe(bl(function(err, script) {
    if (err) throw err
    boot(script)
  }))
}

function boot(script) {
  var index = fs.readFileSync(__dirname + '/index.html')
  var port = process.env.PORT || 6281
  var attempts = 100

  var server = http.createServer(function(req, res) {
    return req.url === '/bundle.js'
      ? sendScript(req, res)
      : sendIndex(req, res)
  }).once('listening', function() {
    open('http://localhost:' + port)
  })

  attempt()
  function attempt() {
    server.listen(port).once('error', function(err) {
      if (attempts-- > 0) return attempt(port++)
      throw err
    })
  }

  function sendScript(req, res) {
    res.setHeader('content-type', 'text/javascript')
    res.once('finish', process.exit)
    res.end(script)
  }

  function sendIndex(req, res) {
    res.setHeader('content-type', 'text/html')
    res.end(index)
  }
}
