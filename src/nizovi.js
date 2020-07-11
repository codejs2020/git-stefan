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

// 10. i 11. - konvertuje latinicu u cirilicu
// Treba da skontam kako da ispisem cirilicu u html
const latinica = ['A','B','C','Č','Ć','D','Dž','Đ','E','F','G','H','I','J','K','L','Lj','M','N','Nj','O','P','R','S','Š','T','U','V','Z','Ž'];
const cirilica = ['А','Б','Ц','Ч','Ћ','Д','Џ','Ђ','Е','Ф','Г','Х','И','Ј','К','Л','Љ','М','Н','Њ','О','П','Р','С','Ш','Т','У','В','З','Ж'];
let temp;

function konverter(){
  let tekst = document.getElementById('ime').value;

  tekst.split('');

  for (let i=0; i<tekst.length; i++){
    for (let j=0; j<30; j++){
      if(tekst[i] == latinica[j]){
        temp[i] = cirilica[j];
      }
    }
  }
  document.getElementById('cirilica').innerHTML = temp;
}
