function renderEvolucionMensual(datos,FROM, UNTIL,POSICION){
    var colores = ["#35978f","#80cdc1","#7fbc41","#b8e186","#5aae61","#","#a6dba0","#8073ac",
                        "#b2abd2","#bf812d","#dfc27d","#de77ae","#f1b6da","#9970ab","#c2a5cf","#d6604d",
                        "#f45a82","#f46d43","#6799cf"]
    var colores = ["#3288bd","#d53e4f","#99d594","#fc8d59","#01665e","#8c510a","#5ab4ac",
                        "#d8b365","#1b7837","#c51b7d","#4d9221","#e9a3c9","#2166ac","#b2182b","#67a9cf",
                        "#ef8a62","#999999","#6799cf"]
    var anchoLinea="2px"
    var radioPunto="3px";
    var colorPunto="#737373"
    var radioTooltip="5px"

    ///// INTRO
    ID_VIP = miIDVIP_fromWorkFrame(workFrame)

     data = datos
    
    var nomContenedor = "contenedorGr" + workFrame;
    
    d3.select("#"+ ID_VIP).selectAll("svg").data([1]).enter().append("svg")
      .attr("id",nomContenedor)
      .attr("class","chart" + workFrame)
      


    var el = document.getElementById(nomContenedor); 
    var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); 
    var mywidthDIV = el.getBoundingClientRect().width;
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV

    d3.select("#"+ ID_VIP).selectAll("svg").attr("width",mywidthDIV-mywidthDIV/10)
    d3.select("#"+ ID_VIP).selectAll("svg").attr("height",myheightDIV-myheightDIV/10)
    var  WIDTH = mywidthDIV-mywidthDIV/10,
        HEIGHT = myheightDIV-myheightDIV/10,
        MARGINS = {
            top: myheightDIV/10,//10,
            right: mywidthDIV/7,
            bottom: myheightDIV/10,
            left: mywidthDIV/8
        }
    
    ///// FIN INTRO

        var start = new Date(FROM, 0, 01) // 0 = enero; 11 = diciembre
        
        monthStart = start.getMonth() + 1;
        var end = new Date(UNTIL, 11, 31)
        monthEnd = end.getMonth() + 1;
 
        monthStart = start.getFullYear();
        monthEnd = end.getFullYear();

        var xScale = d3.time.scale().domain([start, end]) // <-B
            .range([MARGINS.left, WIDTH - MARGINS.right])

    
