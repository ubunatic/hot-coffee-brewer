/*  Copyright (c) 2011 Uwe Jugel
	
	Hot Coffee Brewer
	=================
	
	this file is hotcoffee.js a part of the Hot Coffee Brewer
	
	- starts the "Hot Coffee Brewer"
	- is a bootstrapper CoffeeScript.compile
	- compiles and runs the actual Hot Coffee Brewer script (compile.co)
	- runs in node.js and has no other dependencies
	- does not require npm or coffee commandline tools, and therefore
	- runs on Linux AND Windows
	
	Usage: call buildAll() or test(<file>) in your build script
	
	https://github.com/ubunatic/Hot-Coffee-Brewer
	
	
	Attention: 'require' works differently than 'readFileSync' etc.
	           take care for correct path names if you modify anything
*/

coffee = require("./coffee.js").CoffeeScript
fs = require("fs")

//compile the build script
buildDirFound = false
try{ buildDirFound = fs.statSync("./.hotcoffee").isDirectory() }
catch (error){ console.log(
	"ERROR: In hotcoffee.js: '.hotcoffee' dir not found! Start Hot Coffee Brewer\n"+
	"from your project's root dir, which should look like this:\n"+
	"  ./build.js                        # starts the build (usage: 'node build.js')\n"+
	"  ./.hotcoffee                      # hidden dir for the build tools\n"+
	"  ./.hotcoffee/tools/hotcoffee.js   # Hot Coffee bootstrapper\n"+
	"  ./.hotcoffee/tools/coffee.js      # CoffeeScript module\n"+
	"  ./.hotcoffee/tools/compile.co     # Hot Coffee build functions\n"+
	"  ./.hotcoffee/tools/cotest.co      # Hot Coffee test functions\n"+
	"  ./src                             # source dir for your .co sources\n"+
	"  ./lib                             # target dir for compiled .js files\n\n"
);}

if (buildDirFound) {
	// build coffee build tools
	// read tools from .hotcoffee/tools
	// save js-files to .hotcoffee/.tmp
	cofile = fs.readFileSync("./.hotcoffee/tools/compile.co", "UTF8")
	jsfile = coffee.compile( cofile )
	fs.writeFileSync("./.hotcoffee/tmp_compile.js", jsfile )
	cofile = fs.readFileSync("./.hotcoffee/tools/cotest.co", "UTF8")
	jsfile = coffee.compile( cofile )
	fs.writeFileSync("./.hotcoffee/tmp_cotest.js", jsfile )
}

//export the build functions
compile = require("../tmp_compile.js")
module.exports.buildAll = function() { compile.buildAll() }
module.exports.test = function(file) { compile.test(file) }

