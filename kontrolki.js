function podmienKlase(idObiektu, nowaKlasa) {
    const Obiekt = document.getElementById(idObiektu);
    Obiekt.className = nowaKlasa;
}

function PoZaladowaniuStrony2() {
    const StartBtn = document.getElementById('startBtn');
    const StopBtn = document.getElementById('stopBtn');

    StartBtn.addEventListener('click', Start);
    StartBtn.addEventListener('dblclick', ZmienKierunek);
    StopBtn.addEventListener('click', Stop);
    StopBtn.addEventListener('dblclick', Zwolnij);
    UruchomRuchTekst();
}

function Start() {
    UruchomRuchTekst();
}

function Przyspiesz() {
    czasAktualizacji = 10;
}

function Zwolnij() {
    czasAktualizacji = 200;
}

function Stop() {
    ZatrzymajRuchTekst();
}

function ZatrzymajRuchTekst() {
    clearInterval(RuchomyTekstIntervalId);
}

function ZmienKierunek() {
    zmienKierunek = true;
}

function AktualizujRuchomyTekst() {
    const RuchomyTekst = document.getElementById('rTekst');
    let napis = RuchomyTekst.value;
    // napis = 'ruchomy tekst...';
    // napis.substring(1) = 'uchomy tekst...';
    // napis.substring(0,1) = 'r';
    // napis.substring(5) = napis.substring(5,napis.length) = 'my tekst...';
    if (zmienKierunek) {
        // ostatnia litra + napis bez ostatniej litery
        // '.ruchomy tekst..';
        RuchomyTekst.value = napis.substring(napis.length-1,napis.length) + napis.substring(0,napis.length-1);
    } else {
        RuchomyTekst.value = napis.substring(1)+napis.substring(0,1);
    }
    
}

let zmienKierunek = false;
let czasAktualizacji = 200;
let RuchomyTekstIntervalId = null;
function UruchomRuchTekst() {
    clearInterval(RuchomyTekstIntervalId);
    RuchomyTekstIntervalId = setInterval(function(){
        AktualizujRuchomyTekst(); 
    },czasAktualizacji)
}

window.addEventListener('load', PoZaladowaniuStrony2);