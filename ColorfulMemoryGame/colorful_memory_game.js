const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

/*

    arreglo colors: Este arreglo contiene valores de colores distintos en cadenas, representando los colores para las cartas en el juego de memoria. Estos colores crean pares para el juego.

    arreglo cards: Inicializado al mezclar y unir el arreglo ‘colors’, este arreglo ‘cards’ contiene los valores de color para las cartas en el juego. La función de mezcla utiliza el algoritmo de Fisher-Yates para aleatorizar el orden de los colores y luego duplica estos colores para crear pares, formando el conjunto de cartas para el juego.

    selectedCards: Esta variable actúa como un almacenamiento temporal para las cartas seleccionadas actualmente durante el juego. Cuando un jugador hace clic en una carta, se añade a este arreglo para permitir comparaciones de coincidencias.

    score: Esta variable rastrea la puntuación del jugador a lo largo del juego. La puntuación se incrementa siempre que el jugador empareja exitosamente un par de cartas. Se actualiza y se muestra para reflejar el progreso y el rendimiento del jugador.

    timeLeft: Representa el tiempo restante para que el jugador complete el juego. Inicialmente configurado a una duración específica, cuenta hacia atrás a medida que avanza el juego. Cuando llega a cero, el juego termina.

    gameInterval: Esta variable gestiona el temporizador del juego. Se utiliza para controlar el mecanismo de cuenta regresiva para la duración del juego. El intervalo decrementa continuamente la variable ‘timeLeft’, actualizando el tiempo mostrado y desencadenando el fin del juego cuando el tiempo se agota.

*/

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

/*

    startbtn: Esta variable se asigna al elemento HTML con el ID ‘startbtn’. Representa típicamente un elemento de botón destinado a iniciar o reiniciar el juego al hacer clic. Esta variable permite que el código JavaScript acceda y manipule este elemento de botón específico.

    gameContainer: Esta variable se asigna al elemento HTML con el ID ‘game-container’; se refiere a un elemento div o contenedor que genera dinámicamente cartas para el juego de memoria. Permite que JavaScript manipule o añada elementos secundarios (cartas) dentro de este contenedor.

    scoreElement: Esta variable representa el elemento HTML con el ID ‘score’. Está asociada con un párrafo o elemento span que muestra la puntuación del jugador durante el juego. JavaScript puede actualizar la puntuación mostrada manipulando el contenido de este elemento específico.

    timerElement: Esta variable se refiere al elemento HTML identificado por el ID ‘timer’. Presumiblemente está vinculado a un párrafo o elemento span que muestra el tiempo restante para que el jugador complete el juego. JavaScript puede actualizar este elemento para reflejar la cuenta regresiva y notificar al jugador sobre el tiempo restante.

*/

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}
/*

    Utiliza un bucle ‘for…of’ para iterar sobre cada elemento (color) en el array ‘cards’. Para cada color en el array ‘cards’:

    Dentro del bucle, crea un nuevo elemento HTML div usando document.createElement('div'). Este elemento ‘div’ representa una carta en el juego.

    Agrega una clase ‘card’ al nuevo elemento ‘div’ usando card.classList.add('card'). Esta clase puede contener estilos CSS o reglas para dar estilo a los elementos de las cartas.

    Establece el atributo ‘dataset.color’ del elemento de la carta al valor de color actual del array ‘cards’. Este icono representa el color oculto de la carta hasta que el jugador haga clic en ella.

    El contenido textual de cada carta se establece inicialmente en un signo de interrogación (‘?’) usando card.textContent = '?'. Esto representa que el color de la carta está oculto hasta que el jugador haga clic en ella.

    Finalmente, el elemento de carta recién creado se adjunta al elemento ‘gameContainer’ como un hijo. Esta acción agrega cada elemento de carta a la interfaz del juego dentro del contenedor designado.

*/

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/*

    Parámetro del array: Toma un array como argumento, que contiene elementos aún no mezclados.

    Proceso de mezcla utilizando un bucle a través del array: La función comienza iniciando un bucle ‘for’ que itera hacia atrás a través del array comenzando desde el último índice (let i = array.length - 1; i > 0; i–).

    Selección de índice aleatorio: Dentro de cada iteración, genera un índice aleatorio ‘j’ usando Math.floor(Math.random() * (i + 1)). Este ‘j’ representa un índice aleatorio dentro del array.

    Intercambio de elementos: Luego intercambia los elementos en los índices ‘i’ y ‘j’ usando la asignación de desestructuración de arrays: [array[i], array[j]] = [array[j], array[i]]. Esta línea intercambia eficientemente los valores en las posiciones ‘i’ y ‘j’ sin necesidad de una variable temporal.

    Continuando el bucle: El bucle continúa hasta que termina de iterar a través de todo el array, mezclando elementos en el camino.

    Devolviendo el array mezclado: Una vez que el bucle está completo, la función devuelve el array con sus elementos reorganizados en un orden aleatorio.

*/

