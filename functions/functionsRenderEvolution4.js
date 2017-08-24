function renderEVOLUCION(datos,AMBITGEO) { 

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
            right: mywidthDIV/5,
            bottom: myheightDIV/10,
            left: mywidthDIV/5
        }
    //////////////////////////////////////////////////////////////////////

    var MAXIMOyear = d3.max(data, function(d) {
                     return parseFloat(d.year) //References first value in each sub-array
                });
                 
    var MINIMOyear = d3.min(data, function(d) {
                  return parseFloat(d.year); //References first value in each sub-array
                });
    var MAXIMOresultado = d3.max(data, function(d) {
                     return parseFloat(d.resultado) //References first value in each sub-array
                });
                 
    var MINIMOresultado = d3.min(data, function(d) {
                  return parseFloat(d.resultado); //References first value in each sub-array
                });

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// OJO QUE xScale e yScale son globales, no deberían haberlo sido //////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

                    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]) // mirar nota!!!!!
                                .domain([MINIMOyear, MAXIMOyear]),
                    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAXIMOresultado]),
                    
                    xAxis = d3.svg.axis()
                    .scale(xScale)
                    .tickFormat(d3.format(".4r"))
                    .ticks(MAXIMOyear-MINIMOyear)
                    yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");
                
                d3.select("#" + nomContenedor).append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                    .call(xAxis);
                d3.select("#" + nomContenedor).append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                    .call(yAxis);
                var DATOSfiltrados=[];
      

    
    var identificadorGr = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico 
    
