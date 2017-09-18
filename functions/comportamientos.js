function borrarGrafico(ID_boton){
	// para borrar lo que contiene cada ventana de gráfico



	var ventanaBoton = d3.scale.ordinal()
                    .domain(["gr4_1Close","gr4_2Close","gr4_3Close","gr4_4Close","gr_1Close","gr_2Close","gr1Close"])
                    .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
    // CONOZCO LA POSICIÓN EN LA MATRIZ RESUMENMAT --> INICIALIZO EL VALOR
    // TENDRÉ QUE TENER EN CUENTA LOS BOTONES DE VENTANA ACTIVA. PEJ, SI BORRO MASTER, DEBE DESACTIVARSE VENTANAS COORDINADAS
	var ID = ventanaBoton(ID_boton)	

	d3.select('#' + ID).selectAll('h3').remove()
	d3.select("#" + ID).selectAll("svg").remove()
	d3.select("#" + ID).selectAll("img").remove()
	d3.select("#" + ID).style("border-color","black")
  	
  	d3.select("#" + ID).style("background-color","#" + colorSinGrafico)

  	iniLineaUpdateSeguimiento(resumenMAT[miPosicionResumenMAT(ID)])

  	
  	var activoGrafico=PosicionGraficoActivo()
  	
  	if (ID!="gr1") {
  		if (activoGrafico=="00") {document.getElementById("navegadorDiv").innerHTML="";};
  	
	  	var IDslave=[]
	  	if (d3.select(miGraficoActivo_window_from_IDVIP(ID)).classed("greenMandon"))
	  	{
	  		console.log(restoCuadrados(miGraficoActivo_window_from_IDVIP(ID)))
	  		var posiblesSeguidores = restoCuadrados(miGraficoActivo_window_from_IDVIP(ID))
	  		for (var i = 0; i < posiblesSeguidores.length; i++) {
	  			if (d3.select(posiblesSeguidores[i]).classed("paleGreen")) {
	  				d3.select(posiblesSeguidores[i]).classed("paleGreen",false)
	  				d3.select(posiblesSeguidores[i]).classed("blue",true)
	  				IDslave = miGraficoActivoAlmoadilla(posiblesSeguidores[i])

				  	d3.select("#" + IDslave).style("background-color","#" + colorSinGrafico)
				  	
	  			};
	  		};
	  	}
	  	d3.select(miGraficoActivo_window_from_IDVIP(ID)).classed("blue",true)
	  	d3.select(miGraficoActivo_window_from_IDVIP(ID)).classed("red",false)
	  	d3.select(miGraficoActivo_window_from_IDVIP(ID)).classed("paleGreen",false)
	  	d3.select(miGraficoActivo_window_from_IDVIP(ID)).classed("greenMandon",false)	
  	};

}

function miColorVentanaSLAVEactivadas(activarVentana){
	d3.select("#" + activarVentana).style("background-color","#" + colorSlaveActivo)
}

