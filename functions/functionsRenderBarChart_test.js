function render(datos){
          alert("dentro de render")
          DATOS = datos;

          var DATOSfiltrados = DATOS.filter(function (el) {
                return el.year == untilYear
              });
          

          DATOSfiltrados = DATOSfiltrados.filter(function (el) {
              return (el.localizacion === ambitoGeo[0] || el.localizacion === ambitoGeo[1] || 
                el.localizacion === ambitoGeo[2] || el.localizacion === ambitoGeo[3] || 
                el.localizacion === ambitoGeo[4] || el.localizacion === ambitoGeo[5] || 
                el.localizacion === ambitoGeo[6] || el.localizacion === ambitoGeo[7] || 
                el.localizacion === ambitoGeo[8] || el.localizacion === ambitoGeo[9] || 
                el.localizacion === ambitoGeo[10] )});
         var DATOSfiltradosDEF = DATOSfiltrados;

         if ( resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje == "SI"){
            var DATOSfiltradosDEF = DATOSfiltrados.map(function(el){
              return {localizacion: el.localizacion, year: el.year, resultado: el.porcentaje}
              });
          }
         
        ////////////////////////////////////////////////


         
         if (resumenMAT[miPosicionResumenMAT(ID_VIP)].ordenado == "SI"){
            DATOSfiltradosDEF = DATOSfiltradosDEF.sort(function(a, b){
              return a.resultado-b.resultado
              })
          }

         if (activate == "SI"){

            renderPoblacion(DATOSfiltradosDEF, ambitoGeo)
            
          }

    }  //fin render
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
function renderPoblacion (data, ambitoGeografico){
    alert("dentro de renderPoblacion")
    d3.select(".chart"+ workFrame).selectAll("g").remove()
    var nomContenedor = "contenedorGr" + workFrame;
    var el = document.getElementById(nomContenedor); var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); var mywidthDIV = el.getBoundingClientRect().width;
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV
    var variacionSize = 0.6; //0.6 controla el tamaño de todo
    var chartWidth       = mywidth*variacionSize,
    barHeight        = myheightDIV/(ambitoGeografico.length+4),

    groupHeight      = barHeight * ambitoGeografico.length,

    gapBetweenGroups = 1, //10 de momento no afecta
    spaceForLabels   = chartWidth/2,
    spaceForLegend   = chartWidth/10;


    var MAXIMO = d3.max(data, function(d) {
      return parseFloat(d.resultado); //References first value in each sub-array
    });
 
    var MINIMO = d3.min(data, function(d) {
      return parseInt(d.resultado); //References first value in each sub-array
    });
  // escala
  var espacioParaEjeX =barHeight 
  var chartHeight = espacioParaEjeX + barHeight * data.length + gapBetweenGroups * ambitoGeografico.length;
  // chartHeight es la altura del eje Y
  var y = d3.scale.linear()
  .range([chartHeight + gapBetweenGroups -1.5*espacioParaEjeX, 0]);

  var yAxis = d3.svg.axis()
  .scale(y)
  .tickFormat("")
  .tickSize(1)
  .orient("left");


  var x = d3.scale.linear()
  .domain([0, MAXIMO])
  .range([0, chartWidth]);

  var xAxis = d3.svg.axis()
  .scale(x)
  /*.tickFormat("")
  .tickSize(1)
  .orient("bottom"); */ /////////////

  // Specify the chart area and dimensions
  var chart = d3.select(".chart"+ workFrame)
  .attr("height", chartHeight);
// BARRAS DEL GRAFICO

var max=0;

for (var i = 0; i < ambitoGeografico.length; i++) {
  if (ambitoGeografico[i].length>max){max=ambitoGeografico[i].length}
};

var bar = chart.selectAll("g")
.data(data.map(function (el) {return el.resultado}))
//.data(data)
.enter().append("g")
.attr("transform", function(d, i) {
  return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (1 + Math.floor(i/ambitoGeografico.length))) + ")";
});
  


