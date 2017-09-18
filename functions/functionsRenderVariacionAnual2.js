function InitChartVariacionAnual(datos,AMBITGEO) { 
    ID_VIP = miIDVIP_fromWorkFrame(workFrame)
    data = datos
    var nomContenedor = "contenedorGr" + workFrame;
    
    d3.select("#"+ ID_VIP).selectAll("svg").data([1]).enter().append("svg")
      .attr("id",nomContenedor)
      .attr("class","chart" + workFrame)


    var el = document.getElementById(nomContenedor); var mywidth = el.getBoundingClientRect().width;
    var myheight = el.getBoundingClientRect().height;

    var el = document.getElementById(ID_VIP); var mywidthDIV = el.getBoundingClientRect().width;
    var myheightDIV = el.getBoundingClientRect().height; // TENGO EL TAMAÑO DEL DIV
    d3.select("#"+ ID_VIP).selectAll("svg").attr("width",mywidthDIV-25)
    d3.select("#"+ ID_VIP).selectAll("svg").attr("height",myheightDIV-25)
   var  WIDTH = mywidthDIV,
        HEIGHT = myheightDIV-25,
        MARGINS = {
            top: myheightDIV/10,
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

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right])
                .domain([MINIMOyear, MAXIMOyear]),
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                .domain([MINIMOresultado, MAXIMOresultado]),
                    


        xAxis = d3.svg.axis()
        .scale(xScale),
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    
        var posicionEjeCero= yScale(0);

    d3.select("#" + nomContenedor).append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + posicionEjeCero + ")")
        .call(xAxis);
    d3.select("#" + nomContenedor).append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);
 
    var DATOSfiltrados=[];
   
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
        d3.select("#" + nomContenedor).append('path')
            .attr('d', lineGen(DATOSfiltrados))
            .attr('stroke', colorCode)
            .attr('stroke-width', 2)
            .attr('fill', 'none');
    
    };            
}