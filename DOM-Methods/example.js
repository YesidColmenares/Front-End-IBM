// Getting the Paragraph Element
const paragraph = document.getElementById('myParagraph');

// Adding a Class
paragraph.classList.add('italic');

// Removing a Class
paragraph.classList.remove('highlight');

// Toggling a Class
paragraph.classList.toggle('underline', true);

//Checking if a Class Exists
const hasItalicClass = paragraph.classList.contains('italic');
console.log(`Has italic class: ${hasItalicClass}`);

// Replacing a Class with a Delay
setTimeout(() => {
    paragraph.classList.replace('underline', 'strike');
    
    // Accessing classes as a string
    const classString = paragraph.classList.toString();
    console.log(`Current classes: ${classString}`);
}, 2000); // Delay for 2 seconds