bar.append("rect")
    .attr("class", function(d,i) { return ("bar" + ((i % ambitoGeografico.length)+1)); })
    .attr("width", x)
    .attr("height", barHeight - 1)
    .data(data.map(function (el) {return el.localizacion}))
    .attr("fill", function(d){return coloresDistritos(d)})
  
    var count = 0;
    var list = []
    for (var i = 0; i < ambitoGeografico.length; i++) {
      if (ambitoGeografico[i]!="vacío"){
        count = count + 1
        list.push(ambitoGeografico[i])
      }
    };
    var lola=0;

// Add text label in bar
bar.append("text")
.attr("x", function(d) { return x(d) - 3; })
.attr("y", barHeight / 2)
.attr("fill", "red")
.attr("font-size","0.8em")
.attr("dy", ".35em")
.text(function(d) { return d; });

// Draw labels
bar.append("text")
.attr("class", "label")
    .attr("x", function(d) { return - spaceForLabels+5; }) // desplazamiento horizontal del label
    .attr("y", barHeight / 2)
    .attr("font-size","0.8em")
    .attr("dy", ".35em")
    .data(data.map(function (el) {return el.localizacion}))
    .text(function(d) { return d })


chart.append("g")
.attr("class", "y axis")
.attr("id","YaxisId")
.attr("transform", "translate(" + spaceForLabels + ", " + gapBetweenGroups/2 + ")")
.call(yAxis);

chart.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(" + spaceForLabels +"," + (chartHeight - 1.5*espacioParaEjeX) + ")")
  .call(xAxis);

}


function renderBARRAS (data, ambitoGeografico){ // ESTA FUNCIÓN ES LA QUE SE USA PARA BARRAS POBLACIÓN CON DISTRITO
    alert("DENTRO DE renderBARRAS")

    d3.select(".chart"+ workFrame).selectAll("g").remove()
    var nomContenedor = "contenedorGr" + workFrame;
    var el = document.getElementById(nomContenedor); var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); var mywidthDIV = el.getBoundingClientRect().width;
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV

    var variacionSize = 0.6; // controla el tamaño de todo
    var chartWidth       = mywidth*variacionSize,
    barHeight        = myheightDIV/(ambitoGeografico.length+4),

    groupHeight      = barHeight * ambitoGeografico.length,

    gapBetweenGroups = 1, //10 de momento no afecta
    spaceForLabels   = chartWidth/2,
    spaceForLegend   = chartWidth/10;


    var MAXIMO = d3.max(data, function(d) {
      return parseFloat(d.resultado); //References first value in each sub-array
    });
 
    var MINIMO = d3.min(data, function(d) {
      return parseInt(d.resultado); //References first value in each sub-array
    });
  // escala
  var espacioParaEjeX =barHeight 
  var chartHeight = espacioParaEjeX + barHeight * data.length + gapBetweenGroups * ambitoGeografico.length;
  // chartHeight es la altura del eje Y
  var y = d3.scale.linear()
  .range([chartHeight + gapBetweenGroups -1.5*espacioParaEjeX, 0]);

  var yAxis = d3.svg.axis()
  .scale(y)
  .tickFormat("")
  .tickSize(1)
  .orient("left");


  var x = d3.scale.linear()
  .domain([0, MAXIMO])
  .range([0, chartWidth]);


  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")/////////////
  .ticks(5)
  //.tickFormat(d3.format(",.0f"))
  // .tickFormat("")
  //.tickSize(5)
 

  // Specify the chart area and dimensions
  var chart = d3.select(".chart"+ workFrame)
  .attr("height", chartHeight);
// BARRAS DEL GRAFICO

var max=0;

for (var i = 0; i < ambitoGeografico.length; i++) {
  if (ambitoGeografico[i].length>max){max=ambitoGeografico[i].length}
};

var bar = chart.selectAll("g")
.data(data.map(function (el) {return el.resultado}))
.enter().append("g")
.attr("transform", function(d, i) {
  return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (1 + Math.floor(i/ambitoGeografico.length))) + ")";
});
  


