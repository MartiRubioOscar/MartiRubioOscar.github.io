  function resumenFiltros(id_grafico){
  var resFiltros = d3.scale.ordinal()
                  .domain(["01","02","03","04","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
                    "25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51"])
                  .range([{barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//01
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//02
                          {barrasNuevas:"NO",estatico: "SI", localizacion:"SI",sort:"SI",porcentaje:"SI",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//03
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//04
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//06
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//07
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//08
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"SI",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//09
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//10
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//11
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//12
                          {barrasNuevas:"NO",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//13
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//14
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//15
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//16
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//17
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//18
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//19
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//20
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//21
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//22
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//23
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//24
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//25
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//26
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//27
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//28
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//29
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//30
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//31
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//32
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//33
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//34
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//35
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//36
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//37
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//38
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"NO"},//39         
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//40
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//41
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"NO",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"SI",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"NO"},//42
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"SI",VA_auto:"SI",nuevoGeo:"NO"},//43
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"SI",VA_auto:"SI",nuevoGeo:"NO"},//44
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"SI"},//45
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"SI"},//46
                          {barrasNuevas:"SI",estatico: "SI", localizacion:"NO",sort:"SI",porcentaje:"SI",variacionAnual:"NO",desde:"NO",hasta:"NO",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"NO",nuevoGeo:"SI"},//47
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"SI"},//48
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"SI"},//49
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"SI"},//50
                          {barrasNuevas:"SI",estatico: "NO", localizacion:"NO",sort:"SI",porcentaje:"NO",variacionAnual:"SI",desde:"SI",hasta:"SI",mensual:"NO",mensualTest:"NO",distrito:"NO",VA_auto:"SI",nuevoGeo:"SI"}//51
                          ])
  return resFiltros(id_grafico)
}

