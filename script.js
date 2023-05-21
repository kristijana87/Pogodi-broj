//generisanje nasumicnog broja
var nasumicanBroj = Math.ceil(Math.random() * 100);
console.log(nasumicanBroj);
var pokusaj = 1;

function pogodiBroj() {
            //broj koji je uneo korisnik
            var korisnik = document.getElementById("broj").value;
            var poruka = document.getElementById("poruka");
            console.log(korisnik);


            if (nasumicanBroj == korisnik) {
                        poruka.innerHTML = "Pogodili ste iz " + pokusaj + ". pokusaja!";
                        document.getElementById("poruka").style.color = "green";
            } else if (korisnik > nasumicanBroj) {
                        poruka.innerHTML = "UPS! Probajte manji broj!";
                        pokusaj++;
                        document.getElementById("poruka").style.color = "red";

            } else {
                        poruka.innerHTML = "UPS! Probajte veci broj!";
                        pokusaj++;
                        document.getElementById("poruka").style.color = "purple";
            }


};