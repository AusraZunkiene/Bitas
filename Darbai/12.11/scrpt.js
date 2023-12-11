/*1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;*/
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('1 užduotis');
const generuotiX = (length, min, max) => {
    const masyvas = [];
    for (let i = 0; i < length; i++) masyvas.push(rand(min, max));
    return masyvas;
}
console.log('2 užduotis');
const randStringui = (length) => {
    let strng = "";
    for (let i = 0; i < length; i++) {
       strng += String.fromCharCode(rand(65, 90));}
    return strng;
}
const masyvasStringui = [];
for (let i = 0; i < 100; i++) {
	masyvasStringui.push(randStringui(4));
}
console.log(masyvasStringui);
console.log('3 užduotis');
masyvasStringui.sort();
console.log(masyvasStringui);
console.log('4 užduotis');

masyvasStringui.sort().reverse();
console.log(masyvasStringui);
console.log('5 užduotis');
const masyvasPenktai = generuotiX(100, -100, 200);
console.log(masyvasPenktai);
console.log('6 užduotis');
if (masyvasPenktai.includes(68)) {
	console.log(`68 egzistuoja masyve`);
} else {
	console.log(`68 nėra masyve`);
}
console.log('7 užduotis');
masyvasPenktai.sort((num1, num2) => {
    return num1 - num2;
});
console.log(masyvasPenktai);
console.log('8 užduotis');
masyvasPenktai.reverse();
console.log(masyvasPenktai);
console.log('9 užduotis');

let min = Math.min(...masyvasPenktai);
let max = Math.max(...masyvasPenktai);

console.log(min);
console.log(max);
console.log('10 užduotis');

let total = 0;
for(let i = 0; i < masyvasPenktai.length; i++) {
    total += masyvasPenktai[i];
}
let avg = total / masyvasPenktai.length;
console.log(avg);

/*1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'

*/
console.log('Antra dalis: 1 užduotis');
const randStringams = (length) => {
    const arr = [];
    let strngs = "";
    for (let i = 0; i < length; i++) 
    strngs += String.fromCharCode(rand(65, 90));
    arr.push(strngs);
    return arr, strngs;
}

const masyvasStringui1 = [];
for (let i = 0; i < 100; i++) {
	masyvasStringui1.push(randStringams(4));
}
console.log(masyvasStringui1);
console.log('Antra dalis: 2 užduotis');
for (let value of masyvasStringui1){
    if (value.charAt(0) === 'A' && value.charAt(3) === 'A')
    console.log(masyvasStringui1.indexOf(value), (value));
}
console.log('Antra dalis: 3 užduotis');
let arrayValue = [];
for (let value of masyvasStringui1){
    if (value.charAt(0) === 'X' || value.charAt(0) === 'M' || value.charAt(0) === 'K')
    arrayValue.push(value);
}
console.log(arrayValue);
console.log('Antra dalis: 5 užduotis');
if( arrayValue.length > 3) arrayValue.sort();
else arrayValue. reverse();
console.log(arrayValue);
console.log('Antra dalis: 4 užduotis');
let arrayTwoValue = [];
for (let value of masyvasStringui1){
    if (value.charAt(1) === value.charAt(2))
    arrayTwoValue.push(value);
}
console.log(arrayTwoValue);
console.log('Antra dalis: 5 užduotis');
if( arrayTwoValue.length >= 3) arrayTwoValue.sort();
else arrayTwoValue.sort().reverse();
console.log(arrayTwoValue);
console.log('Antra dalis: 6 užduotis');
const newLetter = [];
for (let value of masyvasStringui1){
    newLetter.push(value + randStringams(1))
}
console.log(newLetter);
console.log('Antra dalis: 7 užduotis');
let valueAbc = newLetter.map(value => value.split('').sort().join(''))
console.log(valueAbc);
console.log('Antra dalis: 8 užduotis');

const masyvasWord = [];
let kiekKartuReikejo = 0;
while (true) {
;
if (randStringams(4) === 'XMAS')
{
	masyvasWord.push(randStringams(4))
    break
}
else {
    masyvasWord.push(randStringams(4))
    kiekKartuReikejo++;
}
}
console.log(kiekKartuReikejo);
console.log(masyvasWord);
console.log('Antra dalis: 9 užduotis');
console.log('Antra dalis: 10 užduotis');