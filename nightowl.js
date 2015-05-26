var doc = "\
Usage:\
  nightowl.js shell\
"
var docopt = require('docopt').docopt

console.log(
  docopt(doc, { version: '0.0.1' })
)
