<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">From JavaScript to Python: Basic Syntax</h2>
        <!-- <a name="chapter1"></a> -->
      </div>
      <div class="blogSubtitle">Dec. 21, 2017</div>
    </div>

    <div class="blogText">
      Python is sometimes touted as one of the easiest programming languages to learn. I think this is especially true
      when approaching Python from a background in JavaScript.
    </div>

    <div class="blogText">
      The first thing to know is that whereas JavaScript uses parentheses and braces to signify different code blocks,
      Python relies on white space and colons:
    </div>

    <div layout="row" layout-align="center center">
      <div layout="col">
        <pre><code layout layout-align="top center">      //JavaScript:
        function sayHello() {
          console.log("Hello world!");
        }
        sayHello()</code></pre>
      </div>
      <div layout="col">
        <pre><code layout layout-align="top center">      #Python:
        def sayHello():
          print "Hello world!"
        sayHello()</code></pre>
      </div>
    </div>

    <div class="blogText">
      Working with strings is similar in Python: instead of <span class="codeBit">str.length</span>, you use
      <span class="codeBit">len(str)</span>; instead of <span class="codeBit">str.charAt(0)</span>, you use
      <span class="codeBit">str[0]</span>. Python offers a nice feature, <i>string substitution</i>, which lets you put
      variables inside of strings (note that Python also allows us to dispense with semicolons and declaration keywords
      such as <span class="codeBit">var</span> or <span class="codeBit">let</span>):
    </div>

    <div layout="row" layout-align="center center">
      <div layout="col">
        <pre><code layout layout-align="top center">        //JavaScript:
          var x = 'phoenix';
          console.log('This bird is a ', x);</code></pre>
      </div>
      <div layout="col">
        <pre><code layout layout-align="top center">        #Python:
          x = 'phoenix'
          print 'This bird is a %s' % (x)</code></pre>
      </div>
    </div>

    <div class="blogText">
      Another nice aspect of Python is the strong parallelism between strings, lists (which are Python's version of
      arrays) and dictionaries (which are Python's version of objects). This parallelism shines through in the way
      Python treats <span class="codeBit">for</span> loops (this syntax might remind AngularJS users of
      <span class="codeBit">ng-repeat</span>):
    </div>

    <div layout="row" layout-align="center center">
      <div layout="col">
        <pre><code layout layout-align="top center">        //JavaScript:
          var myArray = [1, 'apple'];
          for (var i=0; i &lt; myArray.length;
            i++) {
              console.log(myArray[i]);
            }</code></pre>
      </div>
      <div layout="col">
        <pre><code layout layout-align="top center">      #Python:
        myString = 'capybara'
        myList = [1, 'apple', 7.2]
        myDictionary = {
          'shirt_color': 'black',
          'socks': ['blueSock', 'redSock'],
          'shoes_count': 2
        }
        for c in myString:
          print c
        for x in myList:
          print x
        for key in myDictionary:
          print key + ' ' + myDictionary[key]</code></pre>
      </div>
    </div>

    <div class="blogText">
      In order to replicate the JavaScript way of writing <span class="codeBit">for</span> loops in Python, we could
      awkwardly write
    </div>

    <pre><code  layout layout-align="center center">for i in range(len(myList)):
      print myList[i]</code></pre>

    <div class="blogText">
      Alternatively, we could write <span class="codeBit">enumerate(myList)</span> if we wanted to attach an index to
      each item in our list (we could even pass it a second argument to tell it which index to start counting at!).
    </div>

    <div class="blogText">
      Python also makes it easy to spin up tailor-made lists with a feature called <i>list comprehension</i>. To get a
      list of all multiples of 3 between 20 and 80, we could write
    </div>

    <pre><code layout layout-align="center center">myArray = [i for i in range(20, 80) if i % 3 == 0]
    print myArray</code></pre>

    <div class="blogText">
      One of my favorite things about Python is its readability. Instead of having to know, for example, that JavaScript
      arrays have a method called <span class="codeBit">.includes()</span> that checks whether an array contains a
      certain element, we can just write
    </div>

    <pre><code layout layout-align="center center">     if user_guess not in correct_guesses:
        print "Guess again!"</code></pre>

    <div class="blogText">
      Suppose we wanted to filter an array, purging it of all elements that fail to meet a certain condition. We can
      pass an anonymous function (written on the fly) to the array's <span>filter</span> method. Python lets us
      abbreviate this process with a <i>lambda</i> operator; similarly, ES6 offers arrow functions. Let's filter out all
      trees that don't begin with 'c':
    </div>

    <div layout="row" layout-align="center center">
      <div layout="col">
        <pre><code layout layout-align="top center">      //JavaScript:
          var trees = ['conifer', 'birch',
            'cedar'];
          var c_trees = trees.filter(
            function(tree, trees) {
              return tree.charAt(0) == 'c';
            });
      //Or, with an arrow function:
          var c_trees = trees.filter(() =>
            {return tree.charAt(0) == 'c'});</code></pre>
      </div>
      <div layout="col">
        <pre><code layout layout-align="top center">      #Python:
        trees = ['conifer', 'birch', 'cedar']
        c_trees = filter(
          lambda tree: tree[0] == 'c', trees)</code></pre>
      </div>
    </div>

    <div class="blogText">
      Class inheritance, too, works similarly across our two languages. We can declare a new class with a constructor
      (or <i>initialization</i>) function, add methods to our class, and then create an instance:
    </div>

    <div layout="row" layout-align="center center">
      <div layout="col">
        <pre><code layout layout-align="top center">        //JavaScript:
          class Dog {
            constructor(breed, color) {
              this.breed = breed;
              this.color = color;
            }
            bark() {
              console.log("Woof!");
            }
          }
          var tiny = new Dog("pug", "tan");
          tiny.bark();</code></pre>
      </div>
      <div layout="col">
        <pre><code layout layout-align="top center">      #Python:
        class Dog(object):
          def __init__(self, breed, color):
            self.breed = breed
            self.color = color
          def bark(self):
            print "Woof!"
        tiny = Dog("pug", "tan")
        tiny.bark()</code></pre>
      </div>
    </div>

    <div class="blogText">
      If we want one class (a succlass) to inherit all of the methods and properties associated with another object
      &mdash; say we want to create Pug and Greyhound and Mastiff succlasses &mdash; we can write
    </div>

    <div layout="row" layout-align="center center">
      <div layout="col">
        <pre><code layout layout-align="top center">        //JavaScript:
          class Pug extends Dog {
            ...
          }</code></pre>
      </div>
      <div layout="col">
        <pre><code layout layout-align="top center">        #Python:
          class Pug(Dog):
            ...</code></pre>
      </div>
    </div>

    <div class="blogText">
      There is plenty more to explore in Python &mdash; especially the plethora of libraries that are available for you
      to <span class="codeBit">import</span> into your project &mdash; but hopefully this has been enough to convince
      you that the transition from JavaScript into Python can be a smooth one.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post7 extends Vue {}
</script>
