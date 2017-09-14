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

function tooltipMenuPpalShow(idMenu){
	  var texto = textoTooltipMenuPpal(idMenu)
	  //alert(idMenu)
	  console.log(texto)

	  var pos = [event.pageX,event.pageY]
	  
	  d3.select("#tooltipMenuPpal")
	    .style("left", pos[0] + 20 + "px")
	    .style("top", pos[1] -20 + "px")           
	    .select("#valueMenuPpal") // es un span
	    .html(texto) // funciona como el text pero permite introducir elementos html (más o menos)
	    
	  //Show the tooltip
	  d3.select("#tooltipMenuPpal").classed("hidden", false);

}
function tooltipMenuPpalHide(idMenu){
	d3.select("#tooltipMenuPpal").classed("hidden", true);
}

function tooltipEvolucion(valorTexto,posicionElemento){
  console.log(posicionElemento)
  d3.select("#tooltipEvolucion")
    .style("left", posicionElemento[0] + "px")
    .style("top", posicionElemento[1] + "px")           
    .select("#valueEvolucion")
    .text(valorTexto);

  //Show the tooltip
  d3.select("#tooltipEvolucion").classed("hidden", false);
}

function tooltipVA(valorTexto,posicionElemento){
  console.log(posicionElemento)
  d3.select("#tooltipVA")
    .style("left", posicionElemento[0] + "px")
    .style("top", posicionElemento[1] + "px")           
    .select("#valueVA")
    .text(valorTexto);

  //Show the tooltip
  d3.select("#tooltipVA").classed("hidden", false);
}

function tooltipBarras(valorTexto,posicionElemento){
  console.log(posicionElemento)
  d3.select("#tooltipBarra")
    .style("left", posicionElemento[0] + "px")
    .style("top", posicionElemento[1] + "px")           
    .select("#valueBarra")
    .text(valorTexto);

  //Show the tooltip
  d3.select("#tooltipBarra").classed("hidden", false);
}




function tooltipsInfraestructuras (infraestructura){
    //alert("en función tooltipsInfraestructuras")
      var textoTooltip = d3.scale.ordinal()
        .domain(["iAeropuerto","iPuerto","iFerrocarril","iAutobus"])
        .range(["Aeropuerto de Barcelona-El Prat <br/><br/>Se encuentra 15 kilómetros al suroeste del centro de Barcelona y a 3 kilómetros del Puerto de Barcelona, entre los términos municipales de El Prat de Llobregat, Viladecans y Sant Boi de Llobregat. <br/><br/>Dispone de dos terminales de pasajeros, una terminal corporativa y un centro de carga aérea.<br/><br/>En 2016 el tráfico total ascendió a 44.154.693 pasajeros <br/><br/>Fuente: Wikipedia",
                "El Puerto de Barcelona se encuentra encajado entre la nueva desembocadura del río Llobregat y el barrio de La Barceloneta en la ciudad de Barcelona. <br/><br/>El puerto de Barcelona se puede dividir en: el puerto comercial (principalmente carga contenerizada), el puerto ciudadano (cruceros, ferris, zonas de ocio, el Port Vell), el puerto energético y el puerto logístico. <br/><br/>Es el mayor puerto del Mediterráneo en tráfico de cruceros y el cuarto del mundo solo por detrás de los puertos del Caribe. <br/><br/>En 2016 el tráfico total ascendió a 4.150.021 pasajeros <br/><br/>Fuente: Wikipedia y Ministerio de fomento",
                "Estación de Sants <br/>Es la estación principal de trenes de Barcelona. <br/>Desde la Estación de Sants salen/llegan trenes de larga o media distancia, de alta velocidad y cercanías. <br/>En 2015 pasaron casi 30 millones de pasajeros. <br/><br/>Estación de Francia<br/>Desde la Estación de Francia salen/llegan trenes de cercanías, media y larga distancia. <br/>Acoge a unos 850 mil pasajeros anuales. <br/><br/>Estaciones más conectadas: Plaza Catalunya, Passeig de Gràcia<br/>Fuente:  https://www.shbarcelona.es",
                "Los principales accesos a Barcelona por carretera son: <br/><br/>   - Avenida Meridiana: Es el acceso norte de la ciudad. Conecta con la autopista C-33, y la C-33 conecta con la AP-7, la autopista principal que va hacia el norte de Cataluña y Francia. <br/><br/>   - Gran Via: Cruza la ciudad de sur a norte. En el sur conecta con la autopista C-31 (la C31 conecta con la C-32). En el norte con la autopista C-32. <br/><br/>   - Avenida Diagonal: Conecta con carreteras y autopistas que van al sur y al este de España. AP-7, AP-2, A-2/N-II y N-340. <br/><br/>   - Las Rondas: Son vías rápidas de acceso a distintos puntos de la ciudad. La Ronda de Dalt bordea la ciudad por la zona oeste (montaña), La Ronda Litoral bordea la ciudad por la costa y la Ronda del Mig atraviesa Barcelona de sudeste a noroeste.<br/><br/>Fuente: http://www.webarcelona.net"
                ])
      var explicacion = textoTooltip(infraestructura)

      var X = findPos(eval(infraestructura))[0] + 25
      var Y = findPos(eval(infraestructura))[1] + 15
      d3.select("#tooltipEncInfraestructuras")
        .style("left", X + "px")
        .style("top", Y + "px")           
        .select("#value")
        .html(explicacion)
        //.style("align-text","left");
      //Show the tooltip
      d3.select("#tooltipEncInfraestructuras").classed("hidden", false);

}

function tooltipsPictografia (infraestructura){
    //alert("en función tooltipsInfraestructuras")
      var textoTooltip = d3.scale.ordinal()
        .domain(["PicMaxima","PicMinima","PicLluvia","PicPerfilHabitante","PicPerfilTurista","PicAlojamiento","PicSectorHostelería"])
        .range(["Promedio de Temperaturas máximas en el 2016","Promedio de Temperaturas mínimas en el 2016","Días con lluvia en el 2016","Perfil del habitante de Barcelona 2016","Perfil de turista de Barcelona  2016","Oferta de alojamiento de Barcelona  2016","Datos del sector de la Hostelería en Barcelona 2016"])
      var explicacion = textoTooltip(infraestructura)

      var X = findPos(eval(infraestructura))[0] + 10
      var Y = findPos(eval(infraestructura))[1] + 10
      d3.select("#tooltipEncPictografia")
        .style("left", X + "px")
        .style("top", Y + "px")           
        .select("#value")
        .html(explicacion)
        //.style("align-text","left");
      //Show the tooltip
      d3.select("#tooltipEncPictografia").classed("hidden", false);

}

function tooltipMapaBarcelona (infraestructura){
    //alert("mapa")
      var X = findPos(eval(infraestructura))[0] + 75
      var Y = findPos(eval(infraestructura))[1] + 30
      //d3.select("#tooltipEncInfraestructuras")
      d3.select("#tooltipMapa")
        .style("left", X + "px")
        .style("top", Y + "px")           
        //.select("#value")
        //.text(explicacion);
      //Show the tooltip
      d3.select("#tooltipMapa").classed("hidden", false);

}