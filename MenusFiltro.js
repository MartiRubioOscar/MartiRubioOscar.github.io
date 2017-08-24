function MenuVentana(nombreDesplegable,opcionesDesplegable,seleccionada){
	d3.select("#navegadorDiv").append("select")
		.attr("onchange","myFunctionWDesplegable" + nombreDesplegable + "()")
		.attr("id", "WDesplegable" + nombreDesplegable)
	d3.select("#navegadorDiv").append("br")
	d3.select("#WDesplegable" + nombreDesplegable).selectAll("option")
		.data(opcionesDesplegable).enter().append("option")
		.attr("class","desp").text(function (d){return d})
	var elementoSeleccionado = document.getElementsByClassName('desp')
	elementoSeleccionado[seleccionada].selected = true
}

function MenuVentana2(nombreDesplegable,opcionesDesplegable,seleccionada){
	d3.select("#navegadorDiv").append("select")
		.attr("onchange","myFunctionWDesplegable" + nombreDesplegable + "()")
		.attr("id", "WDesplegable" + nombreDesplegable)
	d3.select("#navegadorDiv").append("br")
	d3.select("#WDesplegable" + nombreDesplegable).selectAll("option")
		.data(opcionesDesplegable).enter().append("option")
		.attr("class","desp2").text(function (d){return d})
	var elementoSeleccionado = document.getElementsByClassName('desp2') /////////esto es lo que cambia respecto a MenuVentana
	elementoSeleccionado[seleccionada].selected = true
}



function MenuRanking(){
	//d3.select("#navegadorDiv").append("button").attr("class","buttonSort").attr("id","buttonOriginal").attr("onclick","myFunctionSort('NO')").text("original")
	//d3.select("#navegadorDiv").append("button").attr("class","buttonSort").attr("id","buttonRanking").attr("onclick","myFunctionSort('SI')").text("ranking")

	d3.select("#espacioBotones").append("button").attr("id","rankingOff").attr("onclick","myFunctionSort('NO')").text("original")
	d3.select("#espacioBotones").append("button").attr("id","rankingOn").attr("onclick","myFunctionSort('SI')").text("ranking")
	//d3.select("#espacioBotones").append("br")
}
function MenuVariacionAnual(){
	d3.select("#variacionAnualOff").remove()
    d3.select("#variacionAnualOn").remove()
	d3.select("#espacioBotones").append("button")
	.attr("onclick","myFunctionVariacionAnual('NO')").text("valores")
	.attr("id","variacionAnualOff")
	
	d3.select("#espacioBotones").append("button")
	.attr("onclick","myFunctionVariacionAnual('SI')").text("variacion anual")
	.attr("id","variacionAnualOn")
}
function MenuPorcentaje(){
	d3.select("#espacioBotones").append("button").attr("onclick","myFunctionPorcentaje('NO')").text("abs")
	d3.select("#espacioBotones").append("button").attr("onclick","myFunctionPorcentaje('SI')").text("%")
	d3.select("#espacioBotones").append("br")
}

function MenuDesde(YearsFrom, YearsTo){
	var vector = []
	for (var i = YearsTo; i > (YearsFrom-1); i--) {
		vector.push(i)
	};
	d3.select("#navegadorDiv").append("select").attr("name","rangoDesde")
		.attr("onchange","myFunctionDesde()").attr("id", "IDdesde")
	d3.select("#IDdesde").selectAll("option").data(vector).enter().append("option").attr("class","desde")
		.text(function(d){return d}).attr("id", function(d){return "desde" + d})
}

function MenuHasta(YearsFrom, YearsTo){
	var vectorH = []
	for (var i = YearsTo; i > (YearsFrom-1); i--) {
		vectorH.push(i)
	};
	
	d3.select("#navegadorDiv").append("select").attr("name","rangoHasta")
		.attr("onchange","myFunctionHasta()").attr("id", "IDhasta")
	d3.select("#IDhasta").selectAll("option").data(vectorH).enter().append("option").attr("class","hasta")
		.text(function(d){return d}).attr("id", function(d){return "hasta" + d})
}

