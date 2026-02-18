
// Without addEventListener, we can only have one event handler for an element. If we assign a new function to the onclick property, it will overwrite the previous one. This means that if we have multiple functions that need to be executed when the button is clicked, only the last one assigned will be executed.
function handleButtonClick () {
    alert('Button was clicked!');
}

// With addEventListener, we can attach multiple event handlers to the same event on the same element. Each time we call addEventListener, it adds a new handler without overwriting the existing ones. This allows us to have multiple functions that will be executed when the button is clicked.
const button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick);

// now we will explain how to use different event types with addEventListener

const moveArea = document.getElementById('moveArea');

moveArea.addEventListener('mousemove', function(event){
    console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
});

const keyInput = document.getElementById('keyInput');

keyInput.addEventListener('keydown', function(event){
    console.log(`Key pressed: ${event.key}`);
});

keyInput.addEventListener('keyup', function(event){
    console.log(`Key released: ${event.key}`);
});

const pressInput = document.getElementById('pressInput');

pressInput.addEventListener('keypress', function(event){
    console.log(`Key pressed (keypress): ${event.key}`);
});

const submitForm = document.getElementById('myForm');

submitForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the form from submitting
    console.log('Form submitted!');
});

const textInput = document.getElementById('textInput');

textInput.addEventListener('focus', function(event){
    console.log('Text input focused');
});

textInput.addEventListener('blur', function(event){
    console.log('Text input blurred');
});

window.addEventListener('load', function(event){
    console.log('Window loaded');
});

window.addEventListener('resize', function(event){
    console.log('Window resized');
});

window.addEventListener('scroll', function(event){
    console.log('Window scrolled');
});

