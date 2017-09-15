/*function automatizacionRenderEvolution(numeroGrafico,DATA,IDENTIFICADOR,NOMCONTENEDOR,COLORES){
    /////////////////// OJO QUE xScale y yScale son globales. Esto podría fastidiar el uso en otros lados de la función
  var CHECKBOX = automaticInput(numeroGrafico)


    var POSICION = miPosicionResumenMAT(IDENTIFICADOR)

    
    if (resumenFiltros(numeroGrafico).mensualTest=="SI") {
        var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.fecha);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");    
    }
    else{
        var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");    
    }
    

    var maximoEjeY=[]
    if (CHECKBOX.titulosSquaresCB.length==0){

        var datos_Filtrados = DATA 
        d3.select("#" + NOMCONTENEDOR).append('svg:path')
            .attr('d', lineGen(datos_Filtrados))
            .attr('stroke', COLORES)
            .attr('stroke-width', 2)
            //.attr('fill', 'black')
            .attr('fill', 'none');
    }
    else{var datos_Filtrados = [];
        for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {            
                //alert(CHECKBOX.subfiltrosDatos[i])
                //alert(eval("el." + CHECKBOX.filtroDatos + "=== CHECKBOX.subfiltrosDatos[i]"))
                datos_Filtrados[i] = DATA.filter(function (el) {  
                    return eval("el." + CHECKBOX.filtroDatos + "=== resumenMAT[POSICION]." + CHECKBOX.filtroResumenMAT + "[i]")
                    //return eval("el." + CHECKBOX.filtroDatos + "=== CHECKBOX.subfiltrosDatos[i]")

                })
                
                d3.select("#" + NOMCONTENEDOR).append('svg:path')
                    .attr('d', lineGen(datos_Filtrados[i]))
                    .attr('stroke', COLORES[i])
                    .attr('stroke-width', 2)
                    //.attr('fill', 'black')
                    .attr('fill', 'none');

                maximoEjeY[i] = d3.max(datos_Filtrados[i], function(d) {
                     return parseFloat(d.resultado) //References first value in each sub-array
                });

            };


    }
    var MAXIMO_total = d3.max(maximoEjeY, function(d) {
                     return parseFloat(d) //References first value in each sub-array
                });
    console.log(datos_Filtrados)
    console.log(maximoEjeY)
    console.log(MAXIMO_total)
    

       
} 
*/


