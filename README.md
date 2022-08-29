# Algorithm - Convert HTML Entities

This challenge requires a function to be created, the function takes in a string. The function needs to return a copy of that string with its symbols replaced by the corresponding HTMl entity.

Examples:

- convertHTML("Hamburgers < Pizza < Tacos")
- returns: Hamburgers &lt; Pizza &lt; Tacos

I have also created test cases using jest, as following TDD helps process the logic and ensure that the implementation continues to work when refactored/changed. This also helps by breaking down the challenge into the required acceptance criteria.

## What I learned

The main thing that I was able to implement that I learned more about was using objects as dictionaries to reference the corresponding HTML entity code. Utilizing the object dictionary in two different solutions and once again learning more about RegExp and how powerful they can be!

## Documentation

Below is a list of methods I used with links to the relevant MDN page. Some of these were known prior and some were learned through documentation searching during the challenge.

- [String.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [String.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## Acknowledgments

This algorithm challenge was provided by [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures). Although they do provide some happy path test cases, I wanted to keep practising using Jest.

## Dev Dependencies

- Jest was used for creating test cases

## Installation

To see the code and tests in action follow the below terminal commands:

Ensure that you have [Git](https://git-scm.com/) installed. If not you can just download the files to your computer.

```
git clone (name of repo url/ssh here)
```

```
cd (project-name here)
```

```
npm install
```

```
npm test
```