bar.append("rect")
    .attr("class", function(d,i) { return ("bar" + ((i % ambitoGeografico.length)+1)); })
    .attr("width", x)
    .attr("height", barHeight - 1)
    .data(data.map(function (el) {return el.localizacion}))
    .attr("fill", function(d){return coloresDistritos(d)})
  
    var count = 0;
    var list = []
    for (var i = 0; i < ambitoGeografico.length; i++) {
      if (ambitoGeografico[i]!="vacío"){
        count = count + 1
        list.push(ambitoGeografico[i])
      }
    };
    var lola=0;

// Add text label in bar
bar.append("text")
.attr("x", function(d) { return x(d)+2; })
.attr("y", barHeight / 2)
.attr("fill", "black")
.attr("font-size","0.8em")
.attr("dy", ".35em")
.text(function(d) { return d; });

// Draw labels
bar.append("text")
.attr("class", "label")
    .attr("x", function(d) { return - spaceForLabels+5; }) // desplazamiento horizontal del label
    .attr("y", barHeight / 2)
    .attr("font-size","0.8em")
    .attr("dy", ".35em")
    .data(data.map(function (el) {return el.localizacion}))
    .text(function(d) { return d })


chart.append("g")
.attr("class", "axis")
.attr("id","YaxisId")
.attr("transform", "translate(" + spaceForLabels + ", " + gapBetweenGroups/2 + ")")

.call(yAxis);

chart.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + spaceForLabels +"," + (chartHeight - 1.5*espacioParaEjeX) + ")")
  .call(xAxis);

}


function renderBARRAS_test (DATA){//,NOMCONTENEDOR,COLORES){
  alert("dentro de renderBARRAS_test")
  ID_VIP = miIDVIP_fromWorkFrame(workFrame) // ESTO LO HAGO PARA EL CASO DE VENTANAS COORDINADAS
  var data = DATA;
  var numeroGrafico = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico 
  var IDENTIFICADOR = ID_VIP

  var CHECKBOX = automaticInput(numeroGrafico)
  var POSICION = miPosicionResumenMAT(IDENTIFICADOR)

  var datos_Filtrados =[]
  var controlTexto = []
  for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {            

          if (eval("resumenMAT[POSICION]." + CHECKBOX.filtroResumenMAT + "[i] !='vacío'")){
            controlTexto.push(CHECKBOX.titulosSquaresCB[i])  
          }
          

         datos_Filtrados[i] = data.filter(function (el) {  
              return eval("el." + CHECKBOX.filtroDatos + "=== resumenMAT[POSICION]." + CHECKBOX.filtroResumenMAT + "[i]")
          })
  };
  console.log(datos_Filtrados)
  
  var resultadoFiltradoLimpio=[]
  var n = 0
  for (var i = 0; i < datos_Filtrados.length; i++) {
    if (datos_Filtrados[i].length != 0) {resultadoFiltradoLimpio[n] = datos_Filtrados[i][0]; n = n + 1};
  };
  console.log(resultadoFiltradoLimpio)


  controlTexto.push("")  


  d3.select(".chart"+ workFrame).selectAll("g").remove()


  var nomContenedor = "contenedorGr" + workFrame;
  
  
  var ALTURA_w = document.getElementById(ID_VIP).offsetHeight

  var restar = parseFloat(d3.select("#" + ID_VIP).select("h3").style("height"))+parseFloat(d3.select("#" + ID_VIP).select("h3").style("margin-top"))+parseFloat(d3.select("#" + ID_VIP).select("h3").style("margin-bottom"))
  
  var chartHeight = ALTURA_w-restar
   d3.select(".chart"+ workFrame)
  .attr("height", chartHeight);

  var el = document.getElementById(nomContenedor); 

  var widthContenedor = el.getBoundingClientRect().width;
  var heightContenedor = el.getBoundingClientRect().height;
  
  var escalaGraficoHeight = 0.95//0.95
  var escalaGraficoWidth = 0.8
  widthGrafico = Math.round(widthContenedor*escalaGraficoWidth) 
  heightGrafico = Math.round(heightContenedor*escalaGraficoHeight)

  var offsetParaLetrasEjeY = 32

  var mySvg = d3.select("#" + nomContenedor)
            .attr("width", widthGrafico)            

  var Rfiltros = resumenFiltros(numeroGrafico)
  if (Rfiltros.estatico=="SI") {
    data = data
  }else{data = resultadoFiltradoLimpio}

  
  var MX = d3.max(data, function(d) {
      return parseFloat(d.resultado); 
    });

  var controlPosXIni=0.2 //puede depender del tipo de gráfico
  var posicionXini = widthGrafico*controlPosXIni

  var escalaEjeX = d3.scale.linear()
            .domain([0,MX])
            .range([posicionXini,widthGrafico])
  var escalaDatosX = d3.scale.linear()
            .domain([0,MX])
            .range([0,widthGrafico-posicionXini])

  var stepPadding = 0.15
  var outerPadding =0
  var posicionYini = heightGrafico*0.1
  var offsetParaNumerosEjeX = 10

  var escalaY = d3.scale.ordinal()
              .domain(d3.range(data.length))
              .rangeBands([posicionYini,(heightGrafico-offsetParaNumerosEjeX)], stepPadding,outerPadding);

  //Create bars

  d3.select("#" + nomContenedor).selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", posicionXini)
        .attr("y", function(d,i){return escalaY(i)})
        .attr("width",function(d, i) {
            console.log(escalaDatosX(d.resultado))
            return escalaDatosX(d.resultado);
        })//function(d){escalaX(d.resultado)})
        .attr("height", escalaY.rangeBand())  
        .attr("fill", "red");

  console.log(data)
  //Create axis
  var ejeY = d3.svg.axis().orient("left").tickSize(0).scale(escalaY)
  mySvg.append("g").attr("class","axis Yaxis").call(ejeY).attr("transform","translate(" + posicionXini + ",0)")
  
  
  d3.select("#"+ID_VIP).selectAll("svg").selectAll(".Yaxis").selectAll("text").data(controlTexto).text(function(d){return d})

  var ejeX = d3.svg.axis().orient("bottom").ticks(4).scale(escalaEjeX)
  
  mySvg.append("g").attr("class","axis Xaxis").attr("transform","translate(0," + (heightGrafico-offsetParaNumerosEjeX) + ")").call(ejeX)


}