function miColorVentanaActiva(activarVentana){
	// el valor de activarVentana es el mismo que workFrame
	
	if(document.getElementById("window41")!=null){
		var colores = [];
			colores[0] = d3.select("#window41")[0][0].className
			colores[1] = d3.select("#window42")[0][0].className
			colores[2] = d3.select("#window43")[0][0].className
			colores[3] = d3.select("#window44")[0][0].className
	
		switch(activarVentana) {
			    case "41":
	
			    	d3.select("#gr4_1").style("border-color","#FF0000")

			    	d3.select("#gr4_2").style("border-color","#000000")
			    	d3.select("#gr4_3").style("border-color","#000000")
			    	d3.select("#gr4_4").style("border-color","#000000")
			    	if (colores[0]=="green") {
			    		d3.select("#gr4_1").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[0]=="greenMandon") {
			    		d3.select("#gr4_1").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[0]=="paleGreen") {
			    		d3.select("#gr4_1").style("background-color","#" + colorSlaveNoActivo)	
			    	};
			    	if (colores[0]=="blue" || colores[0]=="red") {
	
			    		d3.select("#gr4_1").style("background-color","#" + colorActiva)	
			    	};

			    	
			    	if (colores[1]=="paleGreen"){
			    		
			    		d3.select("#gr4_2").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[1]=="green"){
			    		
			    		d3.select("#gr4_2").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[1]=="blue"){
			    		
			    		if (resumenMAT[4].Idgrafico=="noG") {
			    			d3.select("#gr4_2").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_2").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[1]=="red"){
			    		
			    		d3.select("#gr4_2").style("background-color","#" + colorNoActiva)	
			    	}


			    	if (colores[2]=="paleGreen"){
			    		
			    		d3.select("#gr4_3").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[2]=="green"){
			    		
			    		d3.select("#gr4_3").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[2]=="blue"){
			    		//
			    		if (resumenMAT[5].Idgrafico=="noG") {
			    			d3.select("#gr4_3").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_3").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[2]=="red"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorNoActiva)	
			    	}
			    	
			    	if (colores[3]=="paleGreen"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[3]=="green"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[3]=="blue"){
			    		//
			    		if (resumenMAT[6].Idgrafico=="noG") {
			    			d3.select("#gr4_4").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_4").style("background-color","#" + colorNoActiva)		
			    		}
			    			
			    	}
			    	if (colores[3]=="red"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorNoActiva)	
			    	}
			    	

			        break;
			    case "42":
			    	d3.select("#gr4_2").style("border-color","#FF0000")
			    	d3.select("#gr4_1").style("border-color","#000000")
			    	d3.select("#gr4_3").style("border-color","#000000")
			    	d3.select("#gr4_4").style("border-color","#000000")
			    	if (colores[1]=="green") {
			    		d3.select("#gr4_2").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[1]=="greenMandon") {
			    		d3.select("#gr4_2").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[1]=="paleGreen") {
			    		d3.select("#gr4_2").style("background-color","#" + colorSlaveNoActivo)	
			    	};
			    	if (colores[1]=="blue" || colores[1]=="red") {
			    		d3.select("#gr4_2").style("background-color","#" + colorActiva)	
			    	};
			    	
			    	
			    	if (colores[0]=="paleGreen"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[0]=="green"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[0]=="blue"){
			    		//
			    		if (resumenMAT[3].Idgrafico=="noG") {
			    			d3.select("#gr4_1").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_1").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[0]=="red"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorNoActiva)	
			    	}


			    	if (colores[2]=="paleGreen"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[2]=="green"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[2]=="blue"){
			    		//
			    		if (resumenMAT[5].Idgrafico=="noG") {
			    			d3.select("#gr4_3").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_3").style("background-color","#" + colorNoActiva)		
			    		}
			    		//d3.select("#gr4_3").style("background-color","#" + colorNoActiva)	
			    	}
			    	if (colores[2]=="red"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorNoActiva)	
			    	}
			    	
			    	if (colores[3]=="paleGreen"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[3]=="green"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[3]=="blue"){
			    		//
			    		if (resumenMAT[6].Idgrafico=="noG") {
			    			d3.select("#gr4_4").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_4").style("background-color","#" + colorNoActiva)		
			    		}
			    			
			    	}
			    	if (colores[3]=="red"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorNoActiva)	
			    	}

			    	

			        break;
			    case "43":
			    	d3.select("#gr4_3").style("border-color","#FF0000")
			    	d3.select("#gr4_2").style("border-color","#000000")
			    	d3.select("#gr4_1").style("border-color","#000000")
			    	d3.select("#gr4_4").style("border-color","#000000")
			    	
			    	if (colores[2]=="green") {
			    		d3.select("#gr4_3").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[2]=="greenMandon") {
			    		d3.select("#gr4_3").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[2]=="paleGreen") {
			    		d3.select("#gr4_3").style("background-color","#" + colorSlaveNoActivo)	
			    	};
			    	if (colores[2]=="blue" || colores[2]=="red") {
			    		d3.select("#gr4_3").style("background-color","#" + colorActiva)	
			    	};
			    	
			    	
			    	if (colores[1]=="paleGreen"){
			    		//
			    		d3.select("#gr4_2").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[1]=="green"){
			    		//
			    		d3.select("#gr4_2").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[1]=="blue"){
			    		//
			    		if (resumenMAT[4].Idgrafico=="noG") {
			    			d3.select("#gr4_2").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_2").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[1]=="red"){
			    		//
			    		d3.select("#gr4_2").style("background-color","#" + colorNoActiva)	
			    	}


			    	if (colores[0]=="paleGreen"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[0]=="green"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[0]=="blue"){
			    		//
			    		if (resumenMAT[3].Idgrafico=="noG") {
			    			d3.select("#gr4_1").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_1").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[0]=="red"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorNoActiva)	
			    	}
			    	
			    	if (colores[3]=="paleGreen"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[3]=="green"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[3]=="blue"){
			    		//
			    		if (resumenMAT[6].Idgrafico=="noG") {
			    			d3.select("#gr4_4").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_4").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[3]=="red"){
			    		//
			    		d3.select("#gr4_4").style("background-color","#" + colorNoActiva)	
			    	}
			    	

			        break;
			    case "44":
			    	d3.select("#gr4_4").style("border-color","#FF0000")
			    	d3.select("#gr4_2").style("border-color","#000000")
			    	d3.select("#gr4_3").style("border-color","#000000")
			    	d3.select("#gr4_1").style("border-color","#000000")
			    	if (colores[3]=="green") {
			    		d3.select("#gr4_4").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[3]=="greenMandon") {
			    		d3.select("#gr4_4").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[3]=="paleGreen") {
			    		d3.select("#gr4_4").style("background-color","#" + colorSlaveNoActivo)	
			    	};
			    	if (colores[3]=="blue" || colores[3]=="red") {
			    		d3.select("#gr4_4").style("background-color","#" + colorActiva)	
			    	};
			    	
			    	
			    	if (colores[1]=="paleGreen"){
			    		//
			    		d3.select("#gr4_2").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[1]=="green"){
			    		//
			    		d3.select("#gr4_2").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[1]=="blue"){
			    		//
			    		if (resumenMAT[4].Idgrafico=="noG") {
			    			d3.select("#gr4_2").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_2").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[1]=="red"){
			    		//
			    		d3.select("#gr4_2").style("background-color","#" + colorNoActiva)	
			    	}


			    	if (colores[2]=="paleGreen"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[2]=="green"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[2]=="blue"){
			    		//
			    		if (resumenMAT[5].Idgrafico=="noG") {
			    			d3.select("#gr4_3").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_3").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[2]=="red"){
			    		//
			    		d3.select("#gr4_3").style("background-color","#" + colorNoActiva)	
			    	}
			    	
			    	if (colores[0]=="paleGreen"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[0]=="green"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[0]=="blue"){
			    		//
			    		if (resumenMAT[3].Idgrafico=="noG") {
			    			d3.select("#gr4_1").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr4_1").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[0]=="red"){
			    		//
			    		d3.select("#gr4_1").style("background-color","#" + colorNoActiva)	
			    	}
			    	
			        break;
			}
		}
	if(document.getElementById("window21")!=null){
		var colores = [];
			colores[0] = d3.select("#window21")[0][0].className
			colores[1] = d3.select("#window22")[0][0].className
			
		switch(activarVentana) {
			    case "21":
			    	d3.select("#gr_1").style("border-color","#FF0000")
			    	d3.select("#gr_2").style("border-color","#000000")
			    	
			    	if (colores[0]=="green") {
			    		d3.select("#gr_1").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[0]=="greenMandon") {
			    		d3.select("#gr_1").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[0]=="paleGreen") {
			    		d3.select("#gr_1").style("background-color","#" + colorSlaveNoActivo)	
			    	};
			    	if (colores[0]=="blue" || colores[0]=="red") {
			    		d3.select("#gr_1").style("background-color","#" + colorActiva)	
			    	};

			    	if (colores[1]=="paleGreen"){
			    		//
			    		d3.select("#gr_2").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[1]=="green"){
			    		//
			    		d3.select("#gr_2").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[1]=="blue"){
			    		//
			    		if (resumenMAT[2].Idgrafico=="noG") {
			    			d3.select("#gr_2").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr_2").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[1]=="red"){
			    		//
			    		d3.select("#gr_2").style("background-color","#" + colorNoActiva)	
			    	}
       
			        break;
		        case "22":
		        	d3.select("#gr_2").style("border-color","#FF0000")
			    	d3.select("#gr_1").style("border-color","#000000")

		        	if (colores[1]=="green") {
			    		d3.select("#gr_2").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[1]=="greenMandon") {
			    		d3.select("#gr_2").style("background-color","#" + colorMasterActivo)	
			    	};
			    	if (colores[1]=="paleGreen") {
			    		d3.select("#gr_2").style("background-color","#" + colorSlaveNoActivo)	
			    	};
			    	if (colores[1]=="blue" || colores[1]=="red") {
			    		d3.select("#gr_2").style("background-color","#" + colorActiva)	
			    	};

			    	if (colores[0]=="paleGreen"){
			    		//
			    		d3.select("#gr_1").style("background-color","#" + colorSlaveNoActivo)	
			    	}
			    	if (colores[0]=="green"){
			    		//
			    		d3.select("#gr_1").style("background-color","#" + colorMasterNoActivo)	
			    	}
			    	if (colores[0]=="blue"){
			    		//
			    		if (resumenMAT[1].Idgrafico=="noG") {
			    			d3.select("#gr_1").style("background-color","#" + colorSinGrafico)	
			    		}else{
			    			d3.select("#gr_1").style("background-color","#" + colorNoActiva)		
			    		}
			    		
			    	}
			    	if (colores[0]=="red"){
			    		//
			    		d3.select("#gr_1").style("background-color","#" + colorNoActiva)	
			    	}

			    	
			    	      
			        break;
				
		}
		
		
	}
		
		if(activarVentana=="1"){
			
			if (resumenMAT[0].Idgrafico=="noG") 
						{
			    			if (arrastre!="SI") {
			    				d3.select("#gr1").style("background-color","#" + colorSinGrafico)	// viene por boton un gráfico
			    			}
			    			else{
			    				arrastre="NO"
			    				d3.select("#gr1").style("background-color","#" + colorActiva);
			    				d3.select("#gr1").style("border-color","red")
			    			}
			    		}else{
			    			d3.select("#gr1").style("background-color","#" + colorActiva)		
			    			d3.select("#gr1").style("border-color","red")
			    		}
				
		}	
	
}