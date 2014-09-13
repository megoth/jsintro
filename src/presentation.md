
<section id="start">
![JavaScript logo](img/javascript.png)
</section>

<section id="intro">
# An introduction to JavaScript

**NOT COMPLETE**

October 14th, 2014

By Arne Hassel

* [\@megoth](http://twitter.com/megoth)
* [icanhasweb.net](http://icanhasweb.net)

</section>

<section id="why">
## Why learn JavaScript?

* Just another programming language?
* (Isn't it really, really messy and unstructured!?)

</section>

<section id="because">
## JavaScript is **AWESOME**, ok?

* De facto programming language of the front-end web
    * Supported by all major browsers
    * (Is getting more popular on the back-end as well)
* Yeah, it's unstructured, deal with it!
    * (No, not really, there are options)

</section>

<section>
<section id="applications">
## You can build **a lot** of stuff

* [Webpages](#webpages)
* [Games](#games)
* [Data Visualizations](#datavis)
* [Program robos](#robots)

</section>
<section id="webpages">
![Example of webpages](img/webpages.png)
</section>
<section id="games">
![Example of games](img/games.png)
</section>
<section id="datavis">
![Example of data visualizations](img/datavis.png)
</section>
<section id="robots">
![Example of robots](img/robots.png)
</section>
</section>

<section>
<section id="what-is-javascript">
## So what **is** JavaScript?

* Created by [Brendan Eich](https://brendaneich.com/) as part of the [browser Netscape](http://en.wikipedia.org/wiki/Netscape_(web_browser)) in 1995
* Standardized as [ECMAScript](http://www.ecmascript.org/)
* Continues to be developed (e.g. [W3C](http://www.w3.org/standards/webdesign/script), [WHATWG](http://www.whatwg.org/))

</section>
<section id="features">
## Features

* Scripting (evaluated run-time)
* Object-oriented (-ish) and prototype-based
    * Supports inheritance (kinda)
* Functional (-ish)
    * Funtions are first-class, i.e. objects

</section>
<section id="confused">
## Confused?

Lets do some coding!
</section>
</section>

<section id="variables">
## Variables

    var a;
    var b = 42;
    var c = "forty two";
</section>

<section id="functions">
## Functions

    function sumA (a, b) { return a + b; }
    var sumB = function (a, b) { return a + b; };
    var sumC = new Function("a", "b", "return a + b;");

    // how to use them
    sumA(4, 5);
    sumB.call({}, 4, 5);
    sumC.apply({}, [4, 5]);
</section>

<section id="objects">
## Objects

    var objectA = { a: 42 };
    var objectB = new Object();
    objectB.a = 42;
    var constructor = new function (a) { this.a = a; };
    var objectC = new constructor(42);
</section>

<section id="arrays">
## Arrays (lists)

    var arrayA = [1, 2];
    var arrayB = new Array(1, 2);
    arrayB.push(3); // arrayB is [1, 2, 3]
    arrayB.pop(); // returns 3
    arrayB.unshift(3); // arrayB is [3, 1, 2]
    arrayB.shift() // returns 3
</section>

<section id="inline">
## Inline code

[Example](examples/alert.html)
</section>

<section id="internal">
## Code in script tags

[Example](examples/confirm.html)
</section>

<section id="external">
## Code in external files

[Example](examples/prompt.html)
</section>

<section id="enhanced">
## Code completely disentangled from HTML

[Example](examples/time.html)
</section>