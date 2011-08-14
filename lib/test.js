(function() {
  var say, test1, test2;
  var __slice = Array.prototype.slice;
  say = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log.apply(console, args);
  };
  test1 = (function() {
    var World, earth, thera;
    say('---------------------------------------------------\ntest.co: "Add your tests to src/test.co!"\n---------------------------------------------------');
    say("Starting tests...\n");
    World = require("./world.js").World;
    earth = new World("Earth");
    thera = new World("Thera");
    say(earth.getInfo());
    say(thera.getInfo());
    say('---------------------------------------------------\nStarting async spinning...	\n\n');
    earth.spin(10);
    thera.spin(10);
    return setTimeout((function() {
      return test2();
    }), 100);
  })();
  test2 = function() {
    return say('			\nWaited 100ms Worlds to finish spinning.\n---------------------------------------------------\nTesting finished!');
  };
}).call(this);
