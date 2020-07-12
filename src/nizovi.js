// 1. zadatak
let niz1 = ['a', 'b', 'c'];

// 2. zadatak
let niz2 = [1, 2, 3];

// 4. zadatak
// Na malo drugaciji nacin
let niz = [];
let i = 0;
let num;

while (i < 50){
  num = Math.ceil(Math.random() * 10000000);
  if (num > 1000000){
    niz[i] = num;
    i++;
  }
}
//console.log(niz);

// 5. zadatak
// uneta slova direktno sa tastature
let slova = 'qwertyuiopasdfghjklzxcvbnm'.split('');
let nizslova = [];

for(let i=0; i<200; i++){
  let j = Math.ceil(Math.random() * 25);
  nizslova[i] = slova[j];
}
//console.log(nizslova);

// 6. zadatak
let multi_niz = [['q', 'w', 'e'], ['r', 't', 'y'], ['a', 's', 'd'], ['f', 'g', 'h']]

// 7. zadatak
for (x in multi_niz){
  //console.log(multi_niz[x]);
}

// 8. zadatak
for(let i=0; i<slova.length; i++){
  //console.log(slova[i]);
}

// 9. zadatak
for (k in slova){
  //console.log(slova[k]);
}

// 10. i 11. - konvertuje latinicu u cirilicu - nema veze sa nizovima

function konverter(tekst){
  tekst = tekst.replace(/lj/g, 'љ');
  tekst = tekst.replace(/Lj/g, 'Љ');
  tekst = tekst.replace(/dž/g, 'џ');
  tekst = tekst.replace(/dz/g, 'џ');
  tekst = tekst.replace(/Dž/g, 'Џ');
  tekst = tekst.replace(/Dz/g, 'Џ');
  tekst = tekst.replace(/nj/g, 'њ');
  tekst = tekst.replace(/Nj/g, 'Њ');
  tekst = tekst.replace(/a/g, 'а');
  tekst = tekst.replace(/b/g, 'б');
  tekst = tekst.replace(/c/g, 'ц');
  tekst = tekst.replace(/č/g, 'ч');
  tekst = tekst.replace(/ć/g, 'ћ');
  tekst = tekst.replace(/d/g, 'д');
  tekst = tekst.replace(/đ/g, 'ђ');
  tekst = tekst.replace(/e/g, 'е');
  tekst = tekst.replace(/f/g, 'ф');
  tekst = tekst.replace(/g/g, 'г');
  tekst = tekst.replace(/h/g, 'х');
  tekst = tekst.replace(/i/g, 'и');
  tekst = tekst.replace(/j/g, 'ј');
  tekst = tekst.replace(/k/g, 'к');
  tekst = tekst.replace(/l/g, 'л');
  tekst = tekst.replace(/m/g, 'м');
  tekst = tekst.replace(/n/g, 'н');
  tekst = tekst.replace(/o/g, 'о');
  tekst = tekst.replace(/p/g, 'п');
  tekst = tekst.replace(/r/g, 'р');
  tekst = tekst.replace(/s/g, 'с');
  tekst = tekst.replace(/š/g, 'ш');
  tekst = tekst.replace(/t/g, 'т');
  tekst = tekst.replace(/u/g, 'у');
  tekst = tekst.replace(/v/g, 'в');
  tekst = tekst.replace(/z/g, 'з');
  tekst = tekst.replace(/ž/g, 'ж');
  tekst = tekst.replace(/A/g, 'А');
  tekst = tekst.replace(/B/g, 'Б');
  tekst = tekst.replace(/C/g, 'Ц');
  tekst = tekst.replace(/Č/g, 'Ч');
  tekst = tekst.replace(/Ć/g, 'Ћ');
  tekst = tekst.replace(/D/g, 'Д');
  tekst = tekst.replace(/Đ/g, 'Ђ');
  tekst = tekst.replace(/E/g, 'Е');
  tekst = tekst.replace(/F/g, 'Ф');
  tekst = tekst.replace(/G/g, 'Г');
  tekst = tekst.replace(/H/g, 'Х');
  tekst = tekst.replace(/I/g, 'И');
  tekst = tekst.replace(/J/g, 'Ј');
  tekst = tekst.replace(/K/g, 'К');
  tekst = tekst.replace(/L/g, 'Л');
  tekst = tekst.replace(/M/g, 'М');
  tekst = tekst.replace(/N/g, 'Н');
  tekst = tekst.replace(/O/g, 'О');
  tekst = tekst.replace(/P/g, 'П');
  tekst = tekst.replace(/R/g, 'Р');
  tekst = tekst.replace(/S/g, 'С');
  tekst = tekst.replace(/Š/g, 'Ш');
  tekst = tekst.replace(/T/g, 'Т');
  tekst = tekst.replace(/U/g, 'У');
  tekst = tekst.replace(/V/g, 'В');
  tekst = tekst.replace(/Z/g, 'З');
  tekst = tekst.replace(/Ž/g, 'Ж');

  return tekst;
}

function ispis(){
  let unos = document.getElementById('id_text').value;
  document.getElementById('cirilica').innerHTML = konverter(unos);
}
