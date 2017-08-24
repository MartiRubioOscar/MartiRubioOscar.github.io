function automatizacionRenderVariacionAnual(DATA){
    ID_VIP = miIDVIP_fromWorkFrame(workFrame)
    var nomContenedor = "contenedorGr" + workFrame;

    d3.select("#"+ ID_VIP).selectAll("svg").data([1]).enter().append("svg")
      .attr("id",nomContenedor)
      .attr("class","chart" + workFrame)
      //.attr("width", "100%")


    var el = document.getElementById(nomContenedor); var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); 
    var mywidthDIV = el.getBoundingClientRect().width;
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV
    
    d3.select("#"+ ID_VIP).selectAll("svg").attr("width",mywidthDIV-mywidthDIV/10)
    d3.select("#"+ ID_VIP).selectAll("svg").attr("height",myheightDIV-myheightDIV/5)
    var  WIDTH = mywidthDIV-85,
        HEIGHT = myheightDIV-myheightDIV/5,
        MARGINS = {
            top: myheightDIV/10,//10,
            right: mywidthDIV/7,
            bottom: myheightDIV/10,
            left: mywidthDIV/8
        }




    /////////////////// OJO QUE xScale2 y yScale2 son globales. Esto podría fastidiar el uso en otros lados de la función
    var COLORES = d3.scale.category20b()
    console.log(COLORES(0))
    var posicionMatrizResumenMat = miPosicionResumenMAT(ID_VIP)
    numeroGrafico = resumenMAT[posicionMatrizResumenMat].Idgrafico
    if (numeroGrafico=="45"||numeroGrafico=="46"||numeroGrafico=="47"||numeroGrafico=="48"||numeroGrafico=="49"||numeroGrafico=="50"||numeroGrafico=="51") 
        {COLORES = d3.scale.ordinal().domain([0,1,2,3,4,5,6,7,8,9,10])
                        .range(["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                                "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"])};

    var CHECKBOX = automaticInput(numeroGrafico)


    var POSICION = posicionMatrizResumenMat
    var IDENTIFICADOR = ID_VIP
    var NOMCONTENEDOR = "contenedorGr" + miWorkFrame_fromIDVIP(IDENTIFICADOR);

    var maximoEjeY=[]
    var minimoEjeY=[]
    var MAXIMO_Y_total = []
    var MINIMO_Y_total = []

    var maximoYear=[]
    var minimoYear=[]
    var MAXIMOyear=[]
    var MINIMOyear=[]

    var yScale2
    var xScale2

    var xAxis=[]
    var yAxis=[]

    if (resumenFiltros(numeroGrafico).mensualTest=="SI") {
        var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale2(d.fecha);
                })
                .y(function(d) {
                    return yScale2(d.resultado);
                })
                .interpolate("linear");    
    }
    else{
        var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale2(d.year);
                })
                .y(function(d) {
                    return yScale2(d.resultado);
                })
                .interpolate("linear");    
    }

    if (CHECKBOX.titulosSquaresCB.length==0){
        
        MAXIMO_Y_total = d3.max(DATA, function(d) {
                 return parseFloat(d.resultado) //References first value in each sub-array
            });
        MINIMO_Y_total = d3.min(DATA, function(d) {
                 return parseFloat(d.resultado) //References first value in each sub-array
            });
        MAXIMOyear = d3.max(DATA, function(d) {
                     return parseFloat(d.year) //References first value in each sub-array
                });   
        MINIMOyear = d3.min(DATA, function(d) {
                     return parseFloat(d.year) //References first value in each sub-array
                });


        yScale2 = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                    .domain([MINIMO_Y_total, MAXIMO_Y_total])

        d3.select("#" + IDENTIFICADOR).select(".y.axis").remove()
        yAxis = d3.svg.axis()
            .scale(yScale2)
            .orient("left");
                                
        d3.select("#contenedorGr" +  miWorkFrame_fromIDVIP(IDENTIFICADOR)).append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);

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
            maximoYear[i] = d3.max(datos_Filtrados[i], function(d) {
                 return parseFloat(d.year) //References first value in each sub-array
            });
            minimoEjeY[i] = d3.min(datos_Filtrados[i], function(d) {
                 return parseFloat(d.resultado) //References first value in each sub-array
            });
            minimoYear[i] = d3.min(datos_Filtrados[i], function(d) {
                 return parseFloat(d.year) //References first value in each sub-array
            });
        }
        MAXIMO_Y_total = d3.max(maximoEjeY, function(d) {
                     return parseFloat(d) //References first value in each sub-array
                });   
        MINIMO_Y_total = d3.min(minimoEjeY, function(d) {
                     return parseFloat(d) //References first value in each sub-array
                });  
        MAXIMOyear = d3.max(maximoYear, function(d) {
                     return parseFloat(d) //References first value in each sub-array
                });   
        MINIMOyear = d3.min(minimoYear, function(d) {
                     return parseFloat(d) //References first value in each sub-array
                });  

        yScale2 = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([MINIMO_Y_total, MAXIMO_Y_total])



        d3.select("#" + IDENTIFICADOR).select(".y.axis").remove()
        yAxis = d3.svg.axis()
            .scale(yScale2)
            .orient("left");
                
                
        d3.select("#contenedorGr" +  miWorkFrame_fromIDVIP(IDENTIFICADOR)).append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);

    }

    xScale2 = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]) // mirar nota!!!!!
                .domain([MINIMOyear, MAXIMOyear])
    xAxis = d3.svg.axis()
                .scale(xScale2)
                .tickFormat(d3.format(".4r"))
                .ticks(MAXIMOyear-MINIMOyear)
            
    d3.select("#" + nomContenedor).append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis);

    if (CHECKBOX.titulosSquaresCB.length==0){
        //console.log(DATA)
        var datos_Filtrados = DATA 
        d3.select("#" + NOMCONTENEDOR).append('svg:path')
            .attr('d', lineGen(datos_Filtrados))
            .attr('stroke', COLORES)
            .attr('stroke-width', 2)
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datos_Filtrados[i]])
            .on("mouseover",function(d,i){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[i]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              })
    }
    else{
        for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {            

                
                d3.select("#" + NOMCONTENEDOR).append('svg:path')
                    .attr('d', lineGen(datos_Filtrados[i]))
                    .attr('stroke', COLORES(i))
                    .attr('stroke-width', 2)
                    .attr('fill', 'none')
                    .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
                    .data([datos_Filtrados[i]])
                    .on("mouseover",function(d,i){
                            console.log(d)
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = eval("d[i]." + CHECKBOX.filtroDatos);                         
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                      //Hide the tooltip
                      d3.select("#tooltipEvolucion").classed("hidden", true);
                      })
            };
    }
    var sliceDatosFiltrados=[]
    var centroX =[]
    var centroY =[]
    var LegendCentroX = []
    var LegendCentroY = []
    //var CENTRO_Y = []
    //var CENTRO_X = []
    //var objetoDatos={resultado:"",year:""}
    //var datosSimples=[]
    //console.log(datos_Filtrados)
    //var contador = 0
    for (var j = 0; j < datos_Filtrados.length; j++) {
        centroX = 999
        centroY = 999
        //alert(datos_Filtrados[j].length)
        sliceDatosFiltrados=datos_Filtrados[j].slice()
        console.log(sliceDatosFiltrados)
        //alert(sliceDatosFiltrados.length==0)
        for (var jj = 0; jj < sliceDatosFiltrados.length; jj++) {
            //console.log(sliceDatosFiltrados)
            //console.log(sliceDatosFiltrados[jj].resultado)
            centroX = sliceDatosFiltrados[jj].year
            centroY = sliceDatosFiltrados[jj].resultado
            //CENTRO_Y.push(sliceDatosFiltrados[jj].resultado)

            d3.select("#" + NOMCONTENEDOR)
                .append("circle")
                    .attr("cx",xScale2(centroX))
                    .attr("cy",yScale2(centroY))
                    .attr("r", "5px")
                    .attr("fill","red")
                .data([centroY])
                .on("mouseover",function(d,i){
                            console.log(d)
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = d;                         
                          return tooltipVA(valorT,pos)
                        })
                .on("mouseout", function() {
                      //Hide the tooltip
                      d3.select("#tooltipVA").classed("hidden", true);
                      })
            /*d3.select("#" + NOMCONTENEDOR)
                .append("text")
                .attr("x", xScale2(centroX))
                .attr("y", yScale2(centroY))
                .attr("fill", "black")
                .attr("font-size","0.8em")
                .attr("dy", ".35em")
                .text("hola");*/
                //LegendCentroX = sliceDatosFiltrados[sliceDatosFiltrados.length-1].year
                //LegendCentroY = sliceDatosFiltrados[sliceDatosFiltrados.length-1].resultado
                //console.log(datos_Filtrados[jj][0])
                //
                //var TextoLegend = eval("datos_Filtrados[jj][0]." + CHECKBOX.filtroDatos);
                
                //console.log(TextoLegend)
                /*d3.select("#" + NOMCONTENEDOR)
                    .append("text")
                    .attr("x", xScale2(LegendCentroX))
                    .attr("y", yScale2(LegendCentroY))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    //.text(TextoLegend)
                    .text("hola");*/
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
                    .attr("x", xScale2(ultimoValorSerie[0].year)+7)
                    .attr("y", yScale2(ultimoValorSerie[0].resultado))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    //.text(TextoLegend)
                    .text(TextoLegend);
        }
        /*LegendCentroX = sliceDatosFiltrados[sliceDatosFiltrados.length-1].year
        LegendCentroY = sliceDatosFiltrados[sliceDatosFiltrados.length-1].resultado
        d3.select("#" + NOMCONTENEDOR)
                .append("text")
                .attr("x", xScale2(LegendCentroX))
                .attr("y", yScale2(LegendCentroY))
                .attr("fill", "black")
                .attr("font-size","0.8em")
                .attr("dy", ".35em")
                .text("pepe");*/
    };   
    //console.log(CHECKBOX)
} 

