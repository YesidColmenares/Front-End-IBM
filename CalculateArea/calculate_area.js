let length;
let width;

function calculateArea(){
    this.length = parseFloat(document.getElementById("length").value);
    this.width = parseFloat(document.getElementById("width").value);

    let area = this.length * this.width;

    document.getElementById('result').innerText = `The are of the rectangle is: ${area}`;
}

calculateArea();


