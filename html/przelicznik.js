function obliczOplate() {
    var dataWypozyczenia = new Date(document.getElementById("data-wypozyczenia").value);
    var dataOddania = new Date(document.getElementById("data-oddania").value);
    var iloscKsiazek = parseInt(document.getElementById("ilosc-ksiazek").value);
    var czyEmeryt = document.getElementById("czy-emeryt").checked;
    
    if (iloscKsiazek < 1) {
        document.getElementById("wynik").innerHTML = "Podaj poprawną ilość książek (minimum 1).";
        return;
    }
    
    var czasWypozyczenia = (dataOddania - dataWypozyczenia) / (1000 * 60 * 60 * 24);
    if (czasWypozyczenia > 30) {
        var oplata = (czasWypozyczenia - 30) * iloscKsiazek;
        
        if (czyEmeryt) {
            oplata = 0.80 * iloscKsiazek;
        }
        
        document.getElementById("wynik").innerHTML = "Do zapłaty: " + oplata.toFixed(2) + " zł";
    } else {
        document.getElementById("wynik").innerHTML = "Brak opłaty";
    }
}