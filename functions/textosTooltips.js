function textoTooltipMenuPpal(id_MENU){
// le entra ID_VIP y entrega la posición en resumenMAT
  var textoScale = d3.scale.ordinal()
    .domain(["menuClima","menuInfraestructuras","menuPoblacion",
    		"menuVivienda","menuEconomia","menuTurista",
    		"menuTurAlojamiento","menuTurCultural","menuTurReuniones"])
    .range(["Temperaturas" + " <br/> " + "Precipitaciones" + " <br/> " + "Superficie",
    		"Pasajeros Puerto<br/>Pasajeros Aeropuerto",
    		"Habitantes<br/>Densidad de población<br/>Población por Edades<br/>Población por Nacionalidad",
    		"Vivienda Nueva<br/>Vivienda de Segunda Mano<br/>Vivienda de Alquiler",
    		"Trabajadores por sector<br/>Situación laboral<br/>Producto Interior Bruto (PIB)<br/>Salarios por sectores",
    		"Género<br/>Edad<br/>Gasto<br/>Motivos<br/>Días alojamiento<br/>Repetibilidad<br/>Transporte<br/>Nacionalidad",
    		"Número de hoteles<br/>Plazas de hotel<br/>Plazas de hotel por distrito<br/>Licencias de Viviendas de Uso Turístico (VUT)<br/>Ocupación hotelera<br/>Empleados en hoteles<br/>Precio hoteles",
    		"Top visitas a lugares de interés<br/>Espacios de ocio<br/>Lugares de interés arquitectónico<br/>Centros de exposiciones<br/>Museos y colecciones<br/>Transportes singulares<br/>Resumen de lugares de interés",
    		"Número de reuniones<br/>Asistentes a reuniones<br/>Ferias principales"])
  return textoScale(id_MENU)
}