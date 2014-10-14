
<section>
<section id="start" class="bright-background" data-background="img/javascript.png">
# An introduction to JavaScript

October 14th, 2014

By Arne Hassel

* Presentation: [megoth.github.io/jsintro](http://megoth.github.io/jsintro)
* Repo: [github.com/megoth/jsintro](http://github.com/megoth/jsintro)

</section>

<section id="overview">
## Overview

* Why learn JS?
* Examples of applications
* Coding
* Tips

</section>
</section>

<section>
<section id="why">
## Why learn JavaScript?

* Just another programming language?
    * How does it compare to other programming languages?
* (Isn't it really, really messy and unstructured!?)

</section>

<section id="standouts">
### Just another programming language?

* De facto programming language of the (front-end) web
    * Supported by all major browsers
    * (Is getting more popular on the back-end as well)

</section>

<section id="compared-to-java">
### Compared to Java

<table>
<thead>
<tr>
<th>Feature</th>
<th>[Java](http://en.wikipedia.org/wiki/Java_(programming_language))</th>
<th>[JavaScript](http://en.wikipedia.org/wiki/JavaScript)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Objects</td>
<td>Classes</td>
<td>Prototype-based</td>
</tr>
<tr>
<td>Interpretation of code</td>
<td>Imperative</td>
<td>Imperative</td>
</tr>
<tr>
<td>Functional</td>
<td>Yes</td>
<td>Supported-ish</td>
</tr>
<tr>
<td>Type system</td>
<td>Static, nominative</td>
<td>Dynamic</td>
</tr>
<tr>
<td>Browser support</td>
<td>Plug-in</td>
<td>Native</td>
</tr>
</tbody>
</table>

(Note: List is not exhaustive)

</section>

<section id="complexity">

### Complexity

* JS certainly has its quirks
    * Examples: [wtfjs.com](http://wtfjs.com), [Wat (video)](http://vimeo.com/94881698)
    * Cross-browser issues are a pain in the ass (check [Can I use...](http://caniuse.com/))
* But there are tons of resources
    * Check your code: [JSLint](http://www.jslint.com/), [JSHint](http://www.jshint.com/)
    * A large community (e.g. [Stack Overflow](http://stackoverflow.com/questions/tagged/javascript))
    * Testing tools (e.g. [Karma](http://karma-runner.github.io/]), [Buster](http://busterjs.org))
* And lots of frameworks
    * [jQuery](http://jquery.com), [AngularJS](https://angularjs.org/), [Ember.js](http://emberjs.com/), +++
    * (Some even have good documentation!)
* Also, several pre-compilation language options:
    * [CoffeeScript](http://coffeescript.org/), [TypeScript](http://www.typescriptlang.org/), [Dart](https://www.dartlang.org/)

</section>
</section>

<section>
<section id="applications">
## Examples of applications

* [Webpages/Apps](#webpages)
* [Games](#games)
* [Data Visualizations](#datavis)
* [Program robots](#robots)

</section>
<section id="webpages" class="bright-background" data-background="img/webpages.png">
### Webpages/Apps

* Tons of libraries
    * [jQuery](http://jquery.com/), [Moment.js](http://momentjs.com/), [+++](http://en.wikipedia.org/wiki/List_of_JavaScript_libraries)
* Tons of frameworks
    * [Angular](https://angularjs.org/), [Ember.js](http://emberjs.com/), [+++](http://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks)
* Several options for cross-device apps
    * [Cordova](http://cordova.apache.org/), [Ionic](http://ionicframework.com/), [+++](http://en.wikipedia.org/wiki/Multiple_phone_web-based_application_framework)
* Cutting-edge APIs available through [Polymer](https://www.polymer-project.org/)

</section>
<section id="games" class="bright-background" data-background="img/games.png">
### Games

* More and more games
    * [Case studies at HTML5 Rocks](http://www.html5rocks.com/en/gaming/), [HexGL](http://hexgl.bkcore.com/)
* Many game engines
    * [Unity](http://unity3d.com/), [Unreal Engine](https://www.unrealengine.com/), [Turbulenz](http://biz.turbulenz.com/turbulenz), [+++](http://en.wikipedia.org/wiki/List_of_game_engines)

</section>
<section id="datavis" class="bright-background" data-background="img/datavis.png">
### Data visualizations

* [D3.js](http://d3js.org/)
    * [Mike Bostock](http://bost.ocks.org/mike/)

</section>
<section id="robots" class="bright-background" data-background="img/robots.png">
### Robots!

* [Cylon.js](http://cylonjs.com/)
* [NodeBots](http://nodebots.io/)
* [NodeCopter](http://nodecopter.com/)

</section>
</section>

<section id="coding">
## Let's code!
</section>

<section>
<section id="syntax">
## Syntax

* Variables
* Functions
* Objects
* Arrays

</section>

<section id="variables">
### Variables

[Example](examples/variables.html)
</section>

<section id="functions">
### Functions

[Example](examples/functions.html)
</section>

<section id="objects">
### Objects

[Example](examples/objects.html)
</section>

<section id="arrays">
### Arrays (lists)

[Example](examples/arrays.html)
</section>
</section>

<section>
<section id="utilizing-js">
## Utilizing JS in webpages

* Inline code
* Script tags
* External files
* Progressive enhancement

</section>

<section id="inline">
### Inline code

[Example](examples/alert.html)
</section>

<section id="internal">
### Script tags

[Example](examples/confirm.html)
</section>

<section id="external">
### External files

[Example](examples/prompt.html)
</section>

<section id="enhanced">
### Progressive enhancement

[Example](examples/time.html)
</section>
</section>

<section>
<section id="clock">
## Lets create a clock!

* Using "pure" JS (-ish)
* Using jQuery
* Using AngularJS

</section>

<section id="clock-js" class="bright-background" data-background="img/javascript.png">
### Using "pure" JS (-ish)

[Example](examples/clock-js.html)
</section>

<section id="clock-jquery" class="bright-background" data-background="img/jquery.png">
### Using jQuery

[Example](examples/clock-jquery.html)
</section>

<section id="clock-angular" class="bright-background" data-background="img/angularjs.png">
### Using AngularJS

[Example](examples/clock-angular.html)
</section>
</section>

<section id="tips">
## Some final tips

* Developer Toolbar is your friend!
    * F12 on most browsers (&#8984;+&#8997;+I on OS X)
* Use the source!
    * Ctrl+U on most browsers (&#8984;+&#8997;+U on OS X)
* Learn [TDD](http://en.wikipedia.org/wiki/Test-driven_development)
    * [Zombie TDD](http://zombietdd.com/)
* Some mention-worthy
    * Webpages: [DailyJS](http://dailyjs.com/), [HTML5 Rocks](http://www.html5rocks.com/), [A List Apart](http://alistapart.com/)
    * Books: [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)

</section>

<section id="outro">
## Thank you!

* Twitter: [\@megoth](http://twitter.com/megoth)
* Webpage: [icanhasweb.net](http://icanhasweb.net)

</section>