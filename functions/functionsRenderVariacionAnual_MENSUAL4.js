function renderVariacionAnual_Mensual(datos,FROM,UNTIL,POSICION) {    
  //alert("dentro va")
     ///// INTRO
   ID_VIP = miIDVIP_fromWorkFrame(workFrame)

     data = datos
    var nomContenedor = "contenedorGr" + workFrame;
    
    d3.select("#"+ ID_VIP).selectAll("svg").data([1]).enter().append("svg")
      .attr("id",nomContenedor)
      .attr("class","chart" + workFrame)
      //.attr("width", "100%")


    var el = document.getElementById(nomContenedor); var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); var mywidthDIV = el.getBoundingClientRect().width;
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV

    d3.select("#"+ ID_VIP).selectAll("svg").attr("width",mywidthDIV-mywidthDIV/10)
    d3.select("#"+ ID_VIP).selectAll("svg").attr("height",myheightDIV-myheightDIV/5)
   var  WIDTH = mywidthDIV,
        HEIGHT = myheightDIV-myheightDIV/5,
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

  var grafico = resumenMAT[POSICION].Idgrafico
  switch(true) {
    case grafico=="11":
      var datosAeropuertoTotal=[]
      var datosAeropuertoNacional=[]
      var datosAeropuertoInternacional=[]
      var MaxTotal=-9999
      var MaxNacional=-9999
      var MaxInternacional=-9999
      var MaximoAeropuerto=[]
      var MinTotal=9999
      var MinNacional=9999
      var MinInternacional=9999
      var MinimoAeropuerto=[]
      
      if (resumenMAT[POSICION].FAeropuerto[0] == "Total")
        {
          datosAeropuertoTotal = datos.filter(function (el) {return el.filtroAeropuerto === "Total"})
          
          var MaxTotal = d3.max(datosAeropuertoTotal, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
           });
          var MinTotal = d3.min(datosAeropuertoTotal, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
           });
        }


        
      if (resumenMAT[POSICION].FAeropuerto[1] == "Nacional")
        {
          datosAeropuertoNacional = datos.filter(function (el) {return el.filtroAeropuerto === "Nacional"})
          
        
          var MaxNacional = d3.max(datosAeropuertoNacional, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
          var MinNacional = d3.min(datosAeropuertoNacional, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        
      if (resumenMAT[POSICION].FAeropuerto[2] == "Internacional")
        {
          datosAeropuertoInternacional = datos.filter(function (el) {return el.filtroAeropuerto === "Internacional"})
          
          var MaxInternacional = d3.max(datosAeropuertoInternacional, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
          var MinInternacional = d3.min(datosAeropuertoInternacional, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        MaximoAeropuerto = [MaxTotal,MaxNacional,MaxInternacional]
        MinimoAeropuerto = [MinTotal,MinNacional,MinInternacional]
        var MAXIMO = d3.max(MaximoAeropuerto, function(d) {
            return parseFloat(d) //References first value in each sub-array
          });
        var MINIMO = d3.min(MinimoAeropuerto, function(d) {
         return parseFloat(d) //References first value in each sub-array
        });

        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([MINIMO, MAXIMO])
        var xAxis = d3.svg.axis()
        .scale(xScale).tickFormat(d3.time.format("%b %y"))
        var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
            
        
          
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")
            //.attr("transform", "translate(" + (MARGINS.left) + ",0)")
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
            .attr('d', lineGen(datosAeropuertoInternacional))
            .attr('stroke', 'black')
            .attr('stroke-width', 4)
            //.attr('fill', 'black')
            .attr('fill', 'none');

        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosAeropuertoTotal))
            .attr('stroke', 'red')
            .attr('stroke-width', 4)
            //.attr('fill', 'black')
            .attr('fill', 'none');
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosAeropuertoNacional))
            .attr('stroke', 'blue')
            .attr('stroke-width', 4)
            //.attr('fill', 'black')
            .attr('fill', 'none');

        break;
    case grafico=="12":
      var datosTemperaturaMedia=[]
      var datosTemperaturaMinima=[]
      var datosTemperaturaMaxima=[]
      var MaxMedia=-9999
      var MaxMinima=-9999
      var MaxMaxima=-9999
      var MaximoTemperaturas=[]
      var MinMedia=9999
      var MinMinima=9999
      var MinMaxima=9999
      var MinimoTemperaturas=[]
      
      if (resumenMAT[POSICION].FTemperatura[0] == "media")
        {
          datosTemperaturaMedia = datos.filter(function (el) {return el.filtroTempertatura === "media"})
          
          var MaxMedia = d3.max(datosTemperaturaMedia, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
           });
          var MinMedia = d3.min(datosTemperaturaMedia, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
           });
        }


        
      if (resumenMAT[POSICION].FTemperatura[1] == "minima")
        {
          datosTemperaturaMinima = datos.filter(function (el) {return el.filtroTempertatura === "minima"})
                  
          var MaxMinima = d3.max(datosTemperaturaMinima, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
          var MinMinima = d3.min(datosTemperaturaMinima, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        
      if (resumenMAT[POSICION].FTemperatura[2] == "maxima")
        {
          datosTemperaturaMaxima = datos.filter(function (el) {return el.filtroTempertatura === "maxima"})
          
          var MaxMaxima = d3.max(datosTemperaturaMaxima, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
          var MinMaxima = d3.min(datosTemperaturaMaxima, function(d) {
            return parseFloat(d.resultado) //References first value in each sub-array
          });
        }
        
        MaximoTemperaturas = [MaxMedia,MaxMinima,MaxMaxima]
        MinimoTemperaturas = [MinMedia,MinMinima,MinMaxima]
        var MAXIMO = d3.max(MaximoTemperaturas, function(d) {
            return parseFloat(d) //References first value in each sub-array
          });
        var MINIMO = d3.min(MinimoTemperaturas, function(d) {
            return parseFloat(d) //References first value in each sub-array
          });
        
        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([MINIMO, MAXIMO])
        
        var xAxis = d3.svg.axis()
        .scale(xScale).tickFormat(d3.time.format("%b %y"))
        var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")
            //.attr("transform", "translate(" + (MARGINS.left) + ",0)")
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
            .attr('d', lineGen(datosTemperaturaMinima))
            .attr('stroke', 'blue')
            .attr('stroke-width', 4)
            //.attr('fill', 'black')
            .attr('fill', 'none');

        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosTemperaturaMaxima))
            .attr('stroke', 'red')
            .attr('stroke-width', 4)
            //.attr('fill', 'black')
            .attr('fill', 'none');
        d3.select("#" + nomContenedor).append('svg:path')
            .attr('d', lineGen(datosTemperaturaMedia))
            .attr('stroke', 'black')
            .attr('stroke-width', 4)
            //.attr('fill', 'black')
            .attr('fill', 'none');
        break;

    case grafico=="10" || grafico=="42" || grafico=="41" || grafico=="40":
      //alert("dataset 10")
        var MAXIMO = d3.max(datos, function(d) {
         return parseFloat(d.resultado) //References first value in each sub-array
        });
        var MINIMO = d3.min(datos, function(d) {
         return parseFloat(d.resultado) //References first value in each sub-array
        });

        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([MINIMO, MAXIMO])
        
        var xAxis = d3.svg.axis()
        .scale(xScale)
        var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
 

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")
            //.attr("transform", "translate(" + (MARGINS.left) + ",0)")
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
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            //.attr('fill', 'black')
            .attr('fill', 'none');

        break;
    default:
          alert("default mensual")
        /*var MAXIMO = d3.max(datos, function(d) {
         return parseFloat(d.resultado) //References first value in each sub-array
        });
        var MINIMO = d3.min(datos, function(d) {
         return parseFloat(d.resultado) //References first value in each sub-array
        });

        var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([MINIMO, MAXIMO]),
        xAxis = d3.svg.axis()
        .scale(xScale),
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
 

        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " y axis")
            //.attr("transform", "translate(" + (MARGINS.left) + ",0)")
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
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            //.attr('fill', 'black')
            .attr('fill', 'none');*/


  }

        
}