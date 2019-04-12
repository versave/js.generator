# js.generator
Electron based JavaScript file generator. Select all of your or built-in methods you would like to use in your project, and generate a vanilla or ES6+ ```main.js``` file based on your or the built-in template. The way it works is by going through both method folders, generating checkboxes, letting users select methods, and generating a file from the template, including all selected methods.

### Installation and Usage

#### Installation
Download the app, unzip it and run.

[Download for Windows](http://google.com)<br>
[Download for Mac](http://google.com)<br>
[Download for Linux](http://google.com)

#### Usage
Select a JavaScript version (Vanilla or ES6+), check all the methods you want, and generate the file in a chosen folder. The file name will be ```main.js```.

### Templates and Methods

#### Templates:
Under the ```assets/src/(vanilla/es6)/``` folder, a ```template.js``` file is located. This is the base file that all your methods will be placed in. The current built-in template files can be changed however you wish, but the ```METHODS``` string should be kept. It is the line after which your methods are placed, thus it has to remain in your template file.

Built in Example(es6 template file):
```
'use strict';

class App {
	constructor() {
          this.$doc = $(document);
          this.$win = $(window);
          this.$body = $('body');
          this.classes = {
              visible: 'visible',
              open: 'open',
              animated: 'animated',
              current: 'current',
              active: 'active'
          };
          this.breakpoints = {
              desktop: 1200,
              tablet: 1024,
              mobile: 768
          };
          this.sliders = [
              {
                  $container: $('.slider'),
                  $slides: $('.slider__slides'),
                  settings: {},
                  arrowControls: {
                      status: false,
                      $element: $('.none')
                  },
                  dotControls: {
                      status: false,
                      $element: $('.none')
                  },
                  htmlSlides: false
              }
          ];

          // this.method();
	};
    
    METHODS
};  

new App();
```
Everything here can be changed, removed, added, except ```METHODS```. You should keep this string somewhere in your template.

User edited example:
```
'use strict';

const doc = document;
const win = window;

METHODS
```

#### Methods:
Under the ```assets/src/(vanilla/es6)/methods/``` is where all JS snippets/methods are stored. These are all the methods that the user can include to be generated in their file. A variety of methods are built-in to be used, but users can change/remove them and also add their own method files.

### Built-in methods:
Starting with ```app.``` or ```this.```, depending on the JS used. ```this.```/ES6 methods will be used in the examples for simplicity.

* [Accordion](#accordion)
* [Cookies](#cookies)
* [Custom File Input](#custom-file-input)
* [Equalize Height](#equalize-height)
* [Field Quantity](#field-quantity)
* [Hide on Click](#hide-on-click)
* [Intro Parallax](#intro-parallax)
* [Is in Viewport](#is-in-viewport)
* [jQuery Class](#jquery-class)
* [jQuery Class Dropdown](#jquery-class-dropdown)
* [Simple Maps](#simple-maps)
* [Json Maps](#json-maps)
* [Limit Characters](#limit-characters)
* [Load More](#load-more)
* [Mousewheel Slick](#mousewheel-slick)
* [Responsive Slick](#responsive-slick)
* [Slick Sliders](#slick-sliders)
* [Scroll Animations](#scroll-animations)
* [Scrollspy](#scrollspy)
* [Sticky Header](#sticky-header)
* [Tabs](#tabs)
* [Window Events](#window-events)

#### Accordion
```this.accordion(container, trigger, closeSiblings);```

**container:** Main parent element.<br>
**trigger:** Trigger element, child of parent element. Toggles the class.<br>
**closeSiblings:** Boolean. Weather the parent siblings should be closed on opening of this accordion.

```
<div class="accordion">
	<div class="accordion__head"></div>
	
	<div class="accordion__body"></div>
</div>
```

```this.accordion('.accordion', '.accordion__head', false);```

#### Cookies
Control methods for browser cookies.

#### Custom File Input
```this.customFileInput($inpit);```<br>
Append an element on change with the file name as a child element of the input's parent.

#### Equalize Height
```this.equalizeHeight($elements, initAfter);```<br>
Equalize the height of same name elements above a breakpoint.

#### Field Quantity
```this.fieldQuantity();```<br>
Custom field qunatity controls. Requred classes **js-quantity**, **js-quantity__trigger**.

```
<div class="quantity js-quantity">
	<a href="#" class="js-quantity__trigger" data-number="-1"></a>

	<input type="text" class="field" name="field-1#" id="field-1#" value="01">

	<a href="#" class="js-quantity__trigger" data-number="+1"></a>
</div>
```

#### Hide on Click
```this.hideOnClick($element, $target, className);```<br>

**$element**: Container, clicking out of which will result in it being closed.<br>
**$target**: Element which will get its class removed on clicking out of the container.<br>
**className**: Class to be removed.

#### Intro Parallax
```this.introParallax($parallaxElement)```;

```
<div class="parallax">
	<div class="figure parallax__background js-parallax" style="background-image: "></div>
</div>
```
```
.parallax {
  position: relative;
}
.parallax__background {
  position: absolute;
  width: 100%;
  height: 120%;
 }
```
```this.introParallax($('.js-parallax'))```;

#### Is In Viewport
```this.isInViewport($element, offset = 0);```<br>
Check if an element is in viewport.

#### jQuery Class
```this.jqClass($btn);```<br>
Toggle, add, remove classes. Controlled by data attributes.

```<a href="#" class="jq-class" data-target=".element" data-class="blue" data-traverse="parent">Button</a>```<br>

**data-traverse**: Optional. parent(Manipulate class of a parent element). sibling(manipulate class of siblings). Find(data-traverse="find~.container". Search for target as a child of the provided container.<br>
**data-type**: Optional, default is toggle. Others are `add`, `remove`.<br>
**data-target**: Mandatory. Target element.<br>
**data-class**: Mandatory. Class name.

#### jQuery Class Dropdown
```this.locateDropdown($dropdownElement);```<br>

Addition to the jQuery Class method. Find dropdowns in navigations. This method should be called after the jQuery class one.

```
<nav class="nav nav-dd">
	<ul>
		<li>
			<a href="#"></a>

			<div class="dropdown">
				<ul></ul>
			</div>
		</li>

		<li>
			<a href="#"></a>
		</li>

		<li>
			<a href="#"></a>
		</li>
	</ul>
</nav>
```
```this.locateDropdown($('.nav-dd');```

#### Simple Maps
```this.simpleMaps($mapElement);```<br>
Create a google map with simple options and one marker. Check usage in method's file.

#### Json Maps
```this.jsonMaps($map);```<br>
Generate a google map through a json file. You should edit this method when using it, so it can fit your json file.

```<div class="map" data-mapdata="path/to/mapdata.json"></div>```<br>
```this.jsonMaps($('.map'));```

#### Limit Characters
```this.limitCharacters($element, maxLenght, endString);```<br>
Limit the string character lenght of an element. Also includes an end string which can be added to the end of the characters, like a '...'.

#### Load More
```this.loadMore(parent, trigger);```<br>
Load html via ajax in container. The appending of files on click works as long as a trigger(html exmaple down) element is included in the loaded file.

**parent**: Parent of trigger element.

```
<div class=".container"></div>

<a href="path/to/filename.html" class="load-more" data-container=".container"></a>
```

#### Mousewheel Slick
```this.mousewheelSlick(slider, slides);```<br>
Control a slick slider with your mousewheel.

#### Responsive Slick
```this.responsiveSlick($slides, activeAfter, options);```<br>
Turn an element to a slider after a breakpoint.<br>

**activeAfter**: Integer.<br>
**options**: Object. Slick options.

#### Slick Sliders
```this.slickSliders(sliders);```<br>
Control all of your slick sliders through an array of sliders objects.

```
this.sliders = [
            {
                $container: $('.slider'),
                $slides: $('.slider__slides'),
                settings: {},
                arrowControls: {
                    status: false,
                    $element: $('.none')
                },
                dotControls: {
                    status: false,
                    $element: $('.none')
                },
                htmlSlides: false
            }
        ];
```

**arrowControls**: If true, append slick arrows to an element child of the slider.<br>
**dotControls**: If true, append slick dots to an element child of the slider.<br>
**htmlSlides**: If true, control sliders slides to show by a data attribute on the slider__slides. data-slides="5".

#### Scroll Animations
```this.scrollAnimations($element);```<br>
Add a class to an element if it is in the viewport.

#### Scrollspy
```this.scrollSpy($trigger);```<br>
Options can be checked in the method's file. They are pretty self explanatory.<br>

```<a href="#" class="js-scrollspy" data-target="#element"></a>```

#### Sticky Header
```this.stickyHeader($header);```<br>
Add a class to page header, or any other element, by scrolling down, and remove it by scrolling up.

#### Tabs
```this.tabs($tabs);```<br>
Simple tab control. You can tweak the method to match your HTML.

```
<div class="tabs js-tabs" data-tab-trigger=".tabs__head ul a">
	<div class="tabs__head">
		<ul>
			<li>
				<a href="#" data-target="#tab-1"></a>
			</li>
		</ul>
	</div>
	
	<div class="tabs__body">
		<div id="tab-1" class="tab">
	</div>
</div>
```

#### Window Events
```this.windowEvents();```<br>
Add a dynamic window scrolltop position and act as a method for simple window events.
