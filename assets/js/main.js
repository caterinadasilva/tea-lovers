document.getElementById('suscribirse').onclick = function enviarForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var selectorIndex = document.getElementById('selector').selectedIndex;
	var selectorOpts = document.getElementById("selector").options;
	var teFav = selectorOpts[selectorIndex].value;
	var check = document.getElementById('checkbox').checked;
	console.log(name);
	console.log(email);
	console.log(address);
	console.log(selectorIndex);
	console.log(teFav);
	console.log(check);
	if (name === "") {
		alert("Por favor, escriba su nombre.");
		return false;
	} else if (email === "") {
		alert("Por favor, escriba su email.");
		return false;
	} else if (address === "") {
		alert("Por favor, escriba su dirección.");
		return false;
	} else if (selectorIndex === 0) {
		alert("Por favor, elija su té favorito.");
		return false;
	} else {
		alert("¡Muchas gracias por suscribirte!");
		console.log(name);
		console.log(email);
		console.log(address);
		console.log(selectorIndex);
		console.log(teFav);
		console.log(check);
		document.getElementById('name').value = "";
		document.getElementById('email').value = "";
		document.getElementById('address').value = "";
		document.getElementById('selector').selectedIndex = 0;
		document.getElementById('checkbox').checked = false;
		return false;
	}
}