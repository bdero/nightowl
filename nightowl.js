var doc = "\
Usage:\
  nightowl.js shell\
"
var docopt = require('docopt').docopt
var args = docopt(doc, { version: '0.0.1' })

if (args.shell) {
  run_shell();
}

function run_shell() {
  var shell = require('shell');

  var app = shell();
  app.configure(function() {
    app.use(shell.history({ shell: app }));
    app.use(shell.completer({ shell: app }));
    app.use(shell.help({ shell: app, instruction: true }));
  });
}