function MenuCheckBoxLocalizacion(){
	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Barcelona")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr00")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Ciutat Vella")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr01").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Eixample")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr02").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Sants-Montjuïc")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr03").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")
	
	d3.select("#navegadorDiv")
		.append("label").text("Les Corts")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr04").property("checked","true")
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Sarrià-Sant Gervasi")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr05").property("checked","true")
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Gràcia")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr06").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Horta-Guinardó")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr07").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Nou Barris")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr08").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Sant Andreu")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr09").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Sant Martí")
		.append("input").attr("class","largerCheckbox").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBox()").attr("id","Distr10").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")
}

function MenuCheckBoxTipoVuelo(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Total")
		.append("input").attr("class","CheckboxAeropuerto").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTipoVuelo()")
			.attr("id","AeropuertoTotal").property("checked","true")
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Nacional")
		.append("input").attr("class","CheckboxAeropuerto").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTipoVuelo()")
			.attr("id","AeropuertoNacional").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Internacional")
		.append("input").attr("class","CheckboxAeropuerto").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTipoVuelo()")
			.attr("id","AeropuertoInternacional").property("checked","true")
		
}

function MenuCheckBoxTemperaturas(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Media")
		.append("input").attr("class","CheckboxTemperaturas").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTemperaturas()")
			.attr("id","Media").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Mínima")
		.append("input").attr("class","CheckboxTemperaturas").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTemperaturas()")
			.attr("id","Minima").property("checked","true")
		
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Máxima")
		.append("input").attr("class","CheckboxTemperaturas").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTemperaturas()")
			.attr("id","Maxima").property("checked","true")
		
}

function MenuCheckBoxSexo(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Hombres")
		.append("input").attr("class","CheckboxSexo").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxSexo()")
			.attr("id","Hombres").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Mujeres")
		.append("input").attr("class","CheckboxSexo").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxSexo()")
			.attr("id","Mujeres").property("checked","true")
		
}
function MenuCheckBoxEdadTurista(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("15-17 años")
		.append("input").attr("class","CheckboxEdadTurista").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxEdadTurista()")
			.attr("id","rangoEdadT1").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("18-24 años")
		.append("input").attr("class","CheckboxEdadTurista").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxEdadTurista()")
			.attr("id","rangoEdadT2").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("25-34 años")
		.append("input").attr("class","CheckboxEdadTurista").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxEdadTurista()")
			.attr("id","rangoEdadT3").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("35-44 años")
		.append("input").attr("class","CheckboxEdadTurista").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxEdadTurista()")
			.attr("id","rangoEdadT4").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("45-54 años")
		.append("input").attr("class","CheckboxEdadTurista").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxEdadTurista()")
			.attr("id","rangoEdadT5").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("más de 55 años")
		.append("input").attr("class","CheckboxEdadTurista").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxEdadTurista()")
			.attr("id","rangoEdadT6").property("checked","true")
			
}

function MenuCheckBoxGasto(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Transporte")
		.append("input").attr("class","CheckboxGasto").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxGasto()")
			.attr("id","Transporte").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Alojamiento")
		.append("input").attr("class","CheckboxGasto").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxGasto()")
			.attr("id","Alojamiento").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Estancia")
		.append("input").attr("class","CheckboxGasto").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxGasto()")
			.attr("id","Estancia").property("checked","true")			
		
}

function MenuCheckBoxMotivos(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Vacacional")
		.append("input").attr("class","CheckboxMotivos").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxMotivos()")
			.attr("id","Vacacional").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Profesional")
		.append("input").attr("class","CheckboxMotivos").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxMotivos()")
			.attr("id","Profesional").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Personal y otros")
		.append("input").attr("class","CheckboxMotivos").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxMotivos()")
			.attr("id","Personal").property("checked","true")			
		
}

function MenuCheckBoxDiasAlojamiento(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Hoteles")
		.append("input").attr("class","CheckboxAlojamientoPT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxAlojamientoPT()")
			.attr("id","HotelesPT").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Pensiones y hostales")
		.append("input").attr("class","CheckboxAlojamientoPT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxAlojamientoPT()")
			.attr("id","PensionesPT").property("checked","true")
		
}

