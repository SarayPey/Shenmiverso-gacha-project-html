import { oc, rareza, rango, mundo, tipodm, tipodm } from "../ocs";

// Personajes (va a ser re largo) //

let willow  = new oc("Willow", ".", rareza[0],
	14, "Mochu", "Mochu", ".",
	tipoArma[0], ".", tipo[0], tipodm[0],
	"../media/OCmedia/Willow.jpg",
	"Willow Faynsashi",
	"."
);

let sara    = new oc("Sara", ".", ".",
	"??", mundo[9], mundo[0], "Kemonomimi (lobo)",
	tipoArma[0], ".", tipo[0], tipodm[0],
	"../media/OCmedia/Sara.jpg",
	".",
	"."
);

let akiko   = new oc("Akiko", "El sol brillante", rareza[1],
	14, mundo[0], mundo[0], especies[2] + "(" + animal[0] + "). " + rango[1],
	tipoArma[0], "Dulce alegría", tipo[0], tipodm[7] + "(" + tipodm[0] + "-" + tipodm[6] + "(" + elementos[1] + "))",
	"../media/OCmedia/Akiko.jpg",
	"Akiko Rosales",
	"."
);

let darya   = new oc("Darya", ".", rareza[1],
	14, mundo[0], mundo[0], "",
	tipoArma[0], ".", ".", ".",
	"../media/OCmedia/Darya.jpg",
	".",
	"."
);

export {willow, sara, akiko, darya}