function renderEVOLUCION(datos,AMBITGEO) { 
    var colores = ["#35978f","#80cdc1","#7fbc41","#b8e186","#5aae61","#a6dba0","#8073ac",
                        "#b2abd2","#bf812d","#dfc27d","#de77ae","#f1b6da","#9970ab","#c2a5cf","#d6604d",
                        "#f45a82","#f46d43","#6799cf"]
    var colores = ["#3288bd","#d53e4f","#99d594","#fc8d59","#01665e","#8c510a","#5ab4ac",
                        "#d8b365","#1b7837","#c51b7d","#4d9221","#e9a3c9","#2166ac","#b2182b","#67a9cf",
                        "#ef8a62","#999999","#6799cf"]

    ID_VIP = miIDVIP_fromWorkFrame(workFrame)
    
     data = datos
     
    var nomContenedor = "contenedorGr" + workFrame;
    
    d3.select("#"+ ID_VIP).selectAll("svg").data([1]).enter().append("svg")
      .attr("id",nomContenedor)
      .attr("class","chart" + workFrame)
      //.attr("width", "100%")


    var el = document.getElementById(nomContenedor); var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); 
    var mywidthDIV = el.getBoundingClientRect().width;
    //alert(mywidthDIV)
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV
    
    d3.select("#"+ ID_VIP).selectAll("svg").attr("width",mywidthDIV-mywidthDIV/10)
    d3.select("#"+ ID_VIP).selectAll("svg").attr("height",myheightDIV-myheightDIV/10)
    //alert("hey")
   var  WIDTH = mywidthDIV-mywidthDIV/10,//WIDTH = mywidthDIV-85,
        HEIGHT = myheightDIV-myheightDIV/10,
        MARGINS = {
            top: myheightDIV/10,//10,
            right: mywidthDIV/7,
            bottom: myheightDIV/10, //myheightDIV/10,
            left: mywidthDIV/8
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

    case identificadorGr=="14":
        
        //var colores = ["black","red","blue","green","aqua"]
        automatizacionRenderEvolution2("14",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="15":
        
        //var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("15",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="16":
        
        //var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("16",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="17":
        
        //var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("17",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="18":
        
        //var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("18",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="19":
        
        //var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("19",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="20":
        
        //var colores = ["black","red","blue","green","aqua","SALMON"]
        automatizacionRenderEvolution2("20",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="21":
        
        //var colores = ["black","red","blue","green","aqua"]
        automatizacionRenderEvolution2("21",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="22":
        //var colores = ["black","red","blue"]
        automatizacionRenderEvolution2("22",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)        
        break;
    case identificadorGr=="23":
        
        //var colores = ["blue"]
        automatizacionRenderEvolution2("23",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;
    case identificadorGr=="24":
        /*var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("39").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("39").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/    
        //var colores = ["black","red","blue","green","aqua","SALMON","OLIVE","TEAL","FUCHSIA","purple","DARKORANGE","GOLD","THISTLE","LAVENDER","MEDIUMAQUAMARINE","DODGERBLUE","LIGHTSLATEGRAY"]
        automatizacionRenderEvolution2("24",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)        
        break;
    case identificadorGr=="25":
        
        //var colores = ["red","blue"]
        automatizacionRenderEvolution2("25",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="26":
        
        //var colores = ["red","blue"]
        automatizacionRenderEvolution2("26",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="27":
        
        //var colores = ["blue"]
        automatizacionRenderEvolution2("27",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="28":
        
        //var colores = ["blue"]
        automatizacionRenderEvolution2("28",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  

    case identificadorGr=="29":
        
        //var colores = ["black","red","blue"]
        automatizacionRenderEvolution2("29",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="30":
        
        //var colores = ["black","red","blue"]
        automatizacionRenderEvolution2("30",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;          
    case identificadorGr=="31":
        /*var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("31").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("31").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };
        console.log(HEIGHT)
        console.log(MARGINS)*/
        automatizacionRenderEvolution2("31",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break; 
    case identificadorGr=="39":
        /*var scaleColor=d3.scale.category20b()
        console.log(automaticInput("39").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("39").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };
        console.log(HEIGHT)
        console.log(MARGINS)*/
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
        
        //var colores = ["black"]
        

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
        
        //var colores = ["black"]
        

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
        
        //var colores = ["black"]
        

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
        /*var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("43").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("39").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        

        automatizacionRenderEvolution2("43",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break; 
    case identificadorGr=="44":
        /*var scaleColor=d3.scale.category20b()
        //console.log(automaticInput("43").titulosSquaresCB.length)
        var colores=[]
        for (var i = 0; i < automaticInput("44").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        

        automatizacionRenderEvolution2("44",data,ID_VIP,nomContenedor,colores,HEIGHT,MARGINS)
        break;    
    case identificadorGr=="45":
        //alert("evolucion 45")
        //var scaleColor=d3.scale.category20b()
        
        var coloresDist=[]
        /*for (var i = 0; i < automaticInput("45").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        coloresDist = ["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                       "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]
        automatizacionRenderEvolution2("45",data,ID_VIP,nomContenedor,coloresDist,HEIGHT,MARGINS)
        break;
    case identificadorGr=="46":
        //alert("evolucion 46")
        //var scaleColor=d3.scale.category20b()
        
        var coloresDist=[]
        /*for (var i = 0; i < automaticInput("46").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        coloresDist = ["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                       "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]
        automatizacionRenderEvolution2("46",data,ID_VIP,nomContenedor,coloresDist,HEIGHT,MARGINS)
        break;
    case identificadorGr=="48":
        //alert("evolucion 48")
        //var scaleColor=d3.scale.category20b()
        
        var coloresDist=[]
        /*for (var i = 0; i < automaticInput("48").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        coloresDist = ["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                       "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]
        automatizacionRenderEvolution2("48",data,ID_VIP,nomContenedor,coloresDist,HEIGHT,MARGINS)
        break;
    case identificadorGr=="49":
        //alert("evolucion 49")
        //var scaleColor=d3.scale.category20b()
        
        var coloresDist=[]
        /*for (var i = 0; i < automaticInput("49").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        coloresDist = ["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                       "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]
        automatizacionRenderEvolution2("49",data,ID_VIP,nomContenedor,coloresDist,HEIGHT,MARGINS)
        break; 
    case identificadorGr=="50":
        //alert("evolucion 50")
        //var scaleColor=d3.scale.category20b()
        
        var coloresDist=[]
        /*for (var i = 0; i < automaticInput("50").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        coloresDist = ["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                       "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]
        automatizacionRenderEvolution2("50",data,ID_VIP,nomContenedor,coloresDist,HEIGHT,MARGINS)
        break;  
    case identificadorGr=="51":
        //alert("evolucion 51")
        //var scaleColor=d3.scale.category20b()
        
        var coloresDist=[]
        /*for (var i = 0; i < automaticInput("51").titulosSquaresCB.length; i++) {
            colores[i] = scaleColor(i) 
        };*/
        coloresDist = ["#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
                       "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]
        automatizacionRenderEvolution2("51",data,ID_VIP,nomContenedor,coloresDist,HEIGHT,MARGINS)
        break;               
    default:
        alert("Esté gráfico no está. Gráfico: " + identificadorGr)
}


}