function renderBARRAS_test2 (DATA,textosY){//,NOMCONTENEDOR,COLORES){

  console.log(textosY)
  var data = DATA;
  ID_VIP = miIDVIP_fromWorkFrame(workFrame) // ESTO LO HAGO PARA EL CASO DE VENTANAS COORDINADAS
  var numeroGrafico = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico 
  var COLORporDefecto="#225ea8"//"#2d3894"
  var COLORES=[]
  var COLORES2=[]
  var graficoConDistritos="NO"
  if (numeroGrafico=="45"||numeroGrafico=="46"||numeroGrafico=="47"||numeroGrafico=="48"||numeroGrafico=="49"||numeroGrafico=="50"||numeroGrafico=="51") 
        { graficoConDistritos="SI"
          COLORES = d3.scale.ordinal().domain([0,1,2,3,4,5,6,7,8,9,10])
                        .range(["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                                "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"])
          COLORES2 = d3.scale.ordinal().domain(["Barcelona", "Ciutat Vella", "Eixample", "Sants-Montjuïc", "Les Corts", "Sarrià-Sant Gervasi",
                "Gràcia", "Horta-Guinardó", "Nou Barris", "Sant Andreu", "Sant Martí"])
                        .range(["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                                "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"])};

  // indico el año en el título:

  d3.select("#" + ID_VIP).select(".tituloGrafico").text(d3.select("#" + ID_VIP).select(".tituloGrafico").text() + " " + resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)

  d3.select(".chart"+ workFrame).selectAll("g").remove()


  var nomContenedor = "contenedorGr" + workFrame;
  
  
  var ALTURA_w = document.getElementById(ID_VIP).offsetHeight

  var restar = parseFloat(d3.select("#" + ID_VIP).select("h3").style("height"))+parseFloat(d3.select("#" + ID_VIP).select("h3").style("margin-top"))+parseFloat(d3.select("#" + ID_VIP).select("h3").style("margin-bottom"))
  
  var chartHeight = ALTURA_w-restar
   d3.select(".chart"+ workFrame)
  .attr("height", chartHeight);

  var el = document.getElementById(nomContenedor); 

  var widthContenedor = el.getBoundingClientRect().width;
  var heightContenedor = el.getBoundingClientRect().height;

  var escalaGraficoHeight = 0.9 //0.95
  var escalaGraficoWidth = 0.85 //0.97
  var margenDerecho = 0.1
  widthGrafico = Math.round(widthContenedor*escalaGraficoWidth)
  heightGrafico = Math.round(heightContenedor*escalaGraficoHeight)
  var widthGraficoSVG = 1.1*widthGrafico
  var offsetParaLetrasEjeY = 32
  var mySvg = d3.select("#" + nomContenedor)
            .attr("width", widthGraficoSVG)

  
  
  var MX = d3.max(data, function(d) {
      return parseFloat(d.resultado); 
    });


  var controlPosXIni=0.2 //puede depender del tipo de gráfico
  var posicionXini = widthGrafico*controlPosXIni

  var escalaEjeX = d3.scale.linear()
            .domain([0,MX])
            .range([posicionXini,widthGrafico])
  var escalaDatosX = d3.scale.linear()
            .domain([0,MX])
            .range([0,widthGrafico-posicionXini])


  var stepPadding = 0.15
  var outerPadding =0
  var posicionYini = heightGrafico*0.1
  var offsetParaNumerosEjeX = 10
  var escalaY = d3.scale.ordinal()
              .domain(d3.range(data.length))
              .rangeBands([posicionYini,(heightGrafico-offsetParaNumerosEjeX)], stepPadding,outerPadding);
  //Create bars


  d3.select("#" + nomContenedor).selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", posicionXini)
        .attr("y", function(d,i){return escalaY(i)})
        .attr("width",function(d, i) {
            console.log(escalaDatosX(d.resultado))
            return escalaDatosX(d.resultado);
        })//function(d){escalaX(d.resultado)})
        .attr("height", escalaY.rangeBand())  
        .attr("fill", function(d,i){
          var colorDefinitivo=[]
          if (graficoConDistritos=="NO") {
            colorDefinitivo = COLORporDefecto
          }
          else
            {colorDefinitivo=COLORES2(textosY[i])}
          return colorDefinitivo})

        .on("mouseover",function(d,i){
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]

                          var valorT = d.resultado;

                          return tooltipBarras(valorT,pos)
                        })
        .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipBarra").classed("hidden", true);
              })

  //Create axis
  var ejeY = d3.svg.axis().orient("left").tickSize(0).scale(escalaY)

  mySvg.append("g").attr("class","axis Yaxis").call(ejeY).attr("transform","translate(" + posicionXini + ",0)")
  

  d3.select("#"+ID_VIP).selectAll("svg").selectAll(".Yaxis").selectAll("text").data(textosY).text(function(d){console.log(d);return d})

  var ejeX = d3.svg.axis().orient("bottom").ticks(4).scale(escalaEjeX)
  
  mySvg.append("g").attr("class","axis Xaxis").attr("transform","translate(0," + (heightGrafico-offsetParaNumerosEjeX) + ")").call(ejeX)

//////////////// unidades eje x

    d3.select("#" + nomContenedor).append("text")      // text label for the x axis

            .attr("x", widthContenedor-60)//widthContenedor*0
            .attr("y",  heightContenedor - 15 )
            .style("text-anchor", "middle")
            .text(function(){return misUnidades(TIPO_GRAFICO, resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)});
          

//título gráfico
    var aditionalText=""
    if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==43||resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==44) {
            aditionalText = "- " + resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr
        };
    if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==47 || (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico>31 & resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico<39)) {resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear=2016};
    d3.select("#" + ID_VIP).select(".tituloGrafico")
        .text(function(){return titulosGraficos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico) + " " + resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear + aditionalText})
  }