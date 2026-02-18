// Declare a variable named xhr to create a new XMLHttpRequest object as follows in health_article.js file:
var xhr = new XMLHttpRequest();

var url = './health_article.json';

/*
El método open configura una solicitud XHR con los siguientes parámetros:

    'GET': Especifica el método HTTP utilizado para la solicitud (en este caso, una solicitud GET).
    URL: Representa la URL desde donde obtendrás los datos.
    True: Indica si la solicitud es asíncrona (true) o síncrona (false). En este caso, está configurado como true para operación asíncrona, permitiendo que otros scripts se ejecuten mientras se procesa la solicitud.

*/
xhr.open('GET', url, true);

//En este paso, necesitas informar al objeto XMLHttpRequest que la respuesta esperada del servidor debe estar en formato JSON.
xhr.responseType = 'json';

//Paso 6: Manejo del evento 'onload'
/*

    var articles = xhr.response.articles; para recuperar el array de artículos de la respuesta JSON.
    var articlesDiv = document.getElementById('articles'); para recuperar el elemento HTML con el ID 
    'articles' donde se mostrará el contenido obtenido.
*/


xhr.onload = function () {

    if (xhr.status === 200) {

        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function (article) {

            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Formas de Lograrlo:';

            var waysList = document.createElement('ul');

            article.ways_to_achieve.forEach(function (way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Beneficios:';

            var benefitsList = document.createElement('ul');

            article.benefits.forEach(function (benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });

    } else {
        console.error('Error al cargar el JSON:', xhr.status);
    }
};

xhr.send();


/*
Resumen

    Configuración de la solicitud fetch:

        Has creado un objeto xhr para obtener datos y definir dónde están presentes.

        Has solicitado datos usando xhr.open('GET', url, true); para prepararte a recibir datos en un formato específico (xhr.responseType = 'json';).

    Uso de los datos recibidos:
        Has creado la función xhr.onload = function() { ... } para recuperar información específica como artículos, y decidiste dónde mostrarlos en la página web usando document.getElementById('articles').

    Juntándolo todo:

        Para cada artículo, creaste partes de la página web como descripciones de títulos y las llenaste con datos.

        Luego, obtuviste estas partes en la página web y enviaste la solicitud para obtener los datos xhr.send();.

*/