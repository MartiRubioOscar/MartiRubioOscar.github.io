function infoGrafico(id_ventana){
	// a partir de la ventana, encuentro el nombre del gráfico y onmouseover aparece pop up con explicación del gráfico
var fromIdventanaToMatrixPosition = d3.scale.ordinal()
      .domain(["Icono_gr4_1","Icono_gr4_2","Icono_gr4_3","Icono_gr4_4","Icono_gr_1","Icono_gr_2","Icono_gr1"])
      .range(["3","4","5","6","1","2","0"])    

    var ExplicacionGrafico = d3.scale.ordinal()
      .domain(["01","02","03","04","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28",
                "29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44"])
      .range(["Explicación: Habitantes en Barcelona. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,", //01                             
              "Explicación: Plazas de hoteles",//02 
              "Explicación: Superficie (km^2)",//03
              "Explicación: Densidad de población (hab/km^2)",//04
              "Explicación: Precio de Vivienda Nueva (€/m^2)",//07
              "Explicación: Precio de la Vivienda de Segunda mano (€/m^2)",//08
              "Explicación: Precio de la Vivienda de Alquiler (€ mensuales/m^2)",//09
              "Explicación: Pasajeros Puerto de Barcelona", //10
              "Explicación: Pasajeros Aeropuerto de Barcelona", //11
              "Explicación: Temperaturas",//12
              "Explicación: Días con precipitaciones",//13
              "Explicación: Porcentaje de turistas según género (%)",//14
              "Explicación: Edad de los turistas",//15
              "Explicación: Principales gastos (€)",//16
              "Explicación: Motivos del viaje",//17
              "Explicación: Días de estancia",//18
              "Explicación: Grado de repetibilidad de la visita (%)",//19
              "Explicación: Medio de transporte (%)",//20
              "Explicación: Trabajadores por Sector",//21
              "Explicación: Situación Laboral",//22
              "Explicación: Producto Interior Bruto (millones de euros)", //23
              "Explicación: Salario anual por sectores de actividad (€)",//24
              "Explicación: Número de Reuniones",//25
              "Explicación: Asistentes a Reuniones",//26
              "Explicación: Licencias de Viviendas de uso turístico",//27
              "Explicación: Plazas en Viviendas de uso turístico",//28
              "Explicación: Número de Hoteles, Hostales y Pensiones",//29
              "Explicación: Plazas en Hoteles, Hostales y Pensiones",//30
              "Explicación: Visitas a los lugares más visitados de Barcelona",//31
              "Explicación: Espacios de Ocio (visitantes 2015)",//32
              "Explicación: Espacios de interés arquitectónico (visitantes 2015)",//33
              "Explicación: Centros Exposiciones (visitantes 2015)",//34
              "Explicación: Museos y Colecciones (visitantes 2015)",//35
              "Explicación: Transportes singulares (ususarios 2015)",//36
              "Explicación: Resumen lugares de interés (2015)",//37
              "Explicación: Principales Ferias (visitantes 2015)",//38
              "Explicación: Viajeros alojados en hoteles según nacionalidad (personas)",//39
              "Explicación: Ocupación hotelera (%)",//40
              "Explicación: Personal ocupado en hoteles (personas)",//41
              "Explicación: Precio medio de los hoteles (€)",//42
              "Explicación: Población por Edades",//43
              "Explicación: Población por Nacionalidad"//44
              ])

var explicacion = ExplicacionGrafico(resumenMAT[fromIdventanaToMatrixPosition(id_ventana)].Idgrafico)


var X = findPos(eval(id_ventana))[0]
var Y = findPos(eval(id_ventana))[1]
var x = X-130
var y = Y
//alert(x)
d3.select("#tooltip")
	.style("left", x + "px")
	.style("top", y + "px")						
	.select("#value")
	.text(explicacion);

//Show the tooltip
d3.select("#tooltip").classed("hidden", false);


}

function findPos(obj) {
	// función que devuelve la posición absoluta x, y de un DOM elemento 
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
			} while (obj = obj.offsetParent);
			return [curleft,curtop];
	}
}

function tooltipsInfraestructuras (infraestructura){
    //alert("en función tooltipsInfraestructuras")
      var textoTooltip = d3.scale.ordinal()
        .domain(["iAeropuerto","iPuerto","iFerrocarril","iAutobus"])
        .range(["aeropuerto del prat",
                "puerto de barcelona",
                "sants estació",
                "entradas por carretera"])
      var explicacion = textoTooltip(infraestructura)

      var X = findPos(eval(infraestructura))[0]
      var Y = findPos(eval(infraestructura))[1]
      d3.select("#tooltipEncInfraestructuras")
        .style("left", X + "px")
        .style("top", Y + "px")           
        //.select("#value")
        .text(explicacion);
      //Show the tooltip
      d3.select("#tooltipEncInfraestructuras").classed("hidden", false);

}

function tooltipMapaBarcelona (infraestructura){
    
      var X = findPos(eval(infraestructura))[0]
      var Y = findPos(eval(infraestructura))[1]
      d3.select("#tooltipEncInfraestructuras")
        .style("left", X + "px")
        .style("top", Y + "px")           
        //.select("#value")
        //.text(explicacion);
      //Show the tooltip
      d3.select("#tooltipMapa").classed("hidden", false);

}