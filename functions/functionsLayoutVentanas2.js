function CreateUnGrafico (){
			d3.select("#menu41").remove()
			d3.select("#menu42").remove()
			d3.select("#menu43").remove()
			d3.select("#menu44").remove()
			d3.select("#menu41Lb").remove()
			d3.select("#menu42Lb").remove()
			d3.select("#menu43Lb").remove()
			d3.select("#menu44Lb").remove()

			d3.select("#window41").remove()
			d3.select("#window42").remove()
			d3.select("#window43").remove()
			d3.select("#window44").remove()
			d3.select("#window21").remove()
			d3.select("#window22").remove()

		var elementExists2 = document.getElementById("contenedorGr21");
		var elementExists4 = document.getElementById("contenedorGr41");
		d3.selectAll(".grafico4").remove()
		d3.selectAll(".grafico2").remove()
		d3.select("#areaGraficos").selectAll("div").data(["1"]).enter().append("div")
						.attr("class", "grafico1")
						.attr("id",  function(d,i){return "gr" + (i+1);})
						.attr("ondrop", "drop(event)")
						.attr("ondragover", "allowDrop(event)");
		var c2 = (elementExists2!=null)
		var c4 = (elementExists4!=null)
		var controladorUnGrafico
		if (c2){controladorUnGrafico="21"}
		if (c4){controladorUnGrafico="41"}			
		if (!c4 && !c2){controladorUnGrafico = "00"}
		UnGrafico(c2, c4, controladorUnGrafico);
	}
function UnGrafico(CONTROL21,CONTROL41,CONTROLADORunGrafico) {
			d3.select("#gr_1").select("#gr1Close").remove()
			    

			var vengoDe = miPosicionResumenMAT_workframe(CONTROLADORunGrafico)
          	if (CONTROLADORunGrafico=="00"){ 
          		iniLineaUpdateSeguimiento(resumenMAT[0])
          		iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])
			}
          	else{		
          		workFrame="1";
          		d3.select("#gr1").append("img").attr("id","gr1Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr1").append("img").attr("id","Icono_gr1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})
          		copyContentResMat(resumenMAT,workFrame ,vengoDe,0)
          		
          		iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[0])
          		ID_VIP = "gr1";
          		
          		activar2(ID_VIP)
          		// cargo menu
          		loadMenu(resumenMAT[0].Idgrafico) 
          		
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				 	// update filtro
				updateFiltroNavegador(ambitoGeo, fromYear,untilYear)
				//miColorVentanaActiva("1")
			}
			//alert("crear un gráfico")
			miColorVentanaActiva("1")         		
		}			


function CreateDosGraficos (){
			d3.select("#vistas4").selectAll("br").remove()
			d3.select("#menu41").remove()
			d3.select("#menu42").remove()
			d3.select("#menu43").remove()
			d3.select("#menu44").remove()
			d3.select("#menu41Lb").remove()
			d3.select("#menu42Lb").remove()
			d3.select("#menu43Lb").remove()
			d3.select("#menu44Lb").remove()

			d3.select("#window41").remove()
			d3.select("#window42").remove()
			d3.select("#window43").remove()
			d3.select("#window44").remove()
			d3.select("#window21").remove()
			d3.select("#window22").remove()
			
			d3.select("#vistas4").selectAll("button").data([1,2]).enter().append("button")
				.attr("class","blue").attr("id",function(d){return "window2"+d})
				.attr("onmousedown", function(d){return ("seleccionWindow2(event,'window2" + d +"')") })
			d3.select("#window21").append("span")
			d3.select("#window22").append("span")


		var elementExists = document.getElementById("contenedorGr1");
		var elementExists2 = document.getElementById("contenedorGr41");
		var elementExists3 = document.getElementById("contenedorGr42");
		d3.selectAll(".grafico4").remove()
		d3.selectAll(".grafico1").remove()
		d3.select("#areaGraficos").selectAll("div").data(["1","2"]).enter().append("div")
						.attr("class", "grafico2")
						.attr("id",  function(d,i){return "gr_" + (i+1);})
						.attr("ondrop", "drop(event)")
						.attr("ondragover", "allowDrop(event)");
		var c0 = elementExists;
		var c11 = (elementExists2!=null && elementExists3==null)
		var c12 = (elementExists3!=null && elementExists2==null)
		var c2 = (elementExists2!=null && elementExists3!=null)
		DosGrafico(c0, c11,c12,c2);
	}