function automatizacionRenderEvolution2(numeroGrafico,DATA,IDENTIFICADOR,NOMCONTENEDOR,COLORES,height,margins){
    /////////////////// OJO QUE xScale y yScale son globales. Esto podría fastidiar el uso en otros lados de la función
    var CHECKBOX = automaticInput(numeroGrafico)
    var colorPunto="#737373"
    var radioPunto="3px";
    var anchoLinea="2px"
    var radioTooltip="5px"

    //alert(eval("DATA[0]." + CHECKBOX.filtroDatos))
    console.log(DATA)
    var POSICION = miPosicionResumenMAT(IDENTIFICADOR)
    var maximoEjeY=[]
    var MAXIMO_Y_total = []


    if (resumenFiltros(numeroGrafico).mensualTest=="SI") {
        var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.fecha);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");    
    }
    else{
        var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");    
    }

    if (CHECKBOX.titulosSquaresCB.length!=0){
        var datos_Filtrados = [];
        for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {
            datos_Filtrados[i] = DATA.filter(function (el) {  
                    return eval("el." + CHECKBOX.filtroDatos + "=== resumenMAT[POSICION]." + CHECKBOX.filtroResumenMAT + "[i]")
                    //return eval("el." + CHECKBOX.filtroDatos + "=== CHECKBOX.subfiltrosDatos[i]")
                })
            maximoEjeY[i] = d3.max(datos_Filtrados[i], function(d) {
                 return parseFloat(d.resultado) //References first value in each sub-array
            });
        };

        MAXIMO_Y_total = d3.max(maximoEjeY, function(d) {
                     return parseFloat(d) //References first value in each sub-array
                });   

        yScale = d3.scale.linear().range([height - margins.top, margins.bottom])
                                .domain([0, MAXIMO_Y_total])

        d3.select("#" + IDENTIFICADOR).select(".y.axis").remove()
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
                
        

        d3.select("#contenedorGr" +  miWorkFrame_fromIDVIP(IDENTIFICADOR)).append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (margins.left) + ",0)")
            .call(yAxis);
        


        console.log(datos_Filtrados)

        for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {            
          
                d3.select("#" + NOMCONTENEDOR).append('svg:path')
                    .attr('d', lineGen(datos_Filtrados[i]))
                    .attr('stroke', COLORES[i])
                    .attr('stroke-width', anchoLinea)
                    .attr('fill', 'none')
                    .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
                    .data([datos_Filtrados[i]])
                    .on("mouseover",function(d,i){
                            console.log(d)
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = eval("d[i]." + CHECKBOX.filtroDatos); 
                        ////////////////
                        //d3.select(this).attr("stroke","orange").attr("stroke-width","5px")
                        ///////////////

                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                      //Hide the tooltip
                      d3.select("#tooltipEvolucion").classed("hidden", true);
                      })
            };


            ///////////
            var sliceDatosFiltrados=[]
            var centroX =[]
            var centroY =[]
            var CENTRO_Y = []
            var CENTRO_X = []
            var LegendCentroX = []
            var LegendCentroY = []
            
            var objetoDatos={resultado:"",year:""}
            var datosSimples=[]
            //alert(datos_Filtrados.length)
            var contador = 0
            for (var j = 0; j < datos_Filtrados.length; j++) {
                centroX = 999
                centroY = 999
                sliceDatosFiltrados=datos_Filtrados[j]
                //sliceDatosFiltrados=datos_Filtrados[j].slice()
                console.log(sliceDatosFiltrados)
                for (var jj = 0; jj < sliceDatosFiltrados.length; jj++) {
                    //console.log(sliceDatosFiltrados[jj].year)
                    //console.log(sliceDatosFiltrados[jj].resultado)
                    centroX = sliceDatosFiltrados[jj].year
                    centroY = sliceDatosFiltrados[jj].resultado
                    CENTRO_Y.push(sliceDatosFiltrados[jj].resultado)

                    d3.select("#" + NOMCONTENEDOR)
                        .append("circle")
                            .attr("cx",xScale(centroX))
                            .attr("cy",yScale(centroY))
                            .attr("r", radioPunto)
                            .attr("fill",colorPunto)
                            .attr("fill-opacity","0.2")
                        .data([centroY])
                        .on("mouseover",function(d,i){
                                    console.log(d)
                                    d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                                  var coords = d3.mouse(this);
                                  var pos = [event.pageX,event.pageY]
                                  var valorT = d;                         
                                  return tooltipEvolucion(valorT,pos)
                                })
                        .on("mouseout", function() {
                              d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                              //Hide the tooltip
                              d3.select("#tooltipEvolucion").classed("hidden", true);
                              })
                };
                if(centroX!=999 & centroY!=999){
                    //alert("debería escribir leyenda")
                    var TextoLegend = eval("sliceDatosFiltrados[0]." + CHECKBOX.filtroDatos);
                    var maxLegend = d3.max(sliceDatosFiltrados, function(d) {
                             return parseFloat(d.year) //References first value in each sub-array
                        });
                    var ultimoValorSerie = sliceDatosFiltrados.filter(function (el){
                        return el.year == maxLegend})
                    console.log(ultimoValorSerie[0].resultado)
                    console.log(maxLegend)
                //}
                    //alert("debería escribir leyenda " + TextoLegend)
                    d3.select("#" + NOMCONTENEDOR)
                            .append("text")
                            .attr("x", xScale(ultimoValorSerie[0].year)+7)
                            .attr("y", yScale(ultimoValorSerie[0].resultado))
                            .attr("fill", "black")
                            .attr("font-size","0.8em")
                            .attr("dy", ".35em")
                            //.text(TextoLegend)
                            .text(TextoLegend);
                }
                
            };


    }
  

    if (CHECKBOX.titulosSquaresCB.length==0){

        var datos_Filtrados = DATA
        console.log(datos_Filtrados) 
        d3.select("#" + NOMCONTENEDOR).append('svg:path')
            .attr('d', lineGen(datos_Filtrados))
            .attr('stroke', COLORES[0])
            .attr('stroke-width', anchoLinea)
            //.attr('fill', 'black')
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datos_Filtrados[i]])
            .on("mouseover",function(d,i){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  //var valorT = eval("d[i]." + CHECKBOX.filtroDatos); 
                  var valorT;   
                  if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==27) {valorT = "Licencias VUT"};
                  if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==28) {valorT = "Plazas en VUT"};
                  //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
                  //var valorT = ("pepe");
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              })


            ///////////
            var sliceDatosFiltrados=[]
            var centroX =[]
            var centroY =[]
            var CENTRO_Y = []
            var CENTRO_X = []
            var LegendCentroX = []
            var LegendCentroY = []
            
            var objetoDatos={resultado:"",year:""}
            var datosSimples=[]
            //alert(datos_Filtrados.length)
            var contador = 0
            for (var j = 0; j < datos_Filtrados.length; j++) {
                centroX = 999
                centroY = 999
                sliceDatosFiltrados=datos_Filtrados[j]
                //sliceDatosFiltrados=datos_Filtrados[j].slice()
                console.log(datos_Filtrados.length)
                //for (var jj = 0; jj < sliceDatosFiltrados.length; jj++) {
                    
                    //console.log(sliceDatosFiltrados[jj].year)
                    //console.log(sliceDatosFiltrados[jj].resultado)
                    centroX = sliceDatosFiltrados.year
                    centroY = sliceDatosFiltrados.resultado
                    CENTRO_Y.push(sliceDatosFiltrados.resultado)
                    console.log(xScale(centroX))
                    d3.select("#" + NOMCONTENEDOR)
                        .append("circle")
                            .attr("cx",xScale(centroX))
                            .attr("cy",yScale(centroY))
                            .attr("r", radioPunto)
                            .attr("fill",colorPunto)
                            .attr("fill-opacity","0.2")
                        .data([centroY])
                        .on("mouseover",function(d,i){
                                    console.log(d)
                                    d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                                  var coords = d3.mouse(this);
                                  var pos = [event.pageX,event.pageY]
                                  var valorT = d;                         
                                  return tooltipEvolucion(valorT,pos)
                                })
                        .on("mouseout", function() {
                              d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                              //Hide the tooltip
                              d3.select("#tooltipEvolucion").classed("hidden", true);
                              })
 
                
            };


    }


    d3.select("#contenedorGr" +  miWorkFrame_fromIDVIP(IDENTIFICADOR)).append("text")      // text label for the x axis
            .attr("x", margins.left/2 )
            .attr("y",  height/10 )
            .style("text-anchor", "middle")
            //.text("%")
            .text(function(){return misUnidades(TIPO_GRAFICO,resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)}); // debería llamar a la función para poner las unidades
            //alert("top" + margins.top)
            //alert("left" + margins.left) 