function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

/*


    Objetivo del evento usando const card = event.target;: Esta línea recupera el elemento que activó el evento (en este caso, una carta clickeada) y lo asigna a la variable ‘card’.

    Verificando la carta: if (!card.classList.contains('card') || card.classList.contains('matched')) { return; } Esta declaración ‘if’ verifica si el elemento clickeado es una carta y si ya ha sido emparejada. Si alguna de las condiciones es verdadera:
        Si el elemento no es una carta o ya ha sido emparejado, la función retorna temprano, ignorando cualquier acción adicional para este clic en particular.

    Revelando la carta:

        card.textContent = card.dataset.color;: Establece el contenido textual de la carta clickeada al valor almacenado en su ‘dataset.color’. Esta acción revela el color de la carta cambiando el contenido textual al valor del color.

        card.style.backgroundColor = card.dataset.color;: Cambia el color de fondo de la carta para que coincida con el color revelado.

    Manejo de cartas seleccionadas:
        selectedCards.push(card);: Agrega la carta clickeada al array ‘selectedCards’, indicando que es una de las cartas actualmente elegidas por el jugador.

    Verificando coincidencias:
        if (selectedCards.length === 2) { setTimeout(checkMatch, 500); }: Verifica si se han seleccionado dos cartas. Si se han elegido dos cartas, utiliza ‘setTimeout()’ para retrasar la ejecución de la función ‘checkMatch()’ por 500 milisegundos. Este breve retraso permite al jugador ver ambas cartas seleccionadas antes de su comparación brevemente.

*/

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

/*
 A continuación, se presenta un desglose detallado de la función:

    Desestructuración de cartas seleccionadas:
        const [card1, card2] = selectedCards;: Esta línea utiliza desestructuración de arrays para asignar los dos primeros elementos del array ‘selectedCards’ a ‘card1’ y ‘card2’. Estas variables representan las dos cartas seleccionadas por el jugador para la comparación.

    Comparando colores de las cartas:

        if (card1.dataset.color === card2.dataset.color) { ... }: Esto verifica si el valor de color almacenado en el atributo ‘dataset.color’ de ‘card1’ coincide con el valor de color de ‘card2’.

        Si los colores coinciden: Agrega la clase ‘matched’ a ambas cartas usando 'classList.add('matched')', marcándolas como pares emparejados en el juego.

        Aumenta el ‘score’ en 2 puntos, ya que el jugador ha emparejado con éxito un par.

        Actualiza el ‘scoreElement.textContent’ para mostrar el puntaje actualizado al jugador.

    Manejo de cartas que no coinciden: Si los colores de las dos cartas seleccionadas no coinciden, restablece el contenido textual de ambas cartas a un signo de interrogación (‘?’), ocultando sus colores nuevamente.
        Establece el color de fondo de ambas cartas a un color predeterminado (‘#ddd’), proporcionando una pista visual de que las cartas seleccionadas no coincidieron.

    Reiniciando la selección:
        selectedCards = [];: Limpia el array ‘selectedCards’ para reiniciarlo para el próximo conjunto de selecciones de cartas. Esta acción asegura que el jugador pueda seleccionar dos nuevas cartas después de la comparación.

*/

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reiniciar puntaje a cero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