function DosGrafico(elementExists, CONTROL11,CONTROL12,CONTROL2) {

		if (elementExists!=null){
				//CASO DE UNA VENTANA LLENA A 2 VENTANAS
				d3.select("#gr_1").select("#gr1Close").remove()
			    d3.select("#gr_1").append("img").attr("id","gr_1Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr_1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr_1").append("img").attr("id","Icono_gr_1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr_1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})

         		workFrame="21";
         		miColorVentanaActiva(workFrame)
         		copyContentResMat(resumenMAT,workFrame ,0,1)
          		resumenMAT[1].hastaYear = resumenMAT[0].hastaYear
    		
				iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		
          		filtrar(resumenMAT[1]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr_1";
          		
          		activar2(ID_VIP)
          		iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])
				

          		// cargo menu
          		loadMenu(resumenMAT[1].Idgrafico)
				if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				// update filtro
				updateFiltroNavegador(ambitoGeo,fromYear ,untilYear)


				d3.select("#window21").attr("class","red")
				d3.select("#window22").attr("class","blue")



		}
		if (CONTROL11){
				d3.select("#gr_1").select("#gr1Close").remove()
			    d3.select("#gr_1").append("img").attr("id","gr1_Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr_1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr_1").append("img").attr("id","Icono_gr_1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr_1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})

         		workFrame="21";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,3,1)

          		iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[1]) // de aquí sale ambitoGeo, sort, untilYear,controlEVOLUTION y datos



          		ID_VIP = "gr_1";
          		
          		activar2(ID_VIP)
          		// cargo menu
          		loadMenu(resumenMAT[1].Idgrafico)
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				// update filtro
				updateFiltroNavegador(ambitoGeo,fromYear, untilYear)

				d3.select("#window21").attr("class","red")
				d3.select("#window22").attr("class","blue")

		}

		if (CONTROL12){
				d3.select("#gr_2").select("#gr1Close").remove()
			    d3.select("#gr_2").append("img").attr("id","gr_2Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr_2Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr_2").append("img").attr("id","Icono_gr_2").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr_2')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})

         		workFrame="22";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,4,2)

          		iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[2]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr_2";
          		
          		activar2(ID_VIP)
			    // cargo menu
          		loadMenu(resumenMAT[2].Idgrafico)
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				 // update filtro
				updateFiltroNavegador(ambitoGeo,fromYear, untilYear)

				d3.select("#window22").attr("class","red")
				d3.select("#window21").attr("class","blue")
		}
		if (!CONTROL2 && !CONTROL11 && !CONTROL12){
		/*alert("CASO CAMBIO CON VENTANAS VACÍAS")*/
		
		}

		if (CONTROL2){
				//alert("41 y 42 llenas a dos ventanas")
				d3.select("#gr_1").select("#gr1Close").remove()
			    d3.select("#gr_1").append("img").attr("id","gr_1Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr_1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr_2").select("#gr1Close").remove()
			    d3.select("#gr_2").append("img").attr("id","gr_2Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr_2Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr_1").append("img").attr("id","Icono_gr_1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr_1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})

			    d3.select("#gr_2").append("img").attr("id","Icono_gr_2").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr_2')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})

         		workFrame="22";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,4,2)

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[2]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr_2";
          		
          		activar2(ID_VIP)

         		workFrame="21";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,3,1)

          		iniLineaUpdateSeguimiento(resumenMAT[0])
				
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[1]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr_1";
          		
          		activar2(ID_VIP)
          		// cargo menu
          		loadMenu(resumenMAT[1].Idgrafico)
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
			 	// update filtro
				updateFiltroNavegador(ambitoGeo,fromYear, untilYear)

				d3.select("#window21").attr("class","red")
				d3.select("#window22").attr("class","blue")

			}

	}
