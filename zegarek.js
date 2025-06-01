
function PoZaladowaniuStrony() {
    UruchomZegarek();
    UruchomStoper();
    UstawDate();
    UruchomLicznikOdwiedzin();
}

let TimerId = null;



function AktualizujStanZegarka() {
    const Zegarek = document.getElementById('clock');
    const AktualnyCzas = new Date();
    const aktualnyCzas = AktualnyCzas.toTimeString();
    const aktualnyCzasBezStrefy = aktualnyCzas.substring(0,8);
    Zegarek.value = aktualnyCzasBezStrefy;
    
    
}

function UruchomZegarek() {
    AktualizujStanZegarka();
    clearTimeout(TimerId); // usuwa timer TimerId
    TimerId = setTimeout(function(){ // tworzy timer TimerId, ktory uruchomi funkcje po 1000ms
        UruchomZegarek();
    },1000 ); // 1000ms
}

function UstawDate() {
    const dataPole = document.getElementById("data");
    const aktualnaData = new Date().toLocaleDateString();
    if (dataPole) dataPole.textContent = aktualnaData;
}

let milisekundy = 0;
let sekundy = 0;
let minuty = 0;
let krok_mili = 100;

function AktualizujStoper() {
    const Stoper = document.getElementById('myTimer');
    milisekundy += krok_mili; // milisekundy = milisekundy + krok_mili

    if (milisekundy >= 1000) {
        sekundy++;
        milisekundy = 0;
    }
    if (sekundy>=60) {
        minuty++;
        sekundy = 0;
    }
    // if (sekundy < 10) { zeroSec='0'; } else { zeroSec=''; }
    const zeroSec = (sekundy < 10) ? '0' : ''; 
    Stoper.value = minuty+':'+zeroSec+sekundy+'.'+milisekundy/100;
}

let IntervalId = null;
function UruchomStoper() {
    if (!sessionStorage.getItem("startTime")) {
        sessionStorage.setItem("startTime", Date.now());
    }

    const czas = Date.now() - parseInt(sessionStorage.getItem("startTime"));
    minuty = Math.floor(czas / 60000);
    sekundy = Math.floor((czas % 60000) / 1000);
    milisekundy = czas % 1000;

    clearInterval(IntervalId);
    IntervalId = setInterval(() => {
        AktualizujStoper();
    }, krok_mili);
}

function UruchomLicznikOdwiedzin() {
    let count = localStorage.getItem("counter");
    count = count !== null ? parseInt(count, 10) : 0;
    count++;
    localStorage.setItem("counter", count);

    const licznik = document.getElementById("licznik");
    if (licznik) {
        licznik.value = count;
    }
}

window.addEventListener('load', PoZaladowaniuStrony);