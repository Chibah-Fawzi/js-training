console.log("Hello hello"); // Affiche dans la console
alert("This an alert!"); // Affiche une alerte
confirm("This is a confirm prompt!"); // Affiche un alerte de confirmation
prompt("This is a prompt!"); // Affiche une input

// VARIABLES
var myName = "Said"; // camelCase / my_name / myname
var myAge = 30;

console.log("Je suis " + myName + " âgé de " + myAge);

// ARITHMETIQUES
var a = 10;
var b = "10";
var c = 50;

var Addition = a + b;
var Soustraction = a - b;
var Division = a / b;
var Multiplication = a * b;
var Puissance = a ** b;
var Modulo = a % b;

a = a + 50;
a += 50;

// LOGIQUE COMBINATOIRES
console.log(a < b && c > b); // AND
console.log(a > b || c > b); // OR

console.log(a == b); // Check la valeur
console.log(a === b); // Check la valeur et le type de donnée

// CONDITIONS
var age = 12;
var taille = 1.7;
var accompagné = true;

if (age > 12 && taille > 1.6) {
  alert("Vous avez le droit de faire le manége");
} else if (accompagné) {
  alert("Vous avez le droit de faire le manége");
} else {
  alert("Vous n'avez pas le droit de faire le manége");
}

// FUNCTIONS

// Define the function
function Salam(username) {
  console.log("Salam 3likom " + username);
}

Salam("Said"); // Calling the function

// LOOPS

var i = 10;
while (i < 5) {
  console.log("Je suis une itération: " + i);
  i++;
}

do {
  console.log("Je suis une itération: " + i);
  i++;
} while (i < 5);

for (var index = 0; index < 10; index++) {
  console.log("Je suis une itération");
}

// DATA STRUCTURES

// ARRAYS - LISTS - TABLEAU - TABLE

var users = ["Said", "Sabrina", "Omar", "Hmed"];

console.log(users[1]); // Afficher le deuxiéme élement de la liste

users.push("Sofiane"); // Ajoute un élement à la fin de la liste
users.unshift("Houria"); // Ajoute un élement au début de la liste

users.pop(); // Retire un élement à la fin de la liste
users.shift(); // Retire un élement au début de la liste

// delete users[1]; // Enléve l'élement numéro 1
users.splice(1, 1, "Lydia"); // 1er Param : L'indexe voulu - 2eme Param : Nbr d'elements à supprimer - 3eme Param : L'élement à remplacer

console.log(users);
