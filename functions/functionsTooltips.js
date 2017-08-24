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