function MenuCheckBoxRepeT(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Primera visita")
		.append("input").attr("class","CheckboxRepeT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxRepeT()")
			.attr("id","PrimeraT").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Segunda visita")
		.append("input").attr("class","CheckboxRepeT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxRepeT()")
			.attr("id","SegundaT").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Tercera o más")
		.append("input").attr("class","CheckboxRepeT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxRepeT()")
			.attr("id","TerceraT").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("NS NC")
		.append("input").attr("class","CheckboxRepeT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxRepeT()")
			.attr("id","NSNCT").property("checked","true")
		
}

function MenuCheckBoxTransporteT(){

	d3.select("#navegadorDiv").append("br")
	d3.select("#navegadorDiv")
		.append("label").text("Avión")
		.append("input").attr("class","CheckboxTransporteT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTransporteT()")
			.attr("id","AvionT").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Coche")
		.append("input").attr("class","CheckboxTransporteT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTransporteT()")
			.attr("id","CocheT").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Ferrocarril")
		.append("input").attr("class","CheckboxTransporteT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTransporteT()")
			.attr("id","FerrocarrilT").property("checked","true")
	
	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Autocar")
		.append("input").attr("class","CheckboxTransporteT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTransporteT()")
			.attr("id","AutocarT").property("checked","true")

	d3.select("#navegadorDiv").append("br")

	d3.select("#navegadorDiv")
		.append("label").text("Otros")
		.append("input").attr("class","CheckboxTransporteT").attr("type","checkbox")
			.attr("onclick","myFunctionCheckBoxTransporteT()")
			.attr("id","OtrosT").property("checked","true")
		
}
function MenuCheckBoxBcnInfAero(){

	automatizacionMenuCheckBox("11")		

}
function MenuCheckBoxBcnClimaTemp(){

	automatizacionMenuCheckBox("12")		

}


function MenuCheckBoxTurTuriGenero(){

	automatizacionMenuCheckBox("14")		

}
function MenuCheckBoxTurTuriEdad(){

	automatizacionMenuCheckBox("15")		

}
function MenuCheckBoxTurTuriGasto(){

	automatizacionMenuCheckBox("16")		

}
function MenuCheckBoxTurTuriMotivo(){

	automatizacionMenuCheckBox("17")		

}
function MenuCheckBoxTurTuriDiasAlo(){

	automatizacionMenuCheckBox("18")		

}



function MenuCheckBoxTurTuriRepe(){

	automatizacionMenuCheckBox("19")		

}
function MenuCheckBoxTurTuriTransport(){

	automatizacionMenuCheckBox("20")		

}
function MenuCheckBoxTrabajadoresSector(){

	automatizacionMenuCheckBox("21")		

}
function MenuCheckBoxSituacionLaboral(){

	automatizacionMenuCheckBox("22")		

}

function MenuCheckBoxBcnEcoPIB(){

	automatizacionMenuCheckBox("23")		

}
function MenuCheckBoxBcnEcoSalariosSector(){

	automatizacionMenuCheckBox("24")		

}

function MenuCheckBoxTurRNumReunion(){

	automatizacionMenuCheckBox("25")		

}

function MenuCheckBoxTurRAsisReunion(){

	automatizacionMenuCheckBox("26")		

}

function MenuCheckBoxTurAloNumHP(){

	automatizacionMenuCheckBox("29")		

}

function MenuCheckBoxTurAloPlazasHP(){

	automatizacionMenuCheckBox("30")		

}

function MenuCheckBoxTurCultTop(){

	automatizacionMenuCheckBox("31")		

}

function MenuCheckBoxTurPerfilNacionalidad(){

	automatizacionMenuCheckBox("39")		

}

function MenuCheckBoxBcnPobEdades(){
	automatizacionMenuCheckBox("43")
}

function MenuCheckBoxBcnPobNacionalidad(){
	automatizacionMenuCheckBox("44")
}

function MenuCheckBoxBcnPobTest(){
	automatizacionMenuCheckBox("45")	
}

