//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
//document.write(_pet2);

//var 12 = 'numero';


//---------input-----------
let moodNow = prompt('Come ti senti in questo momento?');
let wishNow = prompt('Cosa vorresti fare?');
let obstacle_ = prompt('Cosa ti impedisce di farlo?');


//---------output-----------

document.getElementById('mood').innerHTML = moodNow;
document.getElementById('wish').innerHTML = wishNow;
document.getElementById('obstacle').innerHTML = obstacle_;