switch(true) {
    case identificadorGr=="01"||identificadorGr=="02"||identificadorGr=="04"||identificadorGr=="06"||identificadorGr=="07"||identificadorGr=="08"||identificadorGr=="09":
                var colorCode = [];
                for (var i = 0; i < AMBITGEO.length; i++) {
                    DATOSfiltrados = data.filter(function (el) {return el.localizacion === AMBITGEO[i]})
                    var lineGen = d3.svg.line()
                    .x(function(DATOSfiltrados) {
                        return xScale(DATOSfiltrados.year);
                    })
                    .y(function(DATOSfiltrados) {
                        return yScale(DATOSfiltrados.resultado);
                    })
                     colorCode = coloresDistritos(AMBITGEO[i])
                    //.interpolate("linear");
                    d3.select("#" + nomContenedor).append('path')
                        .attr('d', lineGen(DATOSfiltrados))
                        //.attr("id", )
                        .attr('stroke', colorCode)
                        .attr('stroke-width', 2)
                        .attr('fill', 'none');
                
                };            
        break;
    /*case identificadorGr=="14":
            var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosHombres=[]
            var datosMujeres=[]
          
            if (resumenMAT[POSICION].FTurSexo[0] == "hombres")
            {
              datosHombres = data.filter(function (el) {return el.filtroSexo === "hombres"})
            }
          
            if (resumenMAT[POSICION].FTurSexo[1] == "mujeres")
            {
              datosMujeres = data.filter(function (el) {return el.filtroSexo === "mujeres"})

            }
/////////////            
            var datosJuntos = [datosHombres,datosMujeres]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosHombres))
                .attr('stroke', 'black')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosMujeres))
                .attr('stroke', 'red')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');
           

        break;*/
    /*case identificadorGr=="15":
            var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosEdad1=[]
            var datosEdad2=[]
            var datosEdad3=[]
            var datosEdad4=[]
            var datosEdad5=[]
            var datosEdad6=[]
          
            if (resumenMAT[POSICION].FTurEdad[0] == "de 15 a 17")
            {
              datosEdad1 = data.filter(function (el) {return el.filtroEdadT === "de 15 a 17"})
            }
          
            if (resumenMAT[POSICION].FTurEdad[1] == "de 18 a 24")
            {
              datosEdad2 = data.filter(function (el) {return el.filtroEdadT === "de 18 a 24"})

            }

            if (resumenMAT[POSICION].FTurEdad[2] == "de 25 a 34")
            {
              datosEdad3 = data.filter(function (el) {return el.filtroEdadT === "de 25 a 34"})
            }
          
            if (resumenMAT[POSICION].FTurEdad[3] == "de 35 a 44")
            {
              datosEdad4 = data.filter(function (el) {return el.filtroEdadT === "de 35 a 44"})

            }

            if (resumenMAT[POSICION].FTurEdad[4] == "de 45 a 54")
            {
              datosEdad5 = data.filter(function (el) {return el.filtroEdadT === "de 45 a 54"})
            }
          
            if (resumenMAT[POSICION].FTurEdad[5] == "55 o mas")
            {
              datosEdad6 = data.filter(function (el) {return el.filtroEdadT === "55 o mas"})

            }


/////////////            
            var datosJuntos = [datosEdad1,datosEdad2,datosEdad3,datosEdad4,datosEdad5,datosEdad6]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////



            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEdad1))
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEdad2))
                .attr('stroke', 'red')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEdad3))
                .attr('stroke', 'green')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEdad4))
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEdad5))
                .attr('stroke', 'aqua')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEdad6))
                .attr('stroke', 'DarkSeaGreen')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');
        break; */  
    /*case identificadorGr=="16":
        
            var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosTransporte=[]
            var datosAlojamiento=[]
            var datosEstancia=[]
          
            if (resumenMAT[POSICION].FTurGasto[0] == "transporte")
            {
              datosTransporte = data.filter(function (el) {return el.filtroGastoT === "transporte"})
            }
          
            if (resumenMAT[POSICION].FTurGasto[1] == "alojamiento")
            {
              datosAlojamiento = data.filter(function (el) {return el.filtroGastoT === "alojamiento"})

            }
            if (resumenMAT[POSICION].FTurGasto[2] == "estancia")
            {
              datosEstancia = data.filter(function (el) {return el.filtroGastoT === "estancia"})

            }
/////////////            
            var datosJuntos = [datosTransporte,datosAlojamiento,datosEstancia]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosTransporte))
                .attr('stroke', 'black')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosAlojamiento))
                .attr('stroke', 'red')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');
            
            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosEstancia))
                .attr('stroke', 'blue')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');                

        break;*/
    /*case identificadorGr=="17":
        
            var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosVacacional=[]
            var datosProfesional=[]
            var datosPersonal=[]
          
            if (resumenMAT[POSICION].FTurMotivo[0] == "Vacacional-Ocio")
            {
              datosVacacional = data.filter(function (el) {return el.filtroMotivosT === "Vacacional-Ocio"})
            }
          
            if (resumenMAT[POSICION].FTurMotivo[1] == "Profesional")
            {
              datosProfesional = data.filter(function (el) {return el.filtroMotivosT === "Profesional"})

            }
            if (resumenMAT[POSICION].FTurMotivo[2] == "Personal y otros")
            {
              datosPersonal = data.filter(function (el) {return el.filtroMotivosT === "Personal y otros"})

            }
/////////////            
            var datosJuntos = [datosVacacional,datosProfesional,datosPersonal]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////


            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosVacacional))
                .attr('stroke', 'black')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosProfesional))
                .attr('stroke', 'red')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');
            
            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosPersonal))
                .attr('stroke', 'blue')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');                


        break;
    case identificadorGr=="18":
           var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosHoteles=[]
            var datosPensiones=[]
          
            if (resumenMAT[POSICION].FTurAlojamiento[0] == "Hoteles")
            {
              datosHoteles = data.filter(function (el) {return el.filtroAlojamientoT === "Hoteles"})
            }
          
            if (resumenMAT[POSICION].FTurAlojamiento[1] == "Pensiones y hostales")
            {
              datosPensiones = data.filter(function (el) {return el.filtroAlojamientoT === "Pensiones y hostales"})

            }
/////////////            
            var datosJuntos = [datosHoteles,datosPensiones]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////

            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosHoteles))
                .attr('stroke', 'black')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosPensiones))
                .attr('stroke', 'red')
                .attr('stroke-width', 4)
                //.attr('fill', 'black')
                .attr('fill', 'none');
            
              

        break;
    case identificadorGr=="19":

            var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosPrimeraT=[]
            var datosSegundaT=[]
            var datosTerceraT=[]
            var datosNSNCT=[]
          
            if (resumenMAT[POSICION].FTurRepe[0] == "primeraVisita")
            {
              datosPrimeraT = data.filter(function (el) {return el.filtroRepeT === "primeraVisita"})
            }
          
            if (resumenMAT[POSICION].FTurRepe[1] == "segundaVisita")
            {
              datosSegundaT = data.filter(function (el) {return el.filtroRepeT === "segundaVisita"})

            }
            if (resumenMAT[POSICION].FTurRepe[2] == "teceraOmas")
            {
              datosTerceraT = data.filter(function (el) {return el.filtroRepeT === "teceraOmas"})

            }
            if (resumenMAT[POSICION].FTurRepe[3] == "NSNC")
            {
              datosNSNCT = data.filter(function (el) {return el.filtroRepeT === "NSNC"})

            }            

/////////////            
            var datosJuntos = [datosPrimeraT,datosSegundaT,datosTerceraT,datosNSNCT]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////

            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosPrimeraT))
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosSegundaT))
                .attr('stroke', 'red')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');
            
            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosTerceraT))
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');                

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosNSNCT))
                .attr('stroke', 'green')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');
        break;
    case identificadorGr=="20":
            var POSICION = miPosicionResumenMAT(ID_VIP)
            var datosAvionT=[]
            var datosCocheT=[]
            var datosFerrocarrilT=[]
            var datosAutocar=[]
            var datosOtros=[]

          
            if (resumenMAT[POSICION].FTurTransporte[0] == "avion")
            {
              datosAvionT = data.filter(function (el) {return el.filtroTransporteT === "avion"})
            }
          
            if (resumenMAT[POSICION].FTurTransporte[1] == "coche")
            {
              datosCocheT = data.filter(function (el) {return el.filtroTransporteT === "coche"})

            }
            if (resumenMAT[POSICION].FTurTransporte[2] == "ferrocarril")
            {
              datosFerrocarrilT = data.filter(function (el) {return el.filtroTransporteT === "ferrocarril"})

            }
            if (resumenMAT[POSICION].FTurTransporte[3] == "autocar")
            {
              datosAutocar = data.filter(function (el) {return el.filtroTransporteT === "autocar"})

            }            

            if (resumenMAT[POSICION].FTurTransporte[4] == "otros")
            {
              datosOtros = data.filter(function (el) {return el.filtroTransporteT === "otros"})

            } 

/////////////            
            var datosJuntos = [datosAvionT,datosCocheT,datosFerrocarrilT,datosAutocar,datosOtros]
            //console.log(datosJuntos)
            //console.log(d3.max(datosJuntos[i],function(d){return parseFloat(d.resultado)}))

            var maxDatosJuntos = []

            var maxDatosJuntos2 = []

            
                for (var i = 0; i < datosJuntos.length; i++) {
                        maxDatosJuntos[i] = d3.max(datosJuntos[i], function(d) {
                        return parseFloat(d.resultado) 
                    });
                };
            
            
            //console.log(maxDatosJuntos)
            var MAX_Juntos = d3.max(maxDatosJuntos, function(d) {
                    return parseFloat(d) 
                });
            //console.log(MAX_Juntos)
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                .domain([0, MAX_Juntos])

            
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");
            
            d3.select("#" + nomContenedor).select(".y.axis").remove()
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
                    
                    
            d3.select("#" +  nomContenedor).append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);                
/////////////

            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.resultado);
                })
                .interpolate("linear");

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosAvionT))
                .attr('stroke', 'black')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosCocheT))
                .attr('stroke', 'red')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');
            
            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosFerrocarrilT))
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');                

            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosAutocar))
                .attr('stroke', 'green')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');
            d3.select("#" + nomContenedor).append('svg:path')
                .attr('d', lineGen(datosOtros))
                .attr('stroke', 'aqua')
                .attr('stroke-width', 2)
                //.attr('fill', 'black')
                .attr('fill', 'none');                

        break;*/
    case identificadorGr=="14":
        
        var colores = ["black","red","blue","green","aqua"]
        automatizacionRenderEvolution2("14",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="15":
        
        var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("15",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="16":
        
        var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("16",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="17":
        
        var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("17",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="18":
        
        var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("18",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="19":
        
        var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("19",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="20":
        
        var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("20",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="21":
        
        var colores = ["black","red","blue","green","aqua"]
        automatizacionRenderEvolution2("21",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="22":
        var colores = ["black","red","blue"]
        automatizacionRenderEvolution2("22",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)        
        break;
    case identificadorGr=="23":
        
        var colores = ["blue"]
        automatizacionRenderEvolution2("23",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="24":
        var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("39").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("39").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };    
        //var colores = ["black","red","blue","green","aqua","SALMON","OLIVE","TEAL","FUCHSIA","purple","DARKORANGE","GOLD","THISTLE","LAVENDER","MEDIUMAQUAMARINE","DODGERBLUE","LIGHTSLATEGRAY"]
        automatizacionRenderEvolution2("24",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)        
        break;
    case identificadorGr=="25":
        
        var colores = ["red","blue"]
        automatizacionRenderEvolution2("25",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="26":
        
        var colores = ["red","blue"]
        automatizacionRenderEvolution2("26",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="27":
        
        var colores = ["blue"]
        automatizacionRenderEvolution2("27",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="28":
        
        var colores = ["blue"]
        automatizacionRenderEvolution2("28",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  

    case identificadorGr=="29":
        
        var colores = ["black","red","blue"]
        automatizacionRenderEvolution2("29",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="30":
        
        var colores = ["black","red","blue"]
        automatizacionRenderEvolution2("30",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;          
    case identificadorGr=="31":
        var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("31").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("31").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };
        //var colores = ["black","red","blue","green","aqua","SALMON","OLIVE","TEAL","FUCHSIA","purple","DARKORANGE","GOLD","THISTLE","LAVENDER"]
        automatizacionRenderEvolution2("31",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break; 
    case identificadorGr=="39":
        var scaleColor=d3.scale.category20b()
        console.log(automaticInput("39").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("39").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };
        //console.log(COLORES)
        //var colores = ["black","red","blue","green","aqua","SALMON","OLIVE","TEAL","FUCHSIA","purple","DARKORANGE","GOLD","THISTLE","LAVENDER","MEDIUMAQUAMARINE","DODGERBLUE","LIGHTSLATEGRAY","SPRINGGREEN"]
        automatizacionRenderEvolution2("39",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;         
    case identificadorGr=="40":
        //console.log(data)
        var FROM = resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear
        var UNTIL = resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear

        var start = new Date(FROM, 0, 01) // 0 = enero; 11 = diciembre

        monthStart = start.getMonth() + 1;
        var end = new Date(UNTIL, 11, 31)
        monthEnd = end.getMonth() + 1;
 
        monthStart = start.getFullYear();
        monthEnd = end.getFullYear();

        xScale = d3.time.scale().domain([start, end]) // <-B
            .range([MARGINS.left, WIDTH - MARGINS.right])
        var colores = ["black"]
        

        automatizacionRenderEvolution2("40",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)


        d3.select("#" + nomContenedor).select("g.x.axis").remove()

        
        var xAxis = d3.svg.axis().scale(xScale)
        
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);    


        break;      
    case identificadorGr=="41":
        //console.log(data)
        var FROM = resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear
        var UNTIL = resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear

        var start = new Date(FROM, 0, 01) // 0 = enero; 11 = diciembre

        monthStart = start.getMonth() + 1;
        var end = new Date(UNTIL, 11, 31)
        monthEnd = end.getMonth() + 1;
 
        monthStart = start.getFullYear();
        monthEnd = end.getFullYear();

        xScale = d3.time.scale().domain([start, end]) // <-B
            .range([MARGINS.left, WIDTH - MARGINS.right])
        var colores = ["black"]
        

        automatizacionRenderEvolution2("41",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)


        d3.select("#" + nomContenedor).select("g.x.axis").remove()

        
        var xAxis = d3.svg.axis().scale(xScale)
        
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);    


        break;    
    case identificadorGr=="42":
        //console.log(data)
        var FROM = resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear
        var UNTIL = resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear

        var start = new Date(FROM, 0, 01) // 0 = enero; 11 = diciembre

        monthStart = start.getMonth() + 1;
        var end = new Date(UNTIL, 11, 31)
        monthEnd = end.getMonth() + 1;
 
        monthStart = start.getFullYear();
        monthEnd = end.getFullYear();

        xScale = d3.time.scale().domain([start, end]) // <-B
            .range([MARGINS.left, WIDTH - MARGINS.right])
        var colores = ["black"]
        

        automatizacionRenderEvolution2("42",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)


        d3.select("#" + nomContenedor).select("g.x.axis").remove()

        
        var xAxis = d3.svg.axis().scale(xScale)
        
        d3.select("#" + nomContenedor).append("g")
            .attr("class", " x axis")
            //.attr("transform", "translate(0," + posicionEjeCero + ")")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);    
        break;               
    case identificadorGr=="43":
        var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("43").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("39").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };
        //var colores = ["black","red","blue","green","aqua","SALMON","OLIVE","TEAL","FUCHSIA","purple","DARKORANGE","GOLD","THISTLE","LAVENDER"]
        //console.log(data)
        //var dataF = data.filter(function(el){el.filtroBcnPobDistricto == resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr})
        //console.log(dataF)

        automatizacionRenderEvolution2("43",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break; 
    case identificadorGr=="44":
        var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("43").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("44").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };
        //var colores = ["black","red","blue","green","aqua","SALMON","OLIVE","TEAL","FUCHSIA","purple","DARKORANGE","GOLD","THISTLE","LAVENDER"]
        //console.log(data)        
        //var dataF = data.filter(function(el){el.filtroBcnPobDistricto == resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr})
        //console.log(dataF)

        automatizacionRenderEvolution2("44",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;    
               
    default:
        alert("no tiene AMBITGEO")
}


}