function MenuCheckBoxTurAloPlazasDistrTest(){
	automatizacionMenuCheckBox("46")	
}
function MenuCheckBoxBcnSuperficie(){
	automatizacionMenuCheckBox("47")	
}
function MenuCheckBoxBcnPobDensidadTest(){
	automatizacionMenuCheckBox("48")	
}
function MenuCheckBoxBcnVivNuevaTest(){
	automatizacionMenuCheckBox("49")	
}
function MenuCheckBoxBcnVivSegundaManoTest(){
	automatizacionMenuCheckBox("50")	
}
function MenuCheckBoxBcnVivAlquilerTest(){
	automatizacionMenuCheckBox("51")	
}
function MenuEvolucion(){
	d3.select("#navegadorDiv").append("button")
		.attr("onclick","myFunctionEvolution()").attr("id", "IDevolution").text("EVOLUCION")
}
function myFunctionEvolution(){
	//alert("dentro de myFunctionEvolution: " + ID_VIP)
	controlEVOLUTION=true;
	activar2(ID_VIP)
	//InitChart()
}
////////////////// DATASET 01
function loadMenu(datasetActivo){ 
	switch(datasetActivo) {
	    case "01": // graphic01 POBLACIÓN HABITANTES
	        document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 0

			MenuVentana(nomDesplegable,opDesplegable,posVentana)

			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)

			// botones de valor absoluto o porcentaje
			var identificadorGr = miVentanaActiva()
			
			/*if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear==resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuRanking()}*/
            MenuPorcentaje()
            MenuRanking()
			
			// botones de ranking y original
			//MenuRanking()			
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			

			// Check box localización
			MenuCheckBoxLocalizacion()
			//Menu Variación anual()
	        
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual();d3.select(".buttonSort").remove()}


	        break;
	    case "02": // graphic02 PLAZAS DE HOTEL por distrito
	        document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 2

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			
			// botones de ranking y original
			MenuRanking();
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			// DESDE y hasta
			MenuDesde(2012, 2015)
			MenuHasta(2012, 2015)
			// Check box localización
			MenuCheckBoxLocalizacion()
			//MenuEvolucion()
	        MenuVariacionAnual()
	        break;			    
	    case "03": // graphic03 SUPERFICIE DE LOS DISTRITOS DE BCN
	    	document.getElementById("navegadorDiv").innerHTML=""; 
	    	// borro todo el contenido del div del navegador
			//document.getElementById("IDhasta").innerHTML="";
			//document.getElementById("IDdesde").innerHTML="";
				// Ventana desplegable Población
			var nomDesplegable = "Clima"
			var opDesplegable = ["Temperaturas", "Precipitaciones","Superfície"]
			var posVentana = 2

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)// botones de valor absoluto o porcentaje
			MenuPorcentaje("NO")
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			//MenuDesde(2006, 2015)
			//MenuHasta(2006, 2016)
			// Check box localización
			MenuCheckBoxLocalizacion()
	   		break;
	    case "04": // graphic04 DENSIDAD DE POBLACIÓN habitantes/km^2
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 1

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			//MenuPorcentaje("NO")
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			// Check box localización
			MenuCheckBoxLocalizacion()
	        break;
