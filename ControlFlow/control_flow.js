let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage; 

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication status: ", authenticationStatus);

//Actividad Servicios Dietetico

//MiembroInscrito
//Suscriptor
//NoSuscriptor

let personaCargo = "Empleado";

switch(personaCargo)
{
    case "Empleado":
        console.log("Autorizado a tener acceso a los servicios Dieteticos");
    break;

    case "MiembroInscrito":
        console.log("Autorizado a tener acceso a los servicios Dieteticos y a interaccion uno a uno con un dietista");
    break;

    case "Suscriptor":
        console.log("está autorizado a tener acceso parcial para facilitar los servicios Dietéticos únicamente.");
    break;

    case "NoSuscriptor":
        console.log("Necesita inscribirse para tener acceso al sistema");
    break;

    default:
        console.log("No existe el cargo");
    break;
}

