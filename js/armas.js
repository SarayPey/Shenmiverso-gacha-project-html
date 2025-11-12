class arma {
	constructor(nombre, rareza, mundo_origen, arma_tipo, portador, daño, foto, desc) {
			this.nombre = nombre;
			this.rareza = rareza;
			this.mundo_origen = mundo_origen;
			this.arma_tipo = arma_tipo;
			this.portador = portador;
			this.daño = daño;
			this.foto = foto;
			this.desc = desc
	}
	showArma(this) {
			return "Nombre: " + this.nombre + ", " + this.titulo + "\nRareza: " + this.rareza + "\n"
	}
}

let armaChosen = null // Para el random del gacha //

// Setup de algunas cosas //

const rareza   = ["MÍTICO", "LEGENDARIO", "ÉPICO", "RARO", "POCO COMÚN", "COMÚN"]
// ----------------- 0 ---------- 1 -------- 2 ------ 3 ------- 4 --------- 5 -------------------------------------------------------------------------------------------------- //

const mundo    = ["Mochu", "Fayns-shia (DreamLand)", "Seikatsu", "Aftemsko", "Stalaris", "Luxeria", "Sombrarix", "Onshírika", "Tierra", "Lo desconocido", "???"]
// ----------------- 0 -------------- 1 ---------------- 2 ---------- 3 -------- 4 --------- 5 --------- 6 ---------- 7 --------- 8 ---------- 9 --------- 10 ------------------ //

const tipoArma = ["Espada", "Hacha",, "Arco", "Abanico", "Martillo", "Puño", "Cañón", "Sable", "Escopeta", "Pistola", "Shuriken", "Mazo", "Bastón", "Lanza", "Cuchillo",
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
	"Ballesta", "Magia", "Bastón Magico", "Libro", "Varita", "Guantelete", "Anillo", "Amuleto", "Esfera", "Espejo", "Cristal"]
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const tipodm   = [Mágico, Físico, Fantasmal, Tecnológico, Espacial, Natural, Elemental, Mixto]
// ----------------- 0 ---- 1 ------- 2 --------- 3 -------- 4 ------- 5 ------- 6 ------ 7 ------------------------------------------------------------------------------------ //

//Base para personajes
let base    	= new arma("nombre", rareza[0], mundo[0], tipoArma[0], "", tipodm[1], "../media", "descripción")

// Personajes (va a ser re largo) //

let willowWe  = new arma("nombre", rareza[0], mundo[0], tipoArma[0], "", tipodm[1], "../media", "descripción")

let saraWe    = new arma("nombre", rareza[0], mundo[0], tipoArma[0], "", tipodm[1], "../media", "descripción")

let akikoWe   = new arma("nombre", rareza[0], mundo[0], tipoArma[0], "", tipodm[1], "../media", "descripción")

let daryaWe   = new arma("nombre", rareza[0], mundo[0], tipoArma[0], "", tipodm[1], "../media", "descripción")


// Array para el gacha //
const armas = [willow, sara, akiko, darya]

export {arma, armaChosen, rareza, mundo, tipoArma, tipodm, armas} // Exportar