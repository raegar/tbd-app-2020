# Coding Standards:
## ESLint Plugin:
To ensure easier enforcing of these standards, the VSCode ESLint plugin (the one by Microsoft in the Extensions section with the orange icon titled "ESLint" is the one we used but others probably work) should be installed as it will highlight the errors, which you can often fix by moving the cursor to the red underlines and pressing Ctrl+. (as in Ctrl and the . key) and selecting the appropriate fix.

If you run into the “too long line” error and have issues resolving it, remember that most javascript lines comma separated or with +s between can be put on separate lines.

```javascript
const stringThing = "Some really long text that goes on" + 
" for a really really really really really " +
"long time";

const result = a.really.long.function.method.call.that.somehow.goes.over.one
.hundred.thirty.characters.that.goes.onto.a.new.line.like.so();

[
	"An",
	"Array",
	"That",
	"Goes",
	"Multiple",
	"Lines"
];

{
	a: "Multiline",
	javascriptObject: "so",
	esLint: "stops",
	moaning: "full stop."
}
```


Do note that this won’t catch every violation but if ESLint has more features or you’re more experienced with it feel free to add the ones that are missing. The current rules can be found in package.json.

## Javascript:
### Naming conventions:
Global variables (such as Styled Components) are PascalCase, whereas local variables are to be camelCase. Functions that are not a React component should be camelCase, but React component functions and classes should be PascalCase.

#### OK:
```javascript
const GlobalVariable = 42;

function func() {
	let localVariable = 64;
}

function ReactThing(props) {

}

class ClassThing {
	constructor() {
		this.localVariable = 3141592;
	}
}
```

#### Not OK:
```javascript
const globalVariable = 42;

function Func() {
	let LocalVariable = 64;
}

function reactThing(props) {

}

class classThing {
	constructor() {
		this.local_variable = 3141592;
	}
}
```


### Spacing/Indentation:
Use Tabs, not spaces for indentation. In Javascript (unless you are adding JSX, such as in the return statement of components, which should be treated as HTML except for bits between the curly braces (these: {})) there should be a space before and after assignment operators (=, +, -, *, / etc.) and conditional operators (>, <, ==, != etc.). Additionally, there should be a space before a curly brace unless it is the start of a newline.

#### OK:
```javascript
const x = 9;
const y = x + 4;

if (x == 9) {

}

if (x >= 8) {

}
```

#### NOT OK:
```javascript
const x=9;
const y=x+4;

if (x==9){

 }

if (x>=8){

 }
```

### Braces:
Opening brace always goes on the same line.

```javascript
E.g
if (blah) {

}
```

#### NOT:
```javascript
if (blah)
{

}
```

Else statements also go on the same line as the previous ending brace, and, keeping with the previous rule, have the opening brace immediately after.
E.g:
```javascript
if (thingy) {

} else {

}
if (thingy) {
    blah
} else if (blah) {

}
```


#### NOT:

```javascript
}
else
{

}

} else
{

}
```

### Semicolons:
Put semicolons on the end of every line where possible, including imports. The exception is inside inlined methods, where it is ok to not have one, unless there is more than one statement, but if you put it there anyways that’s fine.

#### OK:
```javascript
import module from 'place';
import module2 from 'place2';

statement;
statement2;

() => {statement3}
() => {statement3;}
() => {statement3; statement4;}

() => {
	statement3;
}
```

#### NOT OK:
```javascript
import module from 'place'
import module2 from 'place2'

statement
statement2

() => {statement3; statement4}

() => {
	statement3
}
```


### Comparison Operators:
Always use === and !== when comparing anything, unless you explicitly need the weirdness of == (e.g if you want to check and see if ‘1’ and 1 are equal for some reason). This is because == has weirdness, such as being true in the case of (1 == '1') among other things. This does not affect the other comparison operators, only the equals operators.

#### OK:
```javascript
if (x === y) {
	blah;
}

if (x !== y) {
	blah;
}

if (x === 1) {
	blah;
}
```

#### NOT OK:
```javascript
if (x == y) {
	blah;
}

if (x != y) {
	blah;
}

if (x == 1) {
	blah;
}
```

### Testing multiple values:
Use switch statements if you need to test if a value is equal to multiple different values and do something different each, as it is neater looking and results in less repeating of code.

#### OK:
```javascript
switch (blah) {
	case 1:
		yadayada;
		break;
	case 2:
		yadayada;
		break;
	default:
		yadayada;
		break;
}
```




#### NOT OK (ew ew ew ew):
```javascript
if (blah === 1) {
	yadayada;
} else if (blah === 2) {
	yadayada;
}

if (blah === 1) {
	yadayada;
} 
if (blah === 2) {
	yadayada;
}
```

