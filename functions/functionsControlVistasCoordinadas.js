function ordenfiltradoVistasCoordinadas(idVip,colores_ventanas){
// le entran los colores y devuelve el ID_VIP y workFrame que domina y que debe filtrar al otro.
// solamente en caso de vistas coordinadas
	var resultado=[]
  var ventanaActual = miGraficoActivo_window_from_IDVIP(idVip)

  if (idVip!="gr1" && d3.select(ventanaActual)[0][0].className=="paleGreen"){
    for (var i = 0; i < colores_ventanas.length; i++) {
      if (colores_ventanas[i]=="greenMandon"){
        var id_vip_Mandon = d3.scale.ordinal()
        .domain([0,1,2,3,4,5,6])
        .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
        var id_vipM = id_vip_Mandon(i)
      }
    };
    idVip=id_vipM
  }
  var workFRAME= miWorkFrame_fromIDVIP(idVip)
  resultado = [idVip,workFRAME]
	return resultado

}


function seleccionWindow4(event, ventanaClicada,ctrlPrimera,ventanaPrimera){
		if (ctrlPrimera=="SI"){ventanaClicada=miGraficoActivo_WINDOW(ventanaPrimera)}
		//alert(ventanaClicada)
		function restoVentanas(ventanaClick){
			restoWindows=[];

				switch(ventanaClick) {
				    case 'window41':
						restoWindows = ["window42", "window43","window44"]		
				        break;
				    case 'window42':
				        restoWindows = ["window41", "window43","window44"]
				        break;
				    case 'window43':
				    	restoWindows = ["window41", "window42","window44"]
				        break;
				    case 'window44':
				    	restoWindows = ["window41", "window42","window43"]
				        break;
				    default:
				        alert("error de entrada")
				}
			
			return restoWindows
		}

		var LAYOUT_activo

			var colores = [];
			colores[0] = d3.select("#window41")[0][0].className
			colores[1] = d3.select("#window42")[0][0].className
			colores[2] = d3.select("#window43")[0][0].className
			colores[3] = d3.select("#window44")[0][0].className
			LAYOUT_activo = "cuatro"
		var colors = colores ;
		var estadoRed;
		var estadoGreen;
		var estadoGreenMandon;
		var estadoPaleGreen;
		estadoRed = colors.filter(function(el){ return el == "red"})
		estadoGreen = colors.filter(function(el){ return el == "green"})
		estadoPaleGreen = colors.filter(function(el){ return el == "paleGreen"})
		estadoGreenMandon = colors.filter(function(el){ return el == "greenMandon"})


		datosOtrasVentanas = restoVentanas(ventanaClicada)
		

		var identificadorGr = miIDgrafico(miGraficoActivo(ventanaClicada))
    if (identificadorGr=="noG" || identificadorGr=="NADA"){alert("Se debe introducir un gráfico primero")}
	else{
		if (event.ctrlKey) {

		    switch(d3.select("#" + ventanaClicada)[0][0].className) {
				    case "blue":
				    	if (estadoGreen[0]=="green" || estadoGreenMandon[0]=="greenMandon"){
				    		d3.select("#" + ventanaClicada)[0][0].className="paleGreen";
				    		for (var i = 0; i < datosOtrasVentanas.length; i++) {
				    			if (d3.select("#" + datosOtrasVentanas[i])[0][0].className =="green")
				    			{d3.select("#" + datosOtrasVentanas[i])[0][0].className="greenMandon"}
				    			if (d3.select("#" + datosOtrasVentanas[i])[0][0].className =="red")
				    			{d3.select("#" + datosOtrasVentanas[i])[0][0].className="blue"}
				    		};
				    	}
				    	else {d3.select("#" + ventanaClicada)[0][0].className="greenMandon"}
				    	if (estadoRed[0]=="red" && !(estadoGreen[0]=="green" || estadoGreenMandon[0]=="greenMandon")){
				    		for (var i = 0; i < datosOtrasVentanas.length; i++) {
				    			//alert(d3.select("#" + datosOtrasVentanas[i])[0][0].className)
				    			if (d3.select("#" + datosOtrasVentanas[i])[0][0].className=="red")
				    			{d3.select("#" + datosOtrasVentanas[i])[0][0].className="blue"}

				    		};
				    	}
				        
				        break;
				    case "red":
				        if (estadoGreen[0]=="green"  || estadoGreenMandon[0]=="greenMandon"){
				        	d3.select("#" + ventanaClicada)[0][0].className="paleGreen";
				        	for (var i = 0; i < datosOtrasVentanas.length; i++) {
				    			if (d3.select("#" + datosOtrasVentanas[i])[0][0].className=="green")
				    			{d3.select("#" + datosOtrasVentanas[i])[0][0].className="greenMandon"}
				    		};
				    	}
				    		else {d3.select("#" + ventanaClicada)[0][0].className="greenMandon"}
				    	
				        break;
				    case "green":
				        d3.select("#" + ventanaClicada)[0][0].className="red"
				    		for (var i = 0; i < datosOtrasVentanas.length; i++) {
				    			d3.select("#" + datosOtrasVentanas[i])[0][0].className="blue"
				    		};
				        break;
				    case "greenMandon":
				        d3.select("#" + ventanaClicada)[0][0].className="red"
				    		for (var i = 0; i < datosOtrasVentanas.length; i++) {
				    			d3.select("#" + datosOtrasVentanas[i])[0][0].className="blue"
				    		};
				        break;
					case "paleGreen":
						d3.select("#" + ventanaClicada)[0][0].className="red"
							for (var i = 0; i < datosOtrasVentanas.length; i++) {
				    			if (d3.select("#" + datosOtrasVentanas[i])[0][0].className=="greenMandon")
				    			{d3.select("#" + datosOtrasVentanas[i])[0][0].className="green"}
				    			if (d3.select("#" + datosOtrasVentanas[i])[0][0].className=="red")
				    			{d3.select("#" + datosOtrasVentanas[i])[0][0].className="blue"}
				    		};
				        break;			      
				    default:
				        alert("code block")
			}
			    
		}
		else {
    		

    		switch(ventanaClicada) {
			    case 'window41':
			    	switch(d3.select("#window41")[0][0].className) {
			    		case "blue":
							//alert("a rojo")
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "greenMandon"){
								d3.select("#window42")[0][0].className = "green"	
							}
							if (d3.select("#window43")[0][0].className == "greenMandon"){
								d3.select("#window43")[0][0].className = "green"	
							}
							if (d3.select("#window44")[0][0].className == "greenMandon"){
								d3.select("#window44")[0][0].className = "green"	
							}
							d3.select("#window41")[0][0].className = "red"

							//console.log(d3.select("#window41")[0][0].className)
						break;
						case "red":
							//alert("a azul")
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "greenMandon"){
								d3.select("#window42")[0][0].className = "green"	
							}
							if (d3.select("#window43")[0][0].className == "greenMandon"){
								d3.select("#window43")[0][0].className = "green"	
							}
							if (d3.select("#window44")[0][0].className == "greenMandon"){
								d3.select("#window44")[0][0].className = "green"	
							}
							d3.select("#window41")[0][0].className="red"
						break;
						case "green":
							//alert("GREEN 41")
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							d3.select("#window41")[0][0].className = "greenMandon"

						break;
						case "paleGreen":
							//alert("a azul")
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "green"){
								d3.select("#window42")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window43")[0][0].className == "green"){
								d3.select("#window43")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window44")[0][0].className == "green"){
								d3.select("#window44")[0][0].className = "greenMandon"	
							}
							d3.select("#window41")[0][0].className="paleGreen"
						break;	
						
			        }
			    break;
			    case 'window42':
			    	switch(d3.select("#window42")[0][0].className) {
			    		case "blue":
							//alert("a rojo")
							
							d3.select("#window42")[0][0].className = "red"
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
							
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window41")[0][0].className == "greenMandon"){
								d3.select("#window41")[0][0].className = "green"	
							}
							if (d3.select("#window43")[0][0].className == "greenMandon"){
								d3.select("#window43")[0][0].className = "green"	
							}
							if (d3.select("#window44")[0][0].className == "greenMandon"){
								d3.select("#window44")[0][0].className = "green"	
							}

						break;
						case "red":
							//alert("a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window41")[0][0].className == "greenMandon"){
								d3.select("#window41")[0][0].className = "green"	
							}
							if (d3.select("#window43")[0][0].className == "greenMandon"){
								d3.select("#window43")[0][0].className = "green"	
							}
							if (d3.select("#window44")[0][0].className == "greenMandon"){
								d3.select("#window44")[0][0].className = "green"	
							}
							d3.select("#window42")[0][0].className="red"
						break;
						case "green":
							//alert("todo a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							d3.select("#window42")[0][0].className = "greenMandon"

						break;
						case "paleGreen":
							//alert("a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window41")[0][0].className == "green"){
								d3.select("#window41")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window43")[0][0].className == "green"){
								d3.select("#window43")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window44")[0][0].className == "green"){
								d3.select("#window44")[0][0].className = "greenMandon"	
							}
							d3.select("#window42")[0][0].className="paleGreen"
						break;	
						
			        }
			    break;
			    case 'window43':
			    	switch(d3.select("#window43")[0][0].className) {
			    		case "blue":
							//alert("a rojo")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "greenMandon"){
								d3.select("#window42")[0][0].className = "green"	
							}
							if (d3.select("#window41")[0][0].className == "greenMandon"){
								d3.select("#window41")[0][0].className = "green"	
							}
							if (d3.select("#window44")[0][0].className == "greenMandon"){
								d3.select("#window44")[0][0].className = "green"	
							}
							d3.select("#window43")[0][0].className = "red"

						break;
						case "red":
							//alert("a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "greenMandon"){
								d3.select("#window42")[0][0].className = "green"	
							}
							if (d3.select("#window41")[0][0].className == "greenMandon"){
								d3.select("#window41")[0][0].className = "green"	
							}
							if (d3.select("#window44")[0][0].className == "greenMandon"){
								d3.select("#window44")[0][0].className = "green"	
							}
							d3.select("#window43")[0][0].className="red"
						break;
						case "green":
							//alert("todo a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							d3.select("#window43")[0][0].className = "greenMandon"

						break;
						case "paleGreen":
							//alert("a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window44")[0][0].className == "red"){
								d3.select("#window44")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "green"){
								d3.select("#window42")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window41")[0][0].className == "green"){
								d3.select("#window41")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window44")[0][0].className == "green"){
								d3.select("#window44")[0][0].className = "greenMandon"	
							}
							d3.select("#window43")[0][0].className="paleGreen"
						break;	
						
			        }
			    break;
			    case 'window44':
			    	switch(d3.select("#window44")[0][0].className) {
			    		case "blue":
							//alert("bla bla bla")
							if (d3.select("#window41")[0][0].className == "red"){//alert("dentro");
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "greenMandon"){
								d3.select("#window42")[0][0].className = "green"	
							}
							if (d3.select("#window43")[0][0].className == "greenMandon"){
								d3.select("#window43")[0][0].className = "green"	
							}
							if (d3.select("#window41")[0][0].className == "greenMandon"){
								d3.select("#window41")[0][0].className = "green"	
							}
							d3.select("#window44")[0][0].className = "red"

						break;
						case "red":
							//alert("a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "greenMandon"){
								d3.select("#window42")[0][0].className = "green"	
							}
							if (d3.select("#window43")[0][0].className == "greenMandon"){
								d3.select("#window43")[0][0].className = "green"	
							}
							if (d3.select("#window41")[0][0].className == "greenMandon"){
								d3.select("#window41")[0][0].className = "green"	
							}
							d3.select("#window44")[0][0].className="red"
						break;
						case "green":
							//alert("todo a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							d3.select("#window44")[0][0].className = "greenMandon"

						break;
						case "paleGreen":
							//alert("a azul")
							if (d3.select("#window41")[0][0].className == "red"){
								d3.select("#window41")[0][0].className = "blue"	
							}
							if (d3.select("#window43")[0][0].className == "red"){
								d3.select("#window43")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "red"){
								d3.select("#window42")[0][0].className = "blue"	
							}
							if (d3.select("#window42")[0][0].className == "green"){
								d3.select("#window42")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window43")[0][0].className == "green"){
								d3.select("#window43")[0][0].className = "greenMandon"	
							}
							if (d3.select("#window41")[0][0].className == "green"){
								d3.select("#window41")[0][0].className = "greenMandon"	
							}
							d3.select("#window44")[0][0].className="paleGreen"
						break;	
					}
					break;

			    default:
			        alert("error de entrada")
			}
		}
		var ID_VIP_VC_off = 0 // el que manda no es de las vistas coordinadas
		var ID_VIP_VC_on = 0// el que manda es de vistas coordinadas
		var seguidores = [];
		for (var i = 0; i < colors.length; i++) {

			 	if (d3.select("#window4" + (i+1))[0][0].className=="paleGreen"){ //alert("hola")
			 		seguidores.push("#window4" + (i+1))
			 	}
			 	if (d3.select("#window4" + (i+1))[0][0].className=="red") 
			 	{
			 		ID_VIP_VC_off = miGraficoActivo("window4" + (i+1))
			 	}
			 	if (d3.select("#window4" + (i+1))[0][0].className=="greenMandon")
		 		{
		 			ID_VIP_VC_on = miGraficoActivo("window4" + (i+1))
		 		}	

		 };
		 miColorVentanaActiva(miNumGraficoActivo_fromWindow(ventanaClicada))
		 activar3(ID_VIP_VC_on,ID_VIP_VC_off,seguidores,colors)
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
function seleccionWindow2(event, ventanaClicada,ctrlPrimera,ventanaPrimera){
		if (ctrlPrimera=="SI"){ventanaClicada=miGraficoActivo_WINDOW(ventanaPrimera)}

		if (ventanaClicada=="window21"){otraVentana = "window22"}
		else{otraVentana = "window21"} 
			var colores = [];
			colores[0] = d3.select("#window21")[0][0].className
			colores[1] = d3.select("#window22")[0][0].className
			LAYOUT_activo = "dos"
		
		var colors = colores ;
		////////////////////////////////
		var estadoRed;
		var estadoGreen;
		var estadoGreenMandon;
		var estadoPaleGreen;
		estadoRed = colors.filter(function(el){ return el == "red"})
		estadoGreen = colors.filter(function(el){ return el == "green"})
		estadoPaleGreen = colors.filter(function(el){ return el == "paleGreen"})
		estadoGreenMandon = colors.filter(function(el){ return el == "greenMandon"})
		
		var identificadorGr = miIDgrafico(miGraficoActivo(ventanaClicada))
		
   	if (identificadorGr=="noG" || identificadorGr=="NADA"){alert("Se debe introducir un gráfico primero")}

	else{
		if (event.ctrlKey) { 
		    switch(d3.select("#" + ventanaClicada)[0][0].className) {
				    case "blue":
				    	//alert("he clicado ctrl+azul")
				    	if (estadoGreen[0]=="green" || estadoGreenMandon[0]=="greenMandon"){
				    		d3.select("#" + ventanaClicada)[0][0].className="paleGreen";

				    			if (d3.select("#" + otraVentana)[0][0].className =="green")
				    			{d3.select("#" + otraVentana)[0][0].className="greenMandon"}
				    			if (d3.select("#" + otraVentana)[0][0].className =="red")
				    			{d3.select("#" + otraVentana)[0][0].className="blue"}

				    	}
				    	else {d3.select("#" + ventanaClicada)[0][0].className="greenMandon"}
				    	if (estadoRed[0]=="red" && !(estadoGreen[0]=="green" || estadoGreenMandon[0]=="greenMandon")){
				    			if (d3.select("#" + otraVentana)[0][0].className=="red")
				    			{d3.select("#" + otraVentana)[0][0].className="blue"}
				    	}
				        
				        break;
				    case "red":
				        if (estadoGreen[0]=="green"  || estadoGreenMandon[0]=="greenMandon"){
				        	d3.select("#" + ventanaClicada)[0][0].className="paleGreen";
				    			if (d3.select("#" + otraVentana)[0][0].className=="green")
				    			{d3.select("#" + otraVentana)[0][0].className="greenMandon"}
				    	}
				    		else {d3.select("#" + ventanaClicada)[0][0].className="greenMandon"}
				        break;
				    case "green":
				        d3.select("#" + ventanaClicada)[0][0].className="red"
				    			d3.select("#" + otraVentana)[0][0].className="blue"
				        break;
				    case "greenMandon":
				        d3.select("#" + ventanaClicada)[0][0].className="red"
				    			d3.select("#" + otraVentana)[0][0].className="blue"
				        break;
					case "paleGreen":
						d3.select("#" + ventanaClicada)[0][0].className="red"
				    			if (d3.select("#" + otraVentana)[0][0].className=="greenMandon")
				    			{d3.select("#" + otraVentana)[0][0].className="green"}
				    			if (d3.select("#" + otraVentana)[0][0].className=="red")
				    			{d3.select("#" + otraVentana)[0][0].className="blue"}
				        break;			      
				    default:
				        alert("code block")
			}
			    
		}
		else {
    		//alert("The CTRL key was NOT pressed!  " + ventanaClicada);
    		switch(ventanaClicada) {
			    case 'window21':
			    	switch(d3.select("#window21")[0][0].className) {
			    		case "blue":
							if (d3.select("#window22")[0][0].className == "red"){
								d3.select("#window22")[0][0].className = "blue"	
							}

							if (d3.select("#window22")[0][0].className == "greenMandon"){
								d3.select("#window22")[0][0].className = "green"	
							}
							d3.select("#window21")[0][0].className = "red"		
						break;
						case "red":
							if (d3.select("#window22")[0][0].className == "red"){
								d3.select("#window22")[0][0].className = "blue"	
							}
							if (d3.select("#window22")[0][0].className == "greenMandon"){
								d3.select("#window22")[0][0].className = "green"	
							}
							d3.select("#window21")[0][0].className="red"
						break;
						case "green":
							if (d3.select("#window22")[0][0].className == "red"){
								d3.select("#window22")[0][0].className = "blue"	
							}
							d3.select("#window21")[0][0].className = "greenMandon"
						break;
						case "paleGreen":
							if (d3.select("#window22")[0][0].className == "red"){
								d3.select("#window22")[0][0].className = "blue"	
							}
							if (d3.select("#window22")[0][0].className == "green"){
								d3.select("#window22")[0][0].className = "greenMandon"	
							}
							d3.select("#window21")[0][0].className="paleGreen"
						break;	
					}
			    break;
			    case 'window22':
			    	switch(d3.select("#window22")[0][0].className) {
			    		case "blue":
							if (d3.select("#window21")[0][0].className == "red"){
								d3.select("#window21")[0][0].className = "blue"	
							}

							if (d3.select("#window21")[0][0].className == "greenMandon"){
								d3.select("#window21")[0][0].className = "green"	
							}
							d3.select("#window22")[0][0].className = "red"		
						break;
						case "red":
							if (d3.select("#window21")[0][0].className == "red"){
								d3.select("#window21")[0][0].className = "blue"	
							}
							if (d3.select("#window21")[0][0].className == "greenMandon"){
								d3.select("#window21")[0][0].className = "green"	
							}
							d3.select("#window22")[0][0].className="red"
						break;
						case "green":
							if (d3.select("#window21")[0][0].className == "red"){
								d3.select("#window21")[0][0].className = "blue"	
							}
							d3.select("#window22")[0][0].className = "greenMandon"
						break;
						case "paleGreen":
							if (d3.select("#window21")[0][0].className == "red"){
								d3.select("#window21")[0][0].className = "blue"	
							}
							if (d3.select("#window21")[0][0].className == "green"){
								d3.select("#window21")[0][0].className = "greenMandon"	
							}
							d3.select("#window22")[0][0].className="paleGreen"
						break;	
					}
			    break;
			    default:
			        alert("error de entrada")
			}
		}
		var ID_VIP_VC_off = 0 // el que manda no es de las vistas coordinadas
		var ID_VIP_VC_on = 0// el que manda es de vistas coordinadas
		var seguidores = [];
		for (var i = 0; i < colors.length; i++) {
			 	if (d3.select("#window2" + (i+1))[0][0].className=="paleGreen"){ 
			 		seguidores.push("#window2" + (i+1))
			 	}
			 	if (d3.select("#window2" + (i+1))[0][0].className=="red") 
			 	{
			 		ID_VIP_VC_off = miGraficoActivo("window2" + (i+1))
			 	}
			 	if (d3.select("#window2" + (i+1))[0][0].className=="greenMandon")
		 		{
		 			ID_VIP_VC_on = miGraficoActivo("window2" + (i+1))
		 		}	
		 	
		 };
		 
		 miColorVentanaActiva(miNumGraficoActivo_fromWindow(ventanaClicada))
		 activar3(ID_VIP_VC_on,ID_VIP_VC_off,seguidores,colors)
		
	}

		
}