///////////////////////////////////// if 11
    if(resumenMAT[POSICION].Idgrafico=="11"){
      var numeroGrafico="11"
      var CHECKBOX = automaticInput(numeroGrafico)
      console.log(CHECKBOX)

      var datosAeropuertoTotal=[]
      var datosAeropuertoNacional=[]
      var datosAeropuertoInternacional=[]
      var MaxTotal=-9999
      var MaxNacional=-9999
      var MaxInternacional=-9999
      var MaximoAeropuerto=[]
      var formatoFechas = d3.time.format("%b")
      var valorTooltipFechas=[]
      
      if (resumenMAT[POSICION].FAeropuerto[0] == "Total")
        {
          datosAeropuertoTotal = datos.filter(function (el) {return el.filtroAeropuerto === "Total"})
          
          var MaxTotal = d3.max(datosAeropuertoTotal, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
           });
        }


        
      if (resumenMAT[POSICION].FAeropuerto[1] == "Nacional")
        {
          datosAeropuertoNacional = datos.filter(function (el) {return el.filtroAeropuerto === "Nacional"})
                  
          var MaxNacional = d3.max(datosAeropuertoNacional, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        
      if (resumenMAT[POSICION].FAeropuerto[2] == "Internacional")
        {
          datosAeropuertoInternacional = datos.filter(function (el) {return el.filtroAeropuerto === "Internacional"})
          
          var MaxInternacional = d3.max(datosAeropuertoInternacional, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        MaximoAeropuerto = [MaxTotal,MaxNacional,MaxInternacional]
        var MAXIMO = d3.max(MaximoAeropuerto, function(d) {
            return parseFloat(d) //References first value in each sub-array
          });
        
        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, MAXIMO]),
        
        xAxis = d3.svg.axis()
        .scale(xScale).tickFormat(d3.time.format("%b %y")).ticks(6),
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")            
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")            
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);

        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d.fecha);
            })
            .y(function(d) {
                return yScale(d.resultado);
            })
            .interpolate("linear");
        
        
        ///////////////// internacional
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosAeropuertoInternacional))
            .attr('stroke', colores[0])
            .attr('stroke-width', anchoLinea)            
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datosAeropuertoInternacional])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[1]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });
            console.log(datosAeropuertoInternacional.length)

            var valorTooltip="9999"
           
            for (var i = 0; i < datosAeropuertoInternacional.length; i++) {
              valorTooltip= datosAeropuertoInternacional[i].resultado
              valorTooltipFechas = [formatoFechas(datosAeropuertoInternacional[i].fecha),datosAeropuertoInternacional[i].resultado]
              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datosAeropuertoInternacional[i].fecha))
                    .attr("cy",yScale(datosAeropuertoInternacional[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto).attr("fill-opacity","0.2")
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = d[0] + " "+ d[1];                        
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };
          var ultimoValorSerie = datosAeropuertoInternacional[0]
                
          if (ultimoValorSerie!=undefined) {
                  d3.select("#" + nomContenedor)
                    .append("text")
                    .attr("x", xScale(ultimoValorSerie.fecha)+7)//+7
                    .attr("y", yScale(ultimoValorSerie.resultado))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    .text("Internacional");
          };
            
        //////////////// total
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosAeropuertoTotal))
            .attr('stroke', colores[1])
            .attr('stroke-width', anchoLinea)
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datosAeropuertoTotal])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[0]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });
            ;
          var valorTooltip="9999"
         
            for (var i = 0; i < datosAeropuertoTotal.length; i++) {
              valorTooltip= datosAeropuertoTotal[i].resultado
              valorTooltipFechas = [formatoFechas(datosAeropuertoTotal[i].fecha),datosAeropuertoTotal[i].resultado]
              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datosAeropuertoTotal[i].fecha))
                    .attr("cy",yScale(datosAeropuertoTotal[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto).attr("fill-opacity","0.2")
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          //var valorT = d;    
                          var valorT = d[0] + " "+ d[1];                     
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };
          var ultimoValorSerie = datosAeropuertoTotal[0]
                    
                
          if (ultimoValorSerie!=undefined) {
                  d3.select("#" + nomContenedor)
                    .append("text")
                    .attr("x", xScale(ultimoValorSerie.fecha)+7)//+7
                    .attr("y", yScale(ultimoValorSerie.resultado))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    .text("Total");
          };
        /////////////// Nacional
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosAeropuertoNacional))
            .attr('stroke', colores[2])
            .attr('stroke-width', anchoLinea)
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datosAeropuertoNacional])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[2]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });;
          var valorTooltip="9999"
 
            for (var i = 0; i < datosAeropuertoNacional.length; i++) {
              valorTooltip= datosAeropuertoNacional[i].resultado
              valorTooltipFechas = [formatoFechas(datosAeropuertoNacional[i].fecha),datosAeropuertoNacional[i].resultado]
              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datosAeropuertoNacional[i].fecha))
                    .attr("cy",yScale(datosAeropuertoNacional[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto).attr("fill-opacity","0.2")
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = d[0] + " "+ d[1];
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };
            var ultimoValorSerie = datosAeropuertoNacional[0]
          
                
          if (ultimoValorSerie!=undefined) {
                  d3.select("#" + nomContenedor)
                    .append("text")
                    .attr("x", xScale(ultimoValorSerie.fecha)+7)//+7
                    .attr("y", yScale(ultimoValorSerie.resultado))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    .text("Nacional");
          };
    

      }