### Comments:
`//` (double forward slash) should always be used for short comments (though in JSX you have to do the `{/* */}` approach so this doesn’t apply there), but for anything longer than two somewhat lengthy lines, the `/* */` comments or similar should be used.

Documentation should have proper capitalisation, but brief programming related comments can be whatever as long as they are accurate and are understandable to English speakers. The occasional joke comment is fine as long as it’s not offensive, but don’t go overboard and keep it relevant (no longer than one short line). This is a software project, not a joke book. If leaving a todo comment, preface it with TODO: so that we can Ctrl+F with ‘TODO:’ to find unfinished comments later.

#### Good:
```javascript
//This is a comment.
//this is a comment

//BAD BAD BAD EW EW

//do this
//then this
//and finally this

//this code is like my life

//TODO: become god of this codebase

/* In order to properly space the component out, we have to do <this>, <this> and <this> and then apply the Fourier Transform. I don’t know why the Fourier Transform is involved, ask John Smith for more details as he implemented it. */

/* This function takes in parameter x and y, and returns result z. */
```

#### Bad:
```javascript
/*This is a comment.*/
/*this is a comment*/

//According to all the known laws of aviation, there is no way a bee 
//should be able to fly. Its tiny wings are simply too short to get its 
//fat little body off of the ground. Of course, it flies 
//anyways, because it doesn't care what humans think is possible.

//why did the chicken cross the road? To get to the other side
//lol potatoes I'm so random haha xd

//[EXPUNGED]

/* this function takes in parameter x and y and returns result z */

//to-do become god of this codebase
```

### Long lines/function calls:
If a line of code stretches beyond 130 characters, and it can be made to span over multiple lines (it almost always can unless you do something completely insane with your naming), do so. This makes reading code much easier. Additionally, if a function call needs more than 4 parameters, it is preferable to spread it over multiple lines.

For example:
```javascript
function funcName(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {}
```

Should become:
```javascript
function funcName(param1,
	param2,
	param3,
	param4,
	...
      param11
) {}
```


## HTML and JSX:
### HTML Tagging:
There should be no space between the tag, equals and the value. If you want to know why we do it like this in HTML and not in Javascript, ask the web development community.

#### OK:
```html
<p style="blah: blah;">blah</p>
```

#### NOT OK:
```html
<p style = "blah: blah;">blah</p>
```


NOTE: Styling should be kept in the CSS where possible.
### Long Elements:
In the case of long elements such as below, they should be spread out over a few lines.
```javascript
<Component heading={currNews.heading} paragraph={currNews.paragraph} date={currNews.date} image={currNews.image} alt={currNews.alt} isRed={isNewsRed} onDelete={() => {this.deletedNewsIndexes.push(i); this.setState({});}} key={i}/>
```

Should become:
```javascript
<Component 
	heading={currNews.heading} 
	paragraph={currNews.paragraph}
	date={currNews.date} 
	image={currNews.image} 
	alt={currNews.alt} 
	isRed={isNewsRed} 
	onDelete={() => {this.deletedNewsIndexes.push(i); this.setState({});}}
	key={i}
/>
```

## File Structure:
### Components:
Each component should have its own folder under src/components, even if the file is entirely on its own. This is because it will otherwise sometimes appear to look as if it is under a different folder in VSCode if one is programming on auto pilot, causing confusion later. It also saves having to move that file into a folder if you need to add another file to that component in its folder later.

#### OK:
```
src/components/
		   ComponentName/
				        ComponentName.js

src/components/
		   ComponentName/
				        ComponentName.js
				        OtherFile.js
```

#### NOT OK:
```
src/Components/
		   ComponentName.js
```

## Components/Pages:
Components should be function based where possible (as the React community at large are shifting to them as of the introduction of React Hooks), but if there is a good technical reason (no, "because the tutorial I'm using uses class based" is not a good technical reason, it isn't that hard to convert class based to function based in the majority of cases) to make them class components then there’s no problem making them class based. Pages should also be function based where possible, but, again, if there’s a good technical reason to make it a class based page, go ahead.

Components should not have any more than the minimum spacing styling to make them work as standaloney as possible (though of course things like styling for common components to match the site's themes are fine). Leave the margin spacing to the classes. Obviously, this doesn’t apply to actual visual styling (colour, font etc.). This makes sure that the component is reusable on as many pages as possible without having to entirely restyle it. Obviously, padding (inside) is fair game, though.

E.g
```javascript
function Component({prop1, prop2, ...props}) {
	return (
		<OtherComponent>
			blah...
		</OtherComponent>
	);
}
```

If using a class component, `method = () => {` is preferable to doing the binding method in the constructor as it saves space in the constructor for actually important stuff and cuts down on unnecessary code (you otherwise need to do some nonsense with `.bind()` in the constructor).