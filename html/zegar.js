function zegar() {
    const czasTeraz = new Date();
    let godzina = czasTeraz.getHours();
    let minuta = czasTeraz.getMinutes();
    let sekunda = czasTeraz.getSeconds();
    let milisekunda = czasTeraz.getMilliseconds();
  
    let ampm = godzina >= 12 ? "PM" : "AM";
    godzina = godzina > 12 ? godzina - 12 : godzina;
    godzina = godzina === 0 ? 12 : godzina;
  
    let czasWartosc =
      (godzina <= 9 ? "0" + godzina : godzina) +
      ":" +
      (minuta <= 9 ? "0" + minuta : minuta) +
      ":" +
      (sekunda <= 9 ? "0" + sekunda : sekunda) +
      ":" +
      milisekunda +
      " " +
      ampm;
  
    const elementZegarDiv = document.getElementById("zegar");
    elementZegarDiv.innerHTML = "<b>" + czasWartosc + "</b>";
    setTimeout(zegar, 1);
  }
  
  let stoper_sek = 0;
  let stoper_ms = 0;
  let stoperID = null;
  
  function formatujLiczbe(liczba) {
    return liczba < 10 ? "0" + liczba : liczba;
  }
  
  function stoper() {
    if (stoper_ms >= 9) {
      stoper_ms = 0;
      stoper_sek++;
    } else {
      stoper_ms++;
    }
  
    const elementStoper = document.getElementById("stoper");
    elementStoper.innerHTML =
      "<i>" +
      formatujLiczbe(stoper_sek) +
      "." +
      formatujLiczbe(stoper_ms) +
      "</i>";
  }
  
  function start_stoper() {
    stoperID = setInterval(stoper, 100);
    console.log(stoperID);
  }
  
  function stop_stoper() {
    clearInterval(stoperID);
  }
  
  let liczbaOdwiedzin = 0;
  let czasStartu = Date.now();
  
  function aktualizujLiczbeOdwiedzin() {
    liczbaOdwiedzin++;
    document.getElementById("liczbaOdwiedzin").textContent = liczbaOdwiedzin;
  }
  
  function aktualizujDate() {
    const dataTeraz = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatowana = dataTeraz.toLocaleDateString('pl-PL', options);
    const elementData = document.getElementById("data");
    elementData.textContent = dataFormatowana;
}

  
  window.onload = function () {
    zegar();
    start_stoper();
    aktualizujLiczbeOdwiedzin();
    aktualizujDate();
  };
  