else { 

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
///////////////////////////////////// if 12
    if(resumenMAT[POSICION].Idgrafico=="12"){
      var numeroGrafico="12"
      var CHECKBOX = automaticInput(numeroGrafico)
      var datosTemperaturaMedia=[]
      var datosTemperaturaMinima=[]
      var datosTemperaturaMaxima=[]
      var MaxMedia=-9999
      var MaxMinima=-9999
      var MaxMaxima=-9999
      var MaximoTemperaturas=[]
      var formatoFechas = d3.time.format("%b")
      var valorTooltipFechas=[]
      
      if (resumenMAT[POSICION].FTemperatura[0] == "media")
        {
          datosTemperaturaMedia = datos.filter(function (el) {return el.filtroTempertatura === "media"})
          
          var MaxMedia = d3.max(datosTemperaturaMedia, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
           });
        }


        
      if (resumenMAT[POSICION].FTemperatura[1] == "minima")
        {
          datosTemperaturaMinima = datos.filter(function (el) {return el.filtroTempertatura === "minima"})
                  
          var MaxMinima = d3.max(datosTemperaturaMinima, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        
      if (resumenMAT[POSICION].FTemperatura[2] == "maxima")
        {
          datosTemperaturaMaxima = datos.filter(function (el) {return el.filtroTempertatura === "maxima"})
          
          var MaxMaxima = d3.max(datosTemperaturaMaxima, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        MaximoTemperaturas = [MaxMedia,MaxMinima,MaxMaxima]
        var MAXIMO = d3.max(MaximoTemperaturas, function(d) {
            return parseFloat(d) //References first value in each sub-array
          });
        
        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, MAXIMO]),
        xAxis = d3.svg.axis()
        .scale(xScale).tickFormat(d3.time.format("%b %y")).ticks(6),
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);

        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d.fecha);
            })
            .y(function(d) {
                return yScale(d.resultado);
            })
            .interpolate("linear");
        ////////////////// mínima
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosTemperaturaMinima))
            .attr('stroke', colores[0])
            .attr('stroke-width', anchoLinea)
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datosTemperaturaMinima])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[1]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });

        var valorTooltip="9999"
            for (var i = 0; i < datosTemperaturaMinima.length; i++) {
              valorTooltip= datosTemperaturaMinima[i].resultado
              valorTooltipFechas = [formatoFechas(datosTemperaturaMinima[i].fecha),datosTemperaturaMinima[i].resultado]
              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datosTemperaturaMinima[i].fecha))
                    .attr("cy",yScale(datosTemperaturaMinima[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto).attr("fill-opacity","0.2")
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = d[0] + " "+ d[1];                         
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };
          
          var ultimoValorSerie = datosTemperaturaMinima[0]
          if (ultimoValorSerie!=undefined){
            d3.select("#" + nomContenedor)
                    .append("text")
                    .attr("x", xScale(ultimoValorSerie.fecha)+7)//+7
                    .attr("y", yScale(ultimoValorSerie.resultado))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    .text("Mínima");  
          }
          
          
        ////////////// máxima
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosTemperaturaMaxima))
            .attr('stroke', colores[1])
            .attr('stroke-width', anchoLinea)
            //.attr('fill', 'black')
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datosTemperaturaMaxima])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[1]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });         


        var valorTooltip="9999"
            for (var i = 0; i < datosTemperaturaMaxima.length; i++) {
              valorTooltip= datosTemperaturaMaxima[i].resultado
              valorTooltipFechas = [formatoFechas(datosTemperaturaMaxima[i].fecha),datosTemperaturaMaxima[i].resultado]
              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datosTemperaturaMaxima[i].fecha))
                    .attr("cy",yScale(datosTemperaturaMaxima[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto).attr("fill-opacity","0.2")
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = d[0] + " "+ d[1];                     
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };

          var ultimoValorSerie = datosTemperaturaMaxima[0]
          if (ultimoValorSerie!=undefined){
                 d3.select("#" + nomContenedor)
                        .append("text")
                        .attr("x", xScale(ultimoValorSerie.fecha)+7)//+7
                        .attr("y", yScale(ultimoValorSerie.resultado))
                        .attr("fill", "black")
                        .attr("font-size","0.8em")
                        .attr("dy", ".35em")
                        .text("Máxima");
          }
              
           
        ///////////// Media
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosTemperaturaMedia))
            .attr('stroke', colores[2])
            .attr('stroke-width', anchoLinea)
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datosTemperaturaMedia])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  var valorT = eval("d[1]." + CHECKBOX.filtroDatos);                         
                  return tooltipEvolucion(valorT,pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });

        var valorTooltip="9999"

            for (var i = 0; i < datosTemperaturaMedia.length; i++) {
              valorTooltipFechas = [formatoFechas(datosTemperaturaMedia[i].fecha),datosTemperaturaMedia[i].resultado]
              valorTooltip= datosTemperaturaMedia[i].resultado
              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datosTemperaturaMedia[i].fecha))
                    .attr("cy",yScale(datosTemperaturaMedia[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto).attr("fill-opacity","0.2")
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]                                          
                          var valorT = d[0] + " "+ d[1];         
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };

          var ultimoValorSerie = datosTemperaturaMedia[0]
          
                
          if (ultimoValorSerie!=undefined) {
                  d3.select("#" + nomContenedor)
                    .append("text")
                    .attr("x", xScale(ultimoValorSerie.fecha)+7)//+7
                    .attr("y", yScale(ultimoValorSerie.resultado))
                    .attr("fill", "black")
                    .attr("font-size","0.8em")
                    .attr("dy", ".35em")
                    .text("Media");
          };
            

      }
      else{ // 10, 13, 40,41 o 42
        var tituloSerie = d3.scale.ordinal()
          .domain(["10","13","40","41","42"])
          .range(["Puerto","Precipitaciones","Ocupación hotelera","Empleados","Precio Hoteles"])

        var numeroGrafico=resumenMAT[POSICION].Idgrafico


        var MAXIMO = d3.max(datos, function(d) {
          return parseFloat(d.resultado) //References first value in each sub-array
        });

        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, MAXIMO]),
        xAxis = d3.svg.axis()
        .scale(xScale).tickFormat(d3.time.format("%b %y")).ticks(6),
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);

        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d.fecha);
            })
            .y(function(d) {
                return yScale(d.resultado);
            })
            .interpolate("linear");
        
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datos))
            .attr('stroke', colores[0])
            .attr('stroke-width', anchoLinea)
            .attr('fill', 'none')
            .classed("lineGenEv",true) // me permite resaltar la linea on hover (mirar css)
            .data([datos])
            .on("mouseover",function(d){
                    console.log(d)
                  var coords = d3.mouse(this);
                  var pos = [event.pageX,event.pageY]
                  return tooltipEvolucion(tituloSerie(numeroGrafico),pos)
                })
            .on("mouseout", function() {
              //Hide the tooltip
              d3.select("#tooltipEvolucion").classed("hidden", true);
              });
        var valorTooltip="9999";
        var valorTooltipFechas=[];
        var formatoFechas = d3.time.format("%b")

            for (var i = 0; i < datos.length; i++) {
              valorTooltip= datos[i].resultado
              valorTooltipFechas = [formatoFechas(datos[i].fecha),datos[i].resultado]

              d3.select("#" + nomContenedor)
                .append("circle")
                    .attr("cx",xScale(datos[i].fecha))
                    .attr("cy",yScale(datos[i].resultado))
                    .attr("r", radioPunto)
                    .attr("fill",colorPunto)
                    .attr("fill-opacity","0.2")                    
                    .data([valorTooltipFechas])
                    .on("mouseover",function(d){
                          d3.select(this).attr("r",radioTooltip).attr("fill-opacity","1")
                          var coords = d3.mouse(this);
                          var pos = [event.pageX,event.pageY]
                          var valorT = d[0] + " "+ d[1];                         
                          return tooltipEvolucion(valorT,pos)
                        })
                    .on("mouseout", function() {
                          d3.select(this).attr("r",radioPunto).attr("fill-opacity","0.2")
                          //Hide the tooltip
                          d3.select("#tooltipEvolucion").classed("hidden", true);
                          })
            };

      }




}
  

  d3.select("#" + nomContenedor).append("text")      // text label for the x axis
              .attr("x", MARGINS.left/2 )
              .attr("y",  HEIGHT/10 )
              .style("text-anchor", "middle")
              .text(function(){return misUnidades(TIPO_GRAFICO, resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)});
              
  d3.select("#" + ID_VIP).select(".tituloGrafico")
      .text(function(){return titulosGraficos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico) + " (" + equivalenciaTipoGrafico(TIPO_GRAFICO) + ")"})
}