/*
 A continuación, se presenta un resumen de sus funcionalidades:

    Estableciendo el estado inicial del juego:

        let timeLeft = 30;: Inicializa la variable ‘timeLeft’ a 30 segundos, estableciendo la duración para el juego.

        startbtn.disabled = true;: Desactiva el botón ‘startbtn’ para evitar múltiples iniciaciones del juego simultáneamente, asegurando que un juego esté en progreso a la vez.

        score = 0;: Reinicia la variable ‘score’ a cero, inicializándola para el nuevo juego.

        scoreElement.textContent = Score: ${score};: Actualiza el puntaje mostrado para mostrar que se ha reiniciado a cero para el nuevo juego.

    Iniciando el temporizador del juego:
        startGameTimer(timeLeft);: Inicia el temporizador del juego, contando hacia atrás desde la duración especificada ‘timeLeft’.

    Preparando cartas y elementos del juego:

        cards = shuffle(colors.concat(colors));: Mezcla el array ‘colors’ y lo duplica para crear pares para las cartas del juego.

        selectedCards = [];: Limpia el array ‘selectedCards’ para prepararlo para nuevas selecciones de cartas en el próximo juego.

        gameContainer.innerHTML = '';: Limpia el contenedor del juego, eliminando cualquier carta existente de juegos anteriores.

        generateCards();: Genera un nuevo conjunto de cartas dentro del contenedor del juego llamando a la función ‘generateCards()’, creando un nuevo diseño de juego para el jugador.

    Habilitando el evento de clic en las cartas:
        gameContainer.addEventListener('click', handleCardClick);: Agrega un listener de eventos al contenedor del juego, habilitando los clics en las cartas y activando la función ‘handleCardClick()’ para gestionar la jugabilidad cuando se hacen clic en las cartas.

*/

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('¡Juego terminado!');
            startbtn.disabled = false;
        }
    }, 1000);
}

/*
 A continuación, se presenta una explicación detallada de su funcionamiento:

    Visualización inicial:
        timerElement.textContent = Time Left: ${timeLeft};: Establece la visualización inicial del temporizador para mostrar el valor de ‘timeLeft’, indicando el tiempo restante para el juego.

    Configuración del intervalo:
        gameInterval = setInterval(() => { ... }, 1000);: Inicia un intervalo que activa una función cada segundo (1000 milisegundos) para actualizar el temporizador.

    Cuenta regresiva:
        timeLeft--;: Decrementa la variable ‘timeLeft’ cada segundo dentro del intervalo, simulando la cuenta regresiva al reducir el tiempo restante.

    Actualizando el tiempo mostrado:
        timerElement.textContent = Time Left: ${timeLeft};: Actualiza el tiempo mostrado en el elemento HTML (‘timerElement’) para reflejar el valor actualizado de ‘timeLeft’ después de cada decremento.

    Fin del juego:
        if (timeLeft === 0) { ... }: Verifica si el tiempo restante llega a cero.

    Si ‘timeLeft’ es igual a cero:

        clearInterval(gameInterval);: Detiene el intervalo, poniendo fin efectivamente al temporizador para que no cuente más.

        let timeLeft = 30;: Esta línea es redundante ya que redeclara ‘timeLeft’ dentro del alcance de este bloque, reiniciándolo a 30, pero no afecta al ‘timeLeft’ utilizado en el intervalo.

        alert('¡Juego terminado!');: Muestra una alerta indicando que el juego ha terminado porque se alcanzó el límite de tiempo.

        startbtn.disabled = false;: Reactiva el botón ‘startbtn’, permitiendo al jugador iniciar un nuevo juego después de que el actual haya terminado.

*/

startbtn.addEventListener('click', startGame);