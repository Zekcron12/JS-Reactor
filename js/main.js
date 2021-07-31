
let reactor = "apagado";
const activate = document.getElementById("activar");
const activateNeon = document.getElementById("neon");
const grooveA = document.getElementById("color1");
const grooveB = document.getElementById("color2");
const grooveC = document.getElementById("color3");
const grooveD = document.getElementById("color4");
const grooveE = document.getElementById("color5");
const grooveF = document.getElementById("color6");
const grooveG = document.getElementById("color7");
const grooveH = document.getElementById("color8");


//nota: buscar como se seleccionan todas las class de una vez y como se le cambia la propiedad
//para asi poder optimizar codigo
const activeReactor = () => {
	if ( reactor == "apagado") { 
		reactor = "encendido";
		activate.classList.add("activar");
		activateNeon.classList.add("neon");
		grooveA.classList.add("active-coil");
		grooveB.classList.add("active-coil");
		grooveC.classList.add("active-coil");
		grooveD.classList.add("active-coil");
		grooveE.classList.add("active-coil");
		grooveF.classList.add("active-coil");
		grooveG.classList.add("active-coil");
		grooveH.classList.add("active-coil");
	} else { 
		reactor = "apagado";
		activate.classList.remove("activar"); 
		activateNeon.classList.remove("neon");
		grooveA.classList.remove("active-coil");
		grooveB.classList.remove("active-coil"); 
		grooveC.classList.remove("active-coil"); 
		grooveD.classList.remove("active-coil"); 
		grooveE.classList.remove("active-coil"); 
		grooveF.classList.remove("active-coil"); 
		grooveG.classList.remove("active-coil"); 
		grooveH.classList.remove("active-coil"); 
	}
}

//-------------------- BITÁCORA --------------------//
const open = document.getElementById('open');
const modalBitacora = document.getElementById('modal-bitacora');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modalBitacora.classList.add('show');  
});

close.addEventListener('click', () => {
  modalBitacora.classList.remove('show');
});
