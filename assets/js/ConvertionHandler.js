// THE CONVERTION HANDLER 

// This line of code is for, every user that do input event, is gonna run Convertion Function
firstIpt.addEventListener('input', Convertion)

// This line of code is for, every user that do select event, is gonna run Convertion Function
firstSelect.addEventListener("change",  Convertion)

// This line of code is for, every user that do select event, is gonna run Convertion Function
secondSelect.addEventListener("change", Convertion)


// Fungsi ini berfungsi untuk mengkonversi suhu
function Convertion() {	
	
	if(firstSelect.value === "1" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Celcius -> Farenheit
		 secondIpt.value = (parseInt(firstIpt.value) * 9/5) + 32 		
	}else if(firstSelect.value === "1" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Celcius -> Reamur
		 secondIpt.value =  (4 / 5) * parseInt(firstIpt.value)	
	}else if(firstSelect.value === "1" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Celcius -> Kelvin
		 secondIpt.value = parseInt(firstIpt.value) + 273.15
	}else if(firstSelect.value === "1" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Celcius -> Rankine
		 secondIpt.value = parseInt(firstIpt.value) * 9/5 + 491.67
	}else if(firstSelect.value === "2" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Farenheit -> Celcius
		 secondIpt.value = (parseInt(firstIpt.value) - 32) * 5/9 	
	}else if(firstSelect.value === "2" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Farenheit -> Reamur
		 secondIpt.value = (parseInt(firstIpt.value) - 32) * (4/9)
	}else if(firstSelect.value === "2" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Farenheit -> Kelvin
		 secondIpt.value = (parseInt(firstIpt.value) - 32) * 5/9 + 273.15 
	}else if(firstSelect.value === "2" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Farenheit -> Rankine
		 secondIpt.value = parseInt(firstIpt.value) + 459.67
	}else if(firstSelect.value === "3" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Reamur -> Celcius
		 secondIpt.value = parseInt(firstIpt.value) * (5/4)
	}else if(firstSelect.value === "3" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Reamur -> Farenheit
		 secondIpt.value = parseInt(firstIpt.value) * (9/4) + 32 
	}else if(firstSelect.value === "3" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Reamur -> Kelvin
		 secondIpt.value = parseInt(firstIpt.value) * (5/4) + 273.15 
	}else if(firstSelect.value === "3" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Reamur -> Rankine
		 secondIpt.value = parseInt(firstIpt.value) * 9/4 + 491.67
	}else if(firstSelect.value === "4" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Kelvin -> Celcius
		 secondIpt.value = parseInt(firstIpt.value) - 273.15 
	}else if(firstSelect.value === "4" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Kelvin -> Farenheit
		 secondIpt.value = parseInt(firstIpt.value) * 9/5 - 459.67
	}else if(firstSelect.value === "4" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Kelvin -> Reamur
		 secondIpt.value = (parseInt(firstIpt.value) - 273.15) * 4/5
	}else if(firstSelect.value === "4" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Kelvin -> Rankine
		 secondIpt.value = parseInt(firstIpt.value)* 9/5 
	}else if(firstSelect.value === "5" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Rankine -> Celcius
		 secondIpt.value = ( parseInt(firstIpt.value) - 491.67) * 5/9 
	}else if(firstSelect.value === "5" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Rankine -> Farenheit
		 secondIpt.value = parseInt(firstIpt.value)	- 459.67
	}else if(firstSelect.value === "5" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Rankine -> Reamur
		 secondIpt.value = (parseInt(firstIpt.value) - 491.67) * 4/9
	}else if(firstSelect.value === "5" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Rankine -> Kelvin
		 secondIpt.value = parseInt(firstIpt.value)  * 5/9 
	} else if(firstSelect.value === secondSelect.value  && firstIpt.value !== "") {
		 secondIpt.value = firstIpt.value	
	} else if(firstIpt.value == "") {
		secondIpt.value = ""
	}
	
	if(secondIpt.value == "NaN") {
		secondIpt.value = ""
	}
}

// This function is for returning alert
function AlertHandler(alert, bg) {
	document.getElementById("alert-container").innerHTML = `
	<div class="alert alert-${bg} alert-dismissible fade show" role="alert">
	${alert}
	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
	`
}