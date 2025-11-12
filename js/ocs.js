class oc {
	constructor(nombre, titulo, rareza, edad, mundo_origen, mundo_residencia, especie, arma_tipo, arma_insignia, tipo, daño, foto, descS, desc) {
			this.nombre = nombre;
			this.titulo = titulo;
			this.rareza = rareza;
			this.edad = edad;
			this.mundo_origen = mundo_origen;
			this.mundo_residencia = mundo_residencia
			this.especie = especie;
			this.arma_tipo = arma_tipo;
			this.arma_insignia = arma_insignia;
			this.tipo = tipo;
			this.daño = daño;
			this.foto = foto;
			this.descS = descS;
			this.desc = desc;
	}
	showOCInGacha() {
		return "Nombre: " + this.nombre + ", " + this.titulo + "<br> Rareza: " + this.rareza + "<br> Arma: " + this.arma_tipo + "<br><i>" + this.descS + "<i>";
	}
	invOCShow() {
		return "Nombre: " + this.nombre + ", " + this.titulo + "<br> Rareza: " + this.rareza + "<br> Arma: " + this.arma_tipo;

	}
}

let ocChosen = null // Para el random del gacha //

// Setup de algunas cosas //

const rareza   = ["MÍTICO", "LEGENDARIO", "ÉPICO", "RARO", "POCO COMÚN", "COMÚN"]
// ----------------- 0 ---------- 1 -------- 2 ------ 3 ------- 4 --------- 5 -------------------------------------------------------------------------------------------------- //

const mundo    = ["Mochu", "Fayns-shia (DreamLand)", "Seikatsu", "Aftemsko", "Stalaris", "Luxeria", "Sombrarix", "Onshírika", "Tierra", "Lo desconocido", "???"]
// ----------------- 0 -------------- 1 ---------------- 2 ---------- 3 -------- 4 --------- 5 --------- 6 ---------- 7 --------- 8 ---------- 9 --------- 10 ------------------ //

const animal   = ["Lobo", "Gato", "Perro", "Conejo", "Zorro", "Loro", "Mono", "Oso", "Pavo real", "Dinosaurio", "Oveja", "Cabra", "Dragón"]
// ---------------- 0 ------ 1 ----- 2 ------ 3 ------- 4 ------ 5 ---- 6 ------- 7 ----- 8 ----------- 9 ------- 10 ----- 11 ------ 12 ---------------------------------------- //

const especies = ["Mochibria", "Seikatsibria", "Kemonomimi", "Elfo", "Mensajero estrella", "Fantasma", "Kitsune", "Alma", "Espíritu", "Robot", "Andoide", "Ginoide",
// ------------------- 0 ----------- 1 ------------- 2 -------- 3 ------------ 4 -------------- 5 -------- 6 ------- 7 ------ 8 -------- 9 ------- 10 ------ 11 ---------------- //
	"Vampiro","Cyborg", "Acuarense", "Chirula", "Kryxhas", "Algerask", "Admadis", "Lucersx", "Shadowixh", "Monocromático", "Primordial", "Semi-primordial", "Prototipo",	"Zombi",
// -- 12 ----- 13 -------- 14 ------- 15 ------- 16 -------- 17 ------- 18 -------- 19 -------- 20 ----------- 21 ----------- 22 ------------ 23 ------------ 24 --------- 25 -- //
	"Terrícola", "???"]
// -- 25 ------- 26 ------------------------------------------------------------------------------------------------------------------------------------------------------------ //

const rango = ["Nulo", "Anish", "Cuishigo"]
// ------------- 0 ------ 1 -------- 2 ----------------------------------------------------------------------------------------------------------------------------------------- //

const tipoArma = []
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const tipo     = []
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const elementos = ["Agua", "Tierra", "Fuego", "Aire", "Tormenta", "Hielo", "Luz", "Oscuridad", "'Onshka'", "Celestial"]
// ----------------- 0 ------- 1 ------ 2 ------ 3 ------- 4 ------- 5 --------------------------------------------------------------------------------------------------------- //

const tipodm   = ["Mágico", "Físico", "Fantasmal", "Tecnológico", "Espacial", "Natural", "Elemental", "Mixto"]
// ----------------- 0 ------- 1 --------- 2 ----------- 3 ----------- 4 -------- 5 --------- 6 ------ 7 ----------------------------------------------------------------------- //

//Base para personajes
let base    = new oc ("nombre", "titulo", rareza[0], 0, mundo[0], mundo[1], especies[0], tipoArma[0], "", tipo[0], tipodm[1], "../media", "")


// Array para el gacha //

export {oc, ocChosen, rareza, mundo, animal, especies, rango, tipoArma, tipodm} // Exportar

// console.log(akiko.showOCInGacha())
// console.log(akiko.invOCShow())