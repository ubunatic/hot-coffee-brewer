(function() {
  var TurnCode, World;
  var __slice = Array.prototype.slice;
  World = (function() {
    var turn, version, worldCount;
    version = "v0.1";
    worldCount = 0;
    function World(name) {
      this.name = name;
      this.started = Date.now();
      this.number = worldCount++;
    }
    World.prototype.say = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return console.log.apply(console, args);
    };
    World.prototype.cry = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return console.error.apply(console, args);
    };
    World.prototype.getInfo = function() {
      var age;
      age = Date.now() - this.started;
      return "I am " + this.name + ", world no." + this.number + ". My World version is " + version + ".";
    };
    World.prototype.spin = function(rounds) {
      var _world;
      if (rounds !== 0) {
        rounds--;
        _world = this;
        turn(this, function(result) {
          if (result === TurnCode.OK) {
            return _world.spin(rounds);
          } else {
            return _world.cry("World " + _world.name + ": Aaargh! I can't spin!");
          }
        });
      } else {
        this.say("World " + this.name + ": Hui! I feel dizzy");
      }
    };
    turn = function(world, callback) {
      world.say("World " + world.name + ": I am spinning!");
      if (Math.random() > 0.1) {
        process.nextTick(function() {
          return callback(TurnCode.OK);
        });
      } else {
        process.nextTick(function() {
          return callback(TurnCode.FAILED);
        });
      }
    };
    return World;
  })();
  TurnCode = {
    OK: "Turn OK.",
    FAILED: "Turn failed!"
  };
  module.exports.TurnCode = TurnCode;
  module.exports.World = World;
}).call(this);