//    alert(ID_VIP)
    var aditionalText=""
    if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==43||resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico==44) {
            aditionalText = " " + resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr
        };
    d3.select("#" + ID_VIP).select(".tituloGrafico")
        .text(function(){return titulosGraficos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico) + " (" + equivalenciaTipoGrafico(TIPO_GRAFICO) + ")" + aditionalText})
    
}


//////////////////// FUNCIÓN PARA COLOCAR LAS UNIDADES EN EJE Y

function misUnidades(tipoGrafico,id_grafico){/*,tipo_de_grafico*/
    // esta función es la que decide las unidades que debe tener un eje según configuración y gráfico
    var salidaMisUnidades;
    //alert(id_grafico)
    //alert(tipoGrafico)
    //alert(eval("automaticInput(id_grafico)." + tipoGrafico))
    //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje=="SI")

    // chapucero pero funcionará de momento:
    if (id_grafico==49||id_grafico==50||id_grafico==51) {resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"};
    ///////////////////////// fin chapuza ////////////////

    
    if (resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje=="SI") {salidaMisUnidades="%"}
        else{salidaMisUnidades = eval("automaticInput(id_grafico)." + tipoGrafico)};
    return salidaMisUnidades
  }

function equivalenciaTipoGrafico(tipoGrafico){

    // le entra ID_VIP y entrega la posición en resumenMAT
      var convertTipo = d3.scale.ordinal()
        .domain(["VA_anual","VA_mensual","EVOL_anual","EVOL_mensual"])
        .range(["Variación anual","Variación anual","Evolución","Evolución"])
      return convertTipo(tipoGrafico)
}