function CreateCuatroGraficos (){
		//alert("creando dos gráficos")
			d3.select("#menu41").remove()
			d3.select("#menu42").remove()
			d3.select("#menu43").remove()
			d3.select("#menu44").remove()
			d3.select("#menu41Lb").remove()
			d3.select("#menu42Lb").remove()
			d3.select("#menu43Lb").remove()
			d3.select("#menu44Lb").remove()
			
			d3.select("#window21").remove()
			d3.select("#window22").remove()
			d3.select("#window41").remove()
			d3.select("#window42").remove()
			d3.select("#window43").remove()
			d3.select("#window44").remove()
			d3.select("#vistas4").selectAll("br").remove()

			d3.select("#vistas4").append("br")
			d3.select("#vistas4").selectAll("button").data([1,2]).enter().append("button")
				.attr("class","blue").attr("id",function(d,i){return "window4"+d})
				.attr("onmousedown", function(d,i){return ("seleccionWindow4(event,'window4" + d +"')") })
			d3.select("#vistas4").append("br")
			d3.select("#vistas4").selectAll("button").data([5,6,3,4]).enter().append("button")
				.attr("class","blue").attr("id",function(d){return "window4"+d})
				.attr("onmousedown", function(d){return ("seleccionWindow4(event,'window4" + d +"')") })
			
			d3.select("#window41").append("span")
			d3.select("#window42").append("span")
			d3.select("#window43").append("span")
			d3.select("#window44").append("span")



		var elementExists = document.getElementById("contenedorGr1");
		var elementExists4 = document.getElementById("contenedorGr21");
		var elementExists5 = document.getElementById("contenedorGr22");


		d3.selectAll(".grafico2").remove()
		d3.selectAll(".grafico1").remove()
		d3.select("#areaGraficos").selectAll("div").data(["1","2","3","4"]).enter().append("div")
						.attr("class", "grafico4")
						.attr("id",  function(d,i){return "gr4_" + (i+1);})
						.attr("ondrop", "drop(event)")
						.attr("ondragover", "allowDrop(event)");
		var c0 = elementExists;
		var c21 = (elementExists4!=null && elementExists5==null)
		var c22 = (elementExists5!=null && elementExists4==null)
		var c2 = (elementExists4!=null && elementExists5!=null)

		CuatroGrafico(c0, c21,c22,c2);
	}
function CuatroGrafico(elementExists, CONTROL21,CONTROL22,CONTROL2) {


		if (elementExists!=null){

				d3.select("#gr4_1").select("#gr1Close").remove()
			    d3.select("#gr4_1").append("img").attr("id","gr4_1Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr4_1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr4_1").append("img").attr("id","Icono_gr4_1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr4_1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})
         		workFrame="41";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,0,3)

          		iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[3]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr4_1";
          		
          		activar2(ID_VIP)
          		// cargo menu
          		loadMenu(resumenMAT[3].Idgrafico)
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				// update filtro
				updateFiltroNavegador(ambitoGeo, fromYear, untilYear)

				d3.select("#window41").attr("class","red")
				d3.select("#window42").attr("class","blue")
				d3.select("#window43").attr("class","blue")
				d3.select("#window4r").attr("class","blue")
		}
	
		if (CONTROL21){

				d3.select("#gr4_1").select("#gr1Close").remove()
			    d3.select("#gr4_1").append("img").attr("id","gr4_1Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr4_1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr4_1").append("img").attr("id","Icono_gr4_1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr4_1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})
				workFrame="41";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,1,3)

          		iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[4])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[3]) // de aquí sale ambitoGeo, sort, untilYear,controlEvolution y datos

          		ID_VIP = "gr4_1";
          		
          		activar2(ID_VIP)
          		// cargo menu
          		loadMenu(resumenMAT[3].Idgrafico)
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				 // update filtro
				updateFiltroNavegador(ambitoGeo, fromYear, untilYear)

				d3.select("#window41").attr("class","red")
				d3.select("#window42").attr("class","blue")
				d3.select("#window43").attr("class","blue")
				d3.select("#window4r").attr("class","blue")
		}
		if (CONTROL22){
				//alert("CASO DE 22 llena A 4 VENTANAS")
				d3.select("#gr4_2").select("#gr1Close").remove()
			    d3.select("#gr4_2").append("img").attr("id","gr4_2Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr4_2Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr4_2").append("img").attr("id","Icono_gr4_2").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr4_2')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})
				workFrame="42";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,2,4)

          		iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				iniLineaUpdateSeguimiento(resumenMAT[3])
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])
          		
          		filtrar(resumenMAT[4]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr4_2";
          		
          		activar2(ID_VIP)
          		// cargo menu
          		loadMenu(resumenMAT[4].Idgrafico)
				if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
				// update filtro
				updateFiltroNavegador(ambitoGeo, fromYear, untilYear)

				d3.select("#window42").attr("class","red")
				d3.select("#window41").attr("class","blue")
				d3.select("#window43").attr("class","blue")
				d3.select("#window4r").attr("class","blue")
		}

		if (CONTROL2){

				d3.select("#gr4_1").select("#gr1Close").remove()
			    d3.select("#gr4_1").append("img").attr("id","gr4_1Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr4_1Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr4_1").append("img").attr("id","Icono_gr4_1").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr4_1')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})
			    d3.select("#gr4_2").select("#gr1Close").remove()
			    d3.select("#gr4_2").append("img").attr("id","gr4_2Close").attr("align","right").attr("src","img/iconTancar.svg").attr("height","10px")
			    	.attr("onclick","borrarGrafico('gr4_2Close')") // borrarGrafico está en comportamientos.js
			    d3.select("#gr4_2").append("img").attr("id","Icono_gr4_2").attr("align","right").attr("src","img/information.svg").attr("height","20px")
			    		.style("margin-right","5px").style("margin-top","5px")
			    		.attr("onmouseover","infoGrafico('Icono_gr4_2')")
			    		.on("mouseout", function() {
							//Hide the tooltip
							d3.select("#tooltip").classed("hidden", true);
			   			})
				workFrame="42";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,2,4)

          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[4]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr4_2";
          		
          		activar2(ID_VIP)

				workFrame="41";
         		miColorVentanaActiva(workFrame)
          		copyContentResMat(resumenMAT,workFrame ,1,3)

          		
          		miColorVentanaActiva(workFrame)
          		
          		filtrar(resumenMAT[3]) // de aquí sale ambitoGeo, sort, untilYear, controlEvolution y datos

          		ID_VIP = "gr4_1";
          		
          		activar2(ID_VIP)
				iniLineaUpdateSeguimiento(resumenMAT[0])
				iniLineaUpdateSeguimiento(resumenMAT[1])
				iniLineaUpdateSeguimiento(resumenMAT[2])
				
				iniLineaUpdateSeguimiento(resumenMAT[5])
				iniLineaUpdateSeguimiento(resumenMAT[6])

          		// cargo menu
          		loadMenu(resumenMAT[3].Idgrafico)
          		if (controlEVOLUTION==true){
          		// si estoy en un gráfico de evolución temporal, entonces miro si tiene variación anual 
          		// para ponerle el menú
	          		if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
	          			// si viene de un gráfico que tiene variación anual, cargo esta parte del menú.
	          			MenuVariacionAnual()
	          		}	
          		}
			 	// update filtro
				updateFiltroNavegador(ambitoGeo, fromYear, untilYear)

				d3.select("#window41").attr("class","red")
				d3.select("#window42").attr("class","blue")
				d3.select("#window43").attr("class","blue")
				d3.select("#window4r").attr("class","blue")
				}

		if (!CONTROL2 && !CONTROL21 && !CONTROL22){
				/* NO HAY NADA*/
		}

	}
