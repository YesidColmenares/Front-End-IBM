let count = 0; //Inicialize count to 0

function increaseCount()
{
    count++;    
}

function displayCount()
{
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue(){
    if(count === 10){
        alert("Tu publicacion de Instagram gano 10 seguidores");
    } else if (count === 20)
    {
        alert("Tu publicacion de Instagram gano 20 seguidores");
    }
}

function increaseCount(){
    count++; // Incrementar el count en 1 
    displayCount(); // Mostrar el count
    checkCountValue(); // Verificar el valor del count y mostrar mensajes
}