/** 


Cómo diseñar un esquema JSON para definir la estructura de un objeto JSON
Introducción a JSON

La notación de objetos de JavaScript (JSON) es un formato ligero y fácil de usar que permite a humanos y máquinas leer, escribir, analizar y generar datos sin esfuerzo. 
JSON es independiente del lenguaje, aunque se originó en JavaScript.

¿Por qué es importante JSON?

    Legibilidad: JSON es legible para los humanos y fácil de entender, lo que lo hace simple para que desarrolladores y no desarrolladores comprendan datos estructurados.

    Intercambio de datos: Sirve como un formato universal de intercambio de datos. Aplicaciones y sistemas en diferentes lenguajes de programación pueden intercambiar datos fácilmente usando JSON.

    APIs web: La mayoría de las APIs web utilizan JSON como el formato de datos preferido para la comunicación entre servidores y clientes. Es un estándar para la transmisión de datos a través de solicitudes HTTP, lo que lo hace esencial para el desarrollo web.

    Almacenamiento de datos: JSON almacena configuraciones, estados de aplicaciones y datos estructurados en bases de datos o archivos debido a su simplicidad y facilidad de uso.

    Independiente del lenguaje: Casi cualquier lenguaje de programación puede usar JSON, extendiéndose más allá de JavaScript. Bibliotecas y analizadores que soportan varios lenguajes facilitan la interoperabilidad de datos entre sistemas, independientemente de su lenguaje de programación subyacente.

    Soporta varios tipos de datos: JSON almacena configuraciones, estados de aplicaciones y datos estructurados en bases de datos o archivos debido a su simplicidad y facilidad de uso.

    Fácil integración con JavaScript: JSON es una opción natural para JavaScript porque su sintaxis se asemeja a los literales de objeto de JavaScript, lo que facilita su uso en aplicaciones de JavaScript.

    Ligero: La simplicidad y sintaxis mínima de JSON contribuyen a su naturaleza ligera, haciéndolo eficiente para transmitir datos a través de redes, especialmente en escenarios donde el ancho de banda es una preocupación.

    Consideremos un ejemplo específico para explorar JSON usando el código proporcionado:

*/

// Define a JSON object representing information about a person
const personJSON = {
    "name": "Yesid Colmenares",
    "age": 24,
    "email": "yesid.colmenares@example.com",
    "address": {
        "street": "123 Main St",
        "city": "Bogotá",
        "country": "Colombia"
    },
    "hobbies": ["programming", "traveling", "cooking"],
    "isStudent": true,
    "workExperience": [
        {
            "company": "Tech Company A",
            "position": "Software Developer",
            "years": 2
        },
        {
            "company": "Tech Company B",
            "position": "Intern",
            "years": 1
        }
    ]
};


// Convert the JSON object to a string
const jsonString = JSON.stringify(personJSON);

console.log(jsonString);

/*
En este ejemplo:

    personJSON encapsula información sobre un individuo con campos como nombre, edad, correo electrónico, dirección, etiquetas, esEstudiante y experienciaLaboral.
    El campo de dirección es un objeto JSON embebido dentro del objeto JSON principal.
    El campo de etiquetas es un arreglo que contiene cadenas.
    esEstudiante es un valor booleano, y experienciaLaboral es nulo.
    JSON.stringify() convierte el objeto JavaScript personJSON en una cadena JSON.
    En JSON, encierra tanto las claves como los valores entre comillas dobles.

La salida resultante de console.log(jsonString) será una representación en cadena del objeto JSON:

*/

/*
JSON versus objeto de JavaScript

La notación de objeto de JavaScript (JSON) y los objetos de JavaScript tienen similitudes y diferencias clave.

JSON

    Formato: JSON opera como un formato basado en texto para el intercambio de datos. Es un formato estandarizado utilizado para transmitir y almacenar datos.
    Sintaxis: La sintaxis de JSON se adhiere estrictamente a un conjunto específico de reglas. Las claves deben estar entre comillas dobles, y los valores pueden ser cadenas, números, arreglos, objetos, booleanos o nulos.
    Uso: Principalmente utilizado para el intercambio de datos entre sistemas. Comúnmente utilizado en APIs, almacenamiento de datos y comunicación entre servidores y clientes.
    Representación de cadena: JSON tiene representación de cadena. Para utilizar JSON en JavaScript, se debe analizar en un objeto de JavaScript a través de JSON.parse().

Objetos de JavaScript:

    Nativos de JavaScript: Los objetos en JavaScript son un tipo de dato fundamental y almacenan colecciones de datos como pares clave-valor.
    Sintaxis: La sintaxis de los objetos de JavaScript es flexible. Las claves pueden ser cadenas o identificadores sin comillas, y los valores pueden ser de cualquier tipo de dato.
    Uso: Organiza y manipula datos dentro de aplicaciones de JavaScript, modelando entidades del mundo real o estructuras de datos dentro del lenguaje.
    Representación nativa: Los objetos son nativos de JavaScript. No se representan como cadenas y pueden ser creados, manipulados y accedidos directamente dentro del código de JavaScript.

JSON es un formato de datos estandarizado utilizado para el intercambio de datos. Al mismo tiempo, los objetos de JavaScript son una parte fundamental del lenguaje JavaScript utilizados para organizar y trabajar con datos dentro del código de JavaScript.

Profundicemos con la ayuda de un ejemplo.
*/

//Estructura JSON versus objeto de JavaScript

const json_String = '{"name":"Yesid Colmenares","age":24,"isStudent":true}';

const personObject = {
    name: "Juan Garcia",
    age: 30,
    isStudent: false
};

// Parsing JSON string to JavaScript object
const parsedJson = JSON.parse(json_String);

console.log("Parsed JSON Object:", parsedJson);
console.log(typeof parsedJson);

console.log(personObject); // Output: { name: 'Jane Smith', age: 25, isStudent: false }
console.log(typeof personObject);
