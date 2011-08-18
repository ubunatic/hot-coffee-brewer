hcbrew = require("./.hotcoffee/tools/hotcoffee")   // load hcb
coffee = require("./.hotcoffee/tools/coffee")      // load cake

hcbrew.buildAll()                                  // build hcb and project
// hcbrew.test("./src/test.co")                       // run project tests

hctest = require("./.hotcoffee/tmp_tastecoffee")   // hcb selftest - You may remove this