/*	    case "06": // graphic06 VARIACIÓN ANUAL POBLACIÓN
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 2

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			// botones de valor absoluto o porcentaje
			//MenuPorcentaje("NO")
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			// Check box localización
			MenuCheckBoxLocalizacion()
			MenuVariacionAnual()
	        break;*/
	    case "07": // graphic06 VARIACIÓN ANUAL POBLACIÓN
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Vivienda"
			var opDesplegable = ["Vivienda Nueva", "Vivienda Segunda mano","Vivienda de alquiler"]
			var posVentana = 0

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			//MenuPorcentaje("NO")
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			// Check box localización
			MenuCheckBoxLocalizacion()
			var identificadorGr = miVentanaActiva()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
	        break;
	    case "08": // graphic06 VARIACIÓN ANUAL POBLACIÓN
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Vivienda"
			var opDesplegable = ["Vivienda Nueva", "Vivienda Segunda mano","Vivienda de alquiler"]
			var posVentana = 1

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			//MenuPorcentaje("NO")
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			// Check box localización
			MenuCheckBoxLocalizacion()
			var identificadorGr = miVentanaActiva()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
	        break;
	    case "09": // graphic06 VARIACIÓN ANUAL POBLACIÓN
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Vivienda"
			var opDesplegable = ["Vivienda Nueva", "Vivienda Segunda mano","Vivienda de alquiler"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			//MenuPorcentaje("NO")
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			// Check box localización
			MenuCheckBoxLocalizacion()
			var identificadorGr = miVentanaActiva()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
	        break;
	    case "10": // graphic06 VARIACIÓN ANUAL POBLACIÓN
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Infraestructuras"
			var opDesplegable = ["Pasajeros Puerto", "Pasajeros Aeropuerto"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			// Check box localización
			//MenuCheckBoxLocalizacion()
			MenuVariacionAnual()
	        break;
	    case "11": // graphic06 VARIACIÓN ANUAL POBLACIÓN
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Infraestructuras"
			var opDesplegable = ["Pasajeros Puerto", "Pasajeros Aeropuerto"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			//MenuCheckBoxTipoVuelo()
			MenuCheckBoxBcnInfAero()
			// Check box localización
			//MenuCheckBoxLocalizacion()
			MenuVariacionAnual()
	        break;
	    case "12": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Clima"
			var opDesplegable = ["Temperaturas", "Precipitaciones","Superfície"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2015)
			MenuHasta(2006, 2015)
			

			//MenuCheckBoxTemperaturas()
			MenuCheckBoxBcnClimaTemp()
			MenuVariacionAnual()
	        break;

	    case "13": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Clima"
			var opDesplegable = ["Temperaturas", "Precipitaciones","Superfície"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box localización
			//MenuCheckBoxLocalizacion()
	        break;
	    case "14": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxSexo()
			MenuCheckBoxTurTuriGenero()
			MenuVariacionAnual()
	        break;
	    case "15": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxEdadTurista()
			MenuCheckBoxTurTuriEdad()
			MenuVariacionAnual()
	        break;	     
	    case "16": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)

			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxGasto()
			MenuCheckBoxTurTuriGasto()
			MenuVariacionAnual()
	        break;
	    case "17": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 3
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxMotivos()
			MenuCheckBoxTurTuriMotivo()
			MenuVariacionAnual()
	        break;	        	       
	    case "18": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 4
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxDiasAlojamiento()
			MenuCheckBoxTurTuriDiasAlo()
			MenuVariacionAnual()
	        break;	        
	    case "19": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 5
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxRepeT()
			MenuCheckBoxTurTuriRepe()
			MenuVariacionAnual()
	        break;	        
	    case "20": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 6
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxTransporteT()
			MenuCheckBoxTurTuriTransport()
			MenuVariacionAnual()
	        break;	        
	    case "21": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Economia"
			var opDesplegable = ["Trabajadores Sector", "Situación Laboral","PIB","Salarios Sectores"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxTrabajadoresSector()

			MenuVariacionAnual()
	        break;	        
	    case "22": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Economia"
			var opDesplegable = ["Trabajador Sector", "Situación Laboral","PIB","Salarios Sectores"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxSituacionLaboral()
	        MenuVariacionAnual()
	        break;
	    case "23": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Economia"
			var opDesplegable = ["Trabajador Sector", "Situación Laboral","PIB","Salarios Sectores"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2007, 2015)
			MenuHasta(2007, 2015)
			
			// Check box sexo
			MenuCheckBoxBcnEcoPIB()
	        MenuVariacionAnual()
	        break;
	    case "24": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Economia"
			var opDesplegable = ["Trabajador Sector", "Situación Laboral","PIB","Salarios Sectores"]
			var posVentana = 3
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2010, 2015)
			MenuHasta(2010, 2015)
			
			// Check box sexo
			MenuCheckBoxBcnEcoSalariosSector()
	        MenuVariacionAnual()
	        break;	
	    case "25": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxTurRNumReunion()
			MenuVariacionAnual()
	        break;	 
	    case "26": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxTurRAsisReunion()
			MenuVariacionAnual()
	        break;	 	                       
	   	case "27": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 3
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2015)
			MenuHasta(2006, 2015)
			
			// Check box sexo
			//MenuCheckBoxBcnEcoSalariosSector()
			MenuVariacionAnual()
	        break;	       
	   	case "28": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 4
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2015)
			MenuHasta(2006, 2015)
			
			// Check box sexo
			//MenuCheckBoxBcnEcoSalariosSector()
			MenuVariacionAnual()
	        break;	
	    case "29": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			MenuPorcentaje();
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2015)
			MenuHasta(2006, 2015)
			
			// Check box sexo
			MenuCheckBoxTurAloNumHP()
			MenuVariacionAnual()
	        break;	
	    case "30": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			
			// botones de ranking y original
			MenuPorcentaje();
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2015)
			MenuHasta(2006, 2015)
			
			// Check box sexo
			MenuCheckBoxTurAloPlazasHP()
			MenuVariacionAnual()
	        break;	  
	    case "31": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 0
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2010, 2015)
			MenuHasta(2010, 2015)
			
			// Check box sexo
			MenuCheckBoxTurCultTop()
			MenuVariacionAnual()
	        break;
	    case "32": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;
	    case "33": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;
	    case "34": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 3
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;
	    case "35": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 4
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;	        	        	        	        
	    case "36": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 5
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;
	    case "37": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurCultura"
			var opDesplegable = ["Top visitas lugares de interés","Espacios de ocio","Lugares de interés arquitectónico","Centros de exposiciones","Museos y Colecciones","Transportes singulares","Resumen Lugares Interés"]
			var posVentana = 6
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;
	    case "38": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			//MenuDesde(2010, 2015)
			//MenuHasta(2010, 2015)
			
			// Check box sexo
			//MenuCheckBoxTurCultTop()
	        break;	        	        	        
	    case "39": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "PerfilTurista"
			var opDesplegable = ["Género", "Edad","Gasto","Motivos","Días Alojamiento","Repetibilidad","Transporte","Nacionalidad"]
			var posVentana = 7
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2009, 2015)
			MenuHasta(2009, 2015)
			
			// Check box sexo
			MenuCheckBoxTurPerfilNacionalidad()
			MenuVariacionAnual()
	        break;	
	    case "40": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 5
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxTurAloOcupacion()
			MenuVariacionAnual()
	        break;
	    case "41": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 6
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			//MenuCheckBoxTurAloOcupacion()
	        MenuVariacionAnual()
	        break;	        
	    case "42": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 7
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			
			// botones de ranking y original
			//MenuRanking();
			// DESDE y hasta
			MenuDesde(2009, 2016)
			MenuHasta(2009, 2016)
			
			// Check box sexo
			//MenuCheckBoxTurAloOcupacion()
			MenuVariacionAnual()
	        break;	        
	    case "43": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			// segundo desplegable: selección de distrito
			
			var nomDesplegableDistr = "PoblacionDistrito"
			var opDesplegableDistr = ["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"]
			var posVentanaDistr = 0
			var resultadoPosDespl			
			var posMatrix=miPosicionResumenMAT(PosicionGraficoActivo())
			
			for (var i = 0; i < opDesplegableDistr.length; i++) {
					if (resumenMAT[posMatrix].FBcnPobDistr==opDesplegableDistr[i]){
						resultadoPosDespl=i
					}
			};
			posVentanaDistr=resultadoPosDespl

			MenuVentana2(nomDesplegableDistr,opDesplegableDistr,posVentanaDistr)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box Edades
			MenuCheckBoxBcnPobEdades()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
			//MenuVariacionAnual()
	        break;
	    case "44": 
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 3
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			
			
			// segundo desplegable: selección de distrito
			
			var nomDesplegableDistr = "PoblacionDistrito"
			var opDesplegableDistr = ["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"]
			var posVentanaDistr = 0
			
			var resultadoPosDespl			
			var posMatrix=miPosicionResumenMAT(PosicionGraficoActivo())
			
			for (var i = 0; i < opDesplegableDistr.length; i++) {
					if (resumenMAT[posMatrix].FBcnPobDistr==opDesplegableDistr[i]){
						resultadoPosDespl=i
					}
			};
			posVentanaDistr=resultadoPosDespl
			
			MenuVentana2(nomDesplegableDistr,opDesplegableDistr,posVentanaDistr)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de valor absoluto o porcentaje
			MenuPorcentaje()
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			
			MenuCheckBoxBcnPobNacionalidad()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
			//MenuVariacionAnual()
	        break;	
	    case "45": 
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 0

			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 3*/

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			MenuPorcentaje();
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxBcnPobTest()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
	        break;	     	    
	    case "46": // Plazas hotel y distrito
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 4*/
			var nomDesplegable = "TurAlojamiento"
			var opDesplegable = ["Número de hoteles","Plazas en hoteles","Plazas hotel por distrito","Licencias VUT","Plazas VUT","Ocupación hotelera","Empleados en hoteles","Precio hoteles"]
			var posVentana = 2
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			MenuPorcentaje();
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2012, 2015)
			MenuHasta(2012, 2015)
			
			// Check box sexo
			MenuCheckBoxTurAloPlazasDistrTest()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
	        break;
	    case "47": 
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 5*/
			var nomDesplegable = "Clima"
			var opDesplegable = ["Temperaturas", "Precipitaciones","Superfície"]
			var posVentana = 2

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			MenuPorcentaje();
			
			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			//MenuDesde(2012, 2015)
			//MenuHasta(2012, 2015)
			
			// Check box sexo
			MenuCheckBoxBcnSuperficie()
			//MenuVariacionAnual()
	        break;
	    case "48": 
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 6*/
			var nomDesplegable = "Poblacion"
			var opDesplegable = ["Habitantes", "Densidad de poblacion","Población por Edades","Población por Nacionalidad"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			//MenuPorcentaje();
			

			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxBcnPobDensidadTest()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
			//MenuVariacionAnual()
	        
	        break;
	    case "49": 
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 7*/
			var nomDesplegable = "Vivienda"
			var opDesplegable = ["Vivienda Nueva", "Vivienda Segunda mano","Vivienda de alquiler"]
			var posVentana = 0
			
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			//MenuPorcentaje();
			

			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2015)
			MenuHasta(2006, 2015)
			
			// Check box sexo
			MenuCheckBoxBcnVivNuevaTest()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
			//MenuVariacionAnual()
	        
	        break;
	    case "50": 
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 8*/

			var nomDesplegable = "Vivienda"
			var opDesplegable = ["Vivienda Nueva", "Vivienda Segunda mano","Vivienda de alquiler"]
			var posVentana = 1
			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			//MenuPorcentaje();
			

			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxBcnVivSegundaManoTest()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
			//MenuVariacionAnual()
	        
	        break;
	    case "51": 
	    	//alert("en Menu 45 test")
			document.getElementById("navegadorDiv").innerHTML=""; // borro todo el contenido del div del navegador
			// Ventana desplegable Población
			/*var nomDesplegable = "TurReuniones"
			var opDesplegable = ["Número de Reuniones", "Asistentes a Reuniones","Ferias principales","TEST","Plazas por distrito","Superfície","Densidad","Vivienda Nueva","Vivienda 2a mano","Vivienda alquiler"]
			var posVentana = 9*/
			var nomDesplegable = "Vivienda"
			var opDesplegable = ["Vivienda Nueva", "Vivienda Segunda mano","Vivienda de alquiler"]
			var posVentana = 2

			MenuVentana(nomDesplegable,opDesplegable,posVentana)
			d3.select("#navegadorDiv").append("div").attr("id","espacioBotones").classed("botonesNav",true)
			// botones de ranking y original
			//MenuPorcentaje();
			

			// botones de ranking y original
			MenuRanking();
			// DESDE y hasta
			MenuDesde(2006, 2016)
			MenuHasta(2006, 2016)
			
			// Check box sexo
			MenuCheckBoxBcnVivAlquilerTest()
			if (resumenMAT[miPosicionResumenMAT(identificadorGr)].desdeYear<resumenMAT[miPosicionResumenMAT(identificadorGr)].hastaYear)
                    {MenuVariacionAnual()}
			//MenuVariacionAnual()
	        
	        break;	     	        	     	        
	    default:
	        console.log("default")

	}

}
					