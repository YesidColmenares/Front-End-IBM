// 1. Selecting by Class:

const elementsByClass = document.querySelectorAll('.highlighted');

// Log the selected elements to the console
console.log(elementsByClass);

// OUTPUT: NodeList [ <p.highlighted>, <p.highlighted> ]
//------------------------------------------------------

//2. Selecting by ID:

// Select the element with the ID "my-paragraph" using querySelectorAll
const elementByID = document.querySelectorAll('#my-paragraph');
// Log the selected element to the console
console.log(elementByID);

// OUTPUT:     NodeList [ <p#my-paragraph> ]
//-----------------------------------------------------

// 3. Selecting by Tag Name:

const elementsByTag = document.querySelectorAll('p');
// Log the selected elements to the console
console.log(elementsByTag);

// OUTPUT:     NodeList(8) [ p.highlighted, p.highlighted, p, p#my-paragraph, p, p, p, p.highlighted ]
//----------------------------------------------------

// 4. Accessing classList

const element = document.getElementById('myElement');
const classes = element.classList;

//This method adds one or more classes to the element.
element.classList.add('newClass');

//Removes one or more classes from the element.
element.classList.remove('oldClass');

//Toggles a class. If the class exists, it is removed; otherwise, it is added. If the second parameter is true, the class is added; if false, the class is removed.
element.classList.toggle('active');

//Checks if a class is present on the element. Returns true if the class exists; otherwise, it is false.
if (element.classList.contains('special')) {
    // Do something special
}

//Replaces a class with another class.
element.classList.replace('oldClass', 'newClass');

// Returns the class name at the specified index.
const firstClass = element.classList.item(0);

//Returns a string representing the element's classes.
const classString = element.classList.toString();

// 

