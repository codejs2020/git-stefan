// Grupa 2 - zadatak

// brojac klikova
let counter = 0;

// funkcija clickCount broji koliko puta je kliknuto dugme Submit
function clickCount(){
  counter++;
  return counter;
}

// Funkcija randomBroj generise neki broj od 0 do 100
function randomBroj(){
  let x = document.forma_random.num.value;  // x je promenljiva kojoj dodeljujemo vrednost koju korisnik unosi na ekranu u textbox-u
  let broj = Math.ceil(Math.random()*100);

  // U if petlji uporedjujemo unet broj od strane korisnika sa random brojom
  if(x == broj){
    document.getElementById('id_ispis').innerHTML = "Pobedio si!";
  }
  else if(x > broj){
    document.getElementById('id_ispis').innerHTML = "Moj broj je manji!";
  }
  else{
    document.getElementById('id_ispis').innerHTML = "Moj broj je veci!";
  }
}

// U todo funckiji se pozivaju gornje dve navedene funckije
function todo(){
  // Uslov - gleda se da li je sumbit dugme kliknuto manje od 5 puta
  if(clickCount() < 5){
    randomBroj();
  }
  else {
    document.getElementById('id_ispis').innerHTML = "Iskoristio si 5 pokusaja!";
  }
}

