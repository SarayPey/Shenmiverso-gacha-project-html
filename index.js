import { akiko, sara, darya, willow } from "./js/data/dataP.js"
import { personajes } from "./js/ocs.js"

let traumaCoins = 0
function traumaUpdate () {
    document.getElementById("traumacoins").textContent = traumaCoins
}
import { oc, ocChosen, rareza, mundo, animal, especies, rango, tipoArma, tipodm, personajes } from "./ocs.js" // Importar
const personajes = [willow, sara, akiko, darya]

function wish(n) {
    if (n == 10) {
        traumaCoins = traumaCoins - 150*9
        document.getElementById("traumacoins").textContent = traumaCoins
    }
    else {
        traumaCoins = traumaCoins - 150*n
        document.getElementById("traumacoins").textContent = traumaCoins
    }
    for (let i = 1; i <= n; i++) {
        console.log("Hola", i)
        ocChosen = Math.floor(Math.random() * personajes.length);
        return ocChosen.showOCinGacha();
    }
}

window.onload = () => {
    traumaUpdate()
    invUpdate()
}