function misDatos(id_grafico){
    // le entra Idgrafico de resumenMAT y devuelve los datos correspondientes
    // el resultado es la variable que contiene los datos
    var nomDatos = d3.scale.ordinal()
                    .domain(["01","02","03","04","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28",
                              "29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51"])
                    .range(["graphic01","graphic02","graphic03","graphic04","graphic06","graphic07","graphic08","graphic09",
                            "graphic10","graphic11","graphic12","graphic13","graphic14","graphic15","graphic16","graphic17",
                            "graphic18","graphic19","graphic20","graphic21","graphic22","graphic23","graphic24","graphic25",
                            "graphic26","graphic27","graphic28","graphic29","graphic30","graphic31","graphic32","graphic33",
                            "graphic34","graphic35","graphic36","graphic37","graphic38","graphic39","graphic40","graphic41",
                            "graphic42","graphic43","graphic44","graphic45","graphic46","graphic47","graphic48","graphic49",
                            "graphic50","graphic51"])
    return window[nomDatos(id_grafico)]
  }
  function misDatosVariacionAnual(id_grafico){
    // se usa cuando voy de un gráfico de variación anual a uno de barras.
     var nomDatos = d3.scale.ordinal()
                      .domain(["06"])
                      .range(["01"])
      return nomDatos(id_grafico) 
  }
  function miExisteVariacionAnual(id_grafico){
    // Controla los datasets en los que existe variación anual. Lo usaré en el desde y hasta
     var nomDatos = d3.scale.ordinal()
                      .domain(["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51"])
                      .range( ["SI","NO","NO","NO","NO","SI","SI","SI","SI","SI","SI","SI","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO"])
      return nomDatos(id_grafico) 
  }

  function titulosGraficos(nomrbreIdgrafico){
    var tituloGrafico = d3.scale.ordinal()
      .domain(["01","02","03","04","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28",
                "29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51"])
      .range(["HABITANTES EN BARCELONA", //01                             
              "PLAZAS DE HOTELES POR DISTRITO",//02 
              "SUPERFICIE",//03
              "DENSIDAD DE POBLACIÓN",//04
              "PRECIO DE VIVIENDA NUEVA",//07
              "PRECIO DE LA VIVIENDA DE SEGUNDA MANO",//08
              "PRECIO DE LA VIVIENDA DE ALQUILER",//09
              "PASAJEROS PUERTO DE BARCELONA", //10
              "PASAJEROS AEROPUERTO DE BARCELONA", //11
              "TEMPERATURAS",//12
              "DÍAS CON PRECIPITACIONES",//13
              "PORCENTAJE DE TURISTAS SEGÚN GÉNERO",//14
              "EDAD DE LOS TURISTAS",//15
              "PRINCIPALES GASTOS",//16
              "MOTIVOS DEL VIAJE",//17
              "DÍAS DE ESTANCIA",//18
              "GRADO DE REPETIBILIDAD DE LA VISITA",//19
              "MEDIO DE TRANSPORTE",//20
              "TRABAJADORES POR SECTOR",//21
              "SITUACIÓN LABORAL",//22
              "PRODUCTO INTERIOR BRUTO", //23
              "SALARIO ANUAL POR SECTORES DE ACTIVIDAD",//24
              "NÚMERO DE REUNIONES",//25
              "ASISTENTES A REUNIONES",//26
              "LICENCIAS DE VIVIENDAS DE USO TURÍSTICO",//27
              "PLAZAS EN VIVIENDAS DE USO TURÍSTICO",//28
              "NÚMERO DE HOTELES, HOSTALES Y PENSIONES",//29
              "PLAZAS EN HOTELES, HOSTALES Y PENSIONES",//30
              "VISITAS A LOS LUGARES MÁS VISITADOS",//31
              "ESPACIOS DE OCIO",//32
              "ESPACIOS DE INTERÉS ARQUITECTÓNICO",//33
              "CENTROS EXPOSICIONES",//34
              "MUSEOS Y COLECCIONES",//35
              "TRANSPORTES SINGULARES",//36
              "RESUMEN LUGARES DE INTERÉS",//37
              "PRINCIPALES FERIAS",//38
              "TURISTAS EN HOTELES SEGÚN NACIONALIDAD",//39
              "OCUPACIÓN HOTELERA",//40
              "PERSONAL OCUPADO EN HOTELES",//41
              "PRECIO MEDIO HABITACIÓN DOBLE EN HOTEL",//42
              "POBLACIÓN POR EDADES",//43
              "POBLACIÓN POR NACIONALIDAD",//44
              "POBLACIÓN DE BARCELONA",//45
              "PLAZAS HOTEL POR DISTRITO",//46
              "SUPERFICIE",//47
              "DENSIDAD DE POBLACIÓN",//48
              "PRECIO DE VIVIENDA NUEVA",//49
              "PRECIO DE LA VIVIENDA DE SEGUNDA MANO",//50
              "PRECIO DE LA VIVIENDA DE ALQUILER"//51
              ])

      return tituloGrafico(nomrbreIdgrafico)
}


  function miPosicionResumenMAT(id_window){
    // le entra ID_VIP y entrega la posición en resumenMAT
      var positionResumenMATsegunID_VIP = d3.scale.ordinal()
        .domain(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
        .range(["3","4","5","6","1","2","0"])
      return positionResumenMATsegunID_VIP(id_window)
  }
  function miIDventanaFromResumenMATposition(resMATpos){
     var positionResumenMATsegunID_VIP = d3.scale.ordinal()
        .domain(["3","4","5","6","1","2","0"])
        .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
      return positionResumenMATsegunID_VIP(resMATpos) 
  }
    function miPosicionResumenMAT_workframe(WORKFRAME){
    // le entra workFrame y entrega la posición en resumenMAT
      var positionResumenMATsegunID_VIP = d3.scale.ordinal()
        .domain(["41","42","43","44","21","22","1"])
        .range(["3","4","5","6","1","2","0"])
      return positionResumenMATsegunID_VIP(WORKFRAME)
  }
  function miIDgrafico(id_window){
    // le entra ID_VIP y entrega el identificador del gráfico guardado en resumenMAT
      var positionResumenMATsegunID_VIP = d3.scale.ordinal()
        .domain(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
        .range(["3","4","5","6","1","2","0"])
      return resumenMAT[positionResumenMATsegunID_VIP(id_window)].Idgrafico
  }
  function miWorkFrame_fromIDVIP(id_window){
    // le entra ID_VIP y entrega el identificador del gráfico guardado en resumenMAT
      var workframe_from_IDVIP = d3.scale.ordinal()
        .domain(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
        .range(["41","42","43","44","21","22","1"])
      return workframe_from_IDVIP(id_window)
  }
function miIDVIP_fromWorkFrame(WORKFRAME){
    // le entra ID_VIP y entrega el identificador del gráfico guardado en resumenMAT
      var IDVIP_from_workframe = d3.scale.ordinal()
        .domain(["41","42","43","44","21","22","1"])
        .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
        
      return IDVIP_from_workframe(WORKFRAME)
  }


  function coloresDistritos(distrito){
    var coloresOscar = d3.scale.ordinal()
      .domain(["Barcelona", "Ciutat Vella", "Eixample", "Sants-Montjuïc", "Les Corts", "Sarrià-Sant Gervasi",
                "Gràcia", "Horta-Guinardó", "Nou Barris", "Sant Andreu", "Sant Martí"])
      .range([ "#2d3894", "#539a2f" , "#9aa633", "#ac8935","#ac7135", "#ac4d39",
               "#a13143","#942d8b", "#592d94", "#2d6994", "#2d946c"]);
      return coloresOscar(distrito)
  }

  function miGraficoActivo(id_window){
    // le entra ID_VIP y entrega el identificador del gráfico guardado en resumenMAT
      var graficoActivo = d3.scale.ordinal()
        .domain(["window41","window42","window43","window44","window21","window22","window11"])
        .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
      return graficoActivo(id_window)
  }

  function miGraficoActivoAlmoadilla(id_window){
    // le entra ID_VIP y entrega el identificador del gráfico guardado en resumenMAT
      var graficoActivo = d3.scale.ordinal()
        .domain(["#window41","#window42","#window43","#window44","#window21","#window22","#window11"])
        .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
      return graficoActivo(id_window)
  }
  function miGraficoActivo_workframe(id_window){
    // devuelve workframe activo 
      var graficoActivo = d3.scale.ordinal()
        .domain(["#window41","#window42","#window43","#window44","#window21","#window22","#window11"])
        .range(["41","42","43","44","21","22","1"])
      return graficoActivo(id_window)
  }

  function miGraficoActivo_IDVIP(id_window){
    // devuelve workframe activo 
      var graficoActivo = d3.scale.ordinal()
        .domain(["#window41","#window42","#window43","#window44","#window21","#window22","#window11"])
        .range(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
      return graficoActivo(id_window)
  }
  function miGraficoActivo_window_from_IDVIP(id_window){
    // devuelve workframe activo 
      var graficoActivo = d3.scale.ordinal()
        .domain(["gr4_1","gr4_2","gr4_3","gr4_4","gr_1","gr_2","gr1"])
        .range(["#window41","#window42","#window43","#window44","#window21","#window22","#window11"])
      return graficoActivo(id_window)
  }

function miGraficoActivo_WINDOW(id_window){
    // devuelve workframe activo 
      var graficoActivo = d3.scale.ordinal()
        .domain(["41","42","43","44","21","22","1"])
        .range(["window41","window42","window43","window44","window21","window22","window11"])
      return graficoActivo(id_window)
  }
function miNumGraficoActivo_fromWindow(id_window){
  // le entra ID_VIP y entrega el identificador del gráfico guardado en resumenMAT
    var workframe_from_IDVIP = d3.scale.ordinal()
      .domain(["window41","window42","window43","window44","window21","window22","window11"])
      .range(["41","42","43","44","21","22","1"])
    return workframe_from_IDVIP(id_window)
}
  function restoCuadrados(id_window){
    // devuelve workframe activo 
      var graficoActivo = d3.scale.ordinal()
        .domain(["#window41","#window42","#window43","#window44","#window21","#window22","#window11"])
        .range([["#window42","#window43","#window44"],["#window41","#window43","#window44"],["#window41","#window42","#window44"],
          ["#window41","#window42","#window43"],["#window22"],["#window21"],["NO EXISTE"]])
      return graficoActivo(id_window)
  }

