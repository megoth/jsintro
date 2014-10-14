jsintro
=======

An introduction to JavaScript, to be held at Ifi October 14th, 2014.

The presentation is available [here](http://megoth.github.io/jsintro).

View presentation
-----------------

If you want to view the presentation on your own computer, clone this repository and run `grunt server`. It should now be served on port 8282.

Make it your own
----------------

As a setup to build your own presentation from the source files, ensure that you've installed [node.js](http://nodejs.org/), [Bower](http://bower.io/), [Compass](http://compass-style.org/), [Pandoc](http://johnmacfarlane.net/pandoc/) and [Grunt](http://gruntjs.com/). Then run the following commands:

    npm install
    bower install
    gem install sassy-buttons
    grunt

Once you've done this, you can ease the build process by running `grunt watch`. This builds all necessary files every time you save a required file.