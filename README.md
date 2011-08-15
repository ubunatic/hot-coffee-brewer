Copyright (c) 2011 Uwe Jugel

Licensed under the MIT license (see LICENSE file)


Hot Coffee Brewer
=================

Hot Coffee Brewer can compile your CoffeeScript files using node.js.
It uses only node.js and coffee.js has no other dependencies.
Therefore it uses CoffeeScript.compile provides by coffee.js

Hot Coffee Brewer runs on Linux AND Windows!
Fork me on GitHub: https://github.com/ubunatic/Hot-Coffee-Brewer


Project Contents
----------------

Hot Coffee Brewer comprises the following parts:

		.hotcoffee/tools/hotcoffee.js:    # compiles 'compile.co' and 'cotest.co'
		.hotcoffee/tools/compile.co:      # compiles *.co in ./src to *.js in ./lib
		.hotcoffee/tools/cotest.co:       # runs tests on compiled JavaScript files

		build.js:                         # sample buildfile calls hotcoffee.js
		src/world.co                      # sample CoffeeScript class 'World'
		src/test.co                       # sample CoffeeScript file to test 'World'


Hot Coffee Usage
----------------

1.	Test if the sample files compile and the test runs through:

		node build.js

2.	Create your own build.js, create ./src and ./lib, copy hotcoffee, and run:

		mkdir ~/yourproject/src
		mkdir ~/yourproject/lib
		cp .hotcoffee ~/yourproject
		cd ~/yourproject
		node build.js

This will compile all .co files in your ./src dir to .js files in ./lib
and run all test files as specified in your build.js.

Hot Coffee Issues
-----------------
Many things are hard coded. You may want to change some of the files.

* Issue 1: compiles only .co files (no .coffee files)
* Issue 2: filters error output and reformats is to better serve Gedit (Linux)
* Issue 3: no error grepping for other editors/IDEs



