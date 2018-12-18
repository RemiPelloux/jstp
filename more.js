function random(min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
}

let nb;
let cpt = 0;

document.querySelector(".jeu1").addEventListener('click', jeu1);
document.querySelector(".jeu2").addEventListener('click', jeu2);
document.querySelector(".jeu3").addEventListener('click', jeu3);
document.querySelector(".jeu4").addEventListener('click', jeu4);
document.querySelector(".boutonjeu").addEventListener("click", more);


function jeu1() {
    nb = random(0, 100);
    document.querySelector(".message").innerHTML = "Veuillez entrer un nombre et cliquer sur submit";
    console.log(nb);
}

function jeu2() {
    nb = random(0, 1000);
    document.querySelector(".message").innerHTML = "Veuillez entrer un nombre et cliquer sur submit";
    console.log(nb);
}

function jeu3() {
    nb = random(0, 10000);
    document.querySelector(".message").innerHTML = "Veuillez entrer un nombre et cliquer sur submit";
    console.log(nb);
}

function jeu4() {
    nb = random(0, 1000000);
    document.querySelector(".message").innerHTML = "Veuillez entrer un nombre et cliquer sur submit";
    console.log(nb);
}

function more() {
    cpt++;
    if (cpt === 10) {
        document.querySelector(".message").innerHTML = "Perdu";
        cpt = 0;
    }
    let rep = document.querySelector(".champs").value;

    if (rep < nb) {

        document.querySelector(".message").innerHTML = "  Insuffisant !";

    }
    if (rep > nb) {
        document.querySelector(".message").innerHTML = "  Trop !";

    }
    if (rep == nb) {
        document.querySelector(".message").innerHTML = "  Trouvé en " + cpt + " coups";
        nb = random(1, 100);
        cpt = 0;
    }

}
