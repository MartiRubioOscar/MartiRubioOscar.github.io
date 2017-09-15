function decisionTipoGrafico(RES_CONTROL){
    console.log(RES_CONTROL)
    //alert(resumenFiltros(resumenMAT[RES_CONTROL.posicion].Idgrafico).VA_auto =="SI")
    //console.log(RES_CONTROL)
    if (RES_CONTROL.EVOL=="SI"){ 
      // quito el botón de ranking/original
      //d3.select("#rankingOn").remove()
      //d3.select("#rankingOff").remove()
      if (RES_CONTROL.EVOLmensual=="SI"){ 
        if (RES_CONTROL.VA=="SI") {TIPO_GRAFICO = "VA_mensual";renderVariacionAnual_Mensual(RES_CONTROL.datos,RES_CONTROL.desde,RES_CONTROL.hasta,RES_CONTROL.posicion)}
        else{TIPO_GRAFICO = "EVOL_mensual";renderEvolucionMensual(RES_CONTROL.datos,RES_CONTROL.desde,RES_CONTROL.hasta,RES_CONTROL.posicion)}
      }
      else{// no he puesto nada de RES_CONTROL.EVOLmensualTest pq de momento funciona así!!!!
        //if (RES_CONTROL.VA=="SI") {InitChartVariacionAnual(RES_CONTROL.datos, RES_CONTROL.localizacion)}
        if (RES_CONTROL.VA=="SI") {
          if(resumenFiltros(resumenMAT[RES_CONTROL.posicion].Idgrafico).VA_auto =="SI"){
            TIPO_GRAFICO = "VA_anual";automatizacionRenderVariacionAnual(RES_CONTROL.datos)
          }else{TIPO_GRAFICO = "VA_anual"; InitChartVariacionAnual(RES_CONTROL.datos, RES_CONTROL.localizacion)}}
        else{TIPO_GRAFICO = "EVOL_anual";renderEVOLUCION(RES_CONTROL.datos, RES_CONTROL.localizacion)};  
      }         
    }
    if (RES_CONTROL.BARRAS =="SI"){TIPO_GRAFICO = "BARRAS";renderBARRAS(RES_CONTROL.datos, RES_CONTROL.localizacion)}
    //if (RES_CONTROL.BARRASnuevas =="SI"){renderBARRAS_test(RES_CONTROL.datos)}
    if (RES_CONTROL.BARRASnuevas =="SI"){TIPO_GRAFICO = "BARRAS";renderBARRAS_test2(RES_CONTROL.datos,RES_CONTROL.textoY)}

    var NumGraficoActivo = graficoActivo()
    if ( NumGraficoActivo!="noG") {
      if (RES_CONTROL.EVOL=="SI"&&resumenFiltros(NumGraficoActivo).sort=="SI") // quito el botón de ranking/original
      {
        d3.select("#rankingOn").remove()
        d3.select("#rankingOff").remove()
        d3.select("#espacioRanking").remove()
        d3.select("#espacioBotones").append("br").attr("id","espacioRanking")
      }
      if (resumenFiltros(NumGraficoActivo).sort=="SI"&&(RES_CONTROL.BARRAS =="SI"||RES_CONTROL.BARRASnuevas =="SI"))  // coloco el botón de ranking
      {
        d3.select("#rankingOn").remove()
        d3.select("#rankingOff").remove()
        d3.select("#espacioRanking").remove()
        MenuRanking()
        d3.select("#espacioBotones").append("br").attr("id","espacioRanking")
      };
    };
    
}               
function graficoActivo(){ // para saber el gráfico que manda
  var ventanaActiva = "00" // no hay ventana activa
  var grActivo ="noG" // no hay gráfico activo
  if (document.getElementById("window41")!=null){
    if (d3.select("#gr4_1").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr4_1";grActivo=resumenMAT[3].Idgrafico};
    if (d3.select("#gr4_2").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr4_2";grActivo=resumenMAT[4].Idgrafico};
    if (d3.select("#gr4_3").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr4_3";grActivo=resumenMAT[5].Idgrafico};
    if (d3.select("#gr4_4").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr4_4";grActivo=resumenMAT[6].Idgrafico};  
  }
  
  if (document.getElementById("window21")!=null){
    if (d3.select("#gr_1").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr_1";grActivo=resumenMAT[1].Idgrafico};
    if (d3.select("#gr_2").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr_2";grActivo=resumenMAT[2].Idgrafico};
  }
  
  if (document.getElementById("window41")==null && document.getElementById("window21")==null) {
    if (d3.select("#gr1").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="#gr1";grActivo=resumenMAT[0].Idgrafico};  
  };
  
  return grActivo
}
function PosicionGraficoActivo(){ // para saber el gráfico que manda
  var ventanaActiva = "00" // no hay ventana activa
  var grActivo ="noG" // no hay gráfico activo
  if (document.getElementById("window41")!=null){
    if (d3.select("#gr4_1").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr4_1";grActivo=resumenMAT[3].Idgrafico};
    if (d3.select("#gr4_2").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr4_2";grActivo=resumenMAT[4].Idgrafico};
    if (d3.select("#gr4_3").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr4_3";grActivo=resumenMAT[5].Idgrafico};
    if (d3.select("#gr4_4").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr4_4";grActivo=resumenMAT[6].Idgrafico};  
  }
  
  if (document.getElementById("window21")!=null){
    if (d3.select("#gr_1").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr_1";grActivo=resumenMAT[1].Idgrafico};
    if (d3.select("#gr_2").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr_2";grActivo=resumenMAT[2].Idgrafico};
  }
  
  if (document.getElementById("window41")==null && document.getElementById("window21")==null) {
    if (d3.select("#gr1").style("border-color")=="rgb(255, 0, 0)") {ventanaActiva="gr1";grActivo=resumenMAT[0].Idgrafico};  
  };
  
  return ventanaActiva
}

function activar2(nomIdContenedor){
    activate = "SI"

    var identificadorGr = miIDgrafico(ID_VIP)

    var titulo = titulosGraficos(identificadorGr)
    d3.select("#" + nomIdContenedor).selectAll("h3").remove()
    d3.select("#" + nomIdContenedor).selectAll("h3").data([1]).enter().append("h3")
      .text(titulo).attr("align","center").classed("tituloGrafico",true)

   d3.select("#" + nomIdContenedor).selectAll("svg").remove()
    d3.select("#" + nomIdContenedor).selectAll("svg").data([1]).enter().append("svg")
      .attr("id","contenedorGr" + workFrame)
      .attr("class","chart" + workFrame)
      .attr("width", "100%")
      
      var RESULTADO_layout = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          

          decisionTipoGrafico(RESULTADO_layout)
  }
 
 function activar3(NOMIdContenedorVC_ON, NOMIdContenedorVC_OFF,Seguidores,EstadoVentanas){

   //alert("nomIdOn " + NOMIdContenedorVC_ON)
   //alert("nomIdOff " + NOMIdContenedorVC_OFF)
   //alert(EstadoVentanas)

    if (NOMIdContenedorVC_OFF=="gr4_1"||NOMIdContenedorVC_OFF=="gr4_2"||NOMIdContenedorVC_OFF=="gr4_3"||
        NOMIdContenedorVC_OFF=="gr4_4"||NOMIdContenedorVC_ON=="gr4_1"||NOMIdContenedorVC_ON=="gr4_2"||
        NOMIdContenedorVC_ON=="gr4_3"||NOMIdContenedorVC_ON=="gr4_4"){
        var LAYOUT = "4"
        activarLayout4(LAYOUT,NOMIdContenedorVC_ON, NOMIdContenedorVC_OFF,Seguidores,EstadoVentanas)
        
    }
    if (NOMIdContenedorVC_OFF=="gr_1"||NOMIdContenedorVC_OFF=="gr_2"||
        NOMIdContenedorVC_ON=="gr_1"||NOMIdContenedorVC_ON=="gr_2"){
        var LAYOUT = "2"
        activarLayout2(LAYOUT,NOMIdContenedorVC_ON, NOMIdContenedorVC_OFF,Seguidores,EstadoVentanas)
    }
    if (NOMIdContenedorVC_ON=="gr1"){
        var LAYOUT = "1"
        activarLayout1(NOMIdContenedorVC_ON)
        
    }
    
  }
function activarLayout1(nomIdContenedor){
          activate = "SI"
          var identificadorGr = miIDgrafico(nomIdContenedor)
          var titulo = titulosGraficos(identificadorGr)

          d3.select("#" + nomIdContenedor).selectAll("h3").remove()
          d3.select("#" + nomIdContenedor).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedor).selectAll("svg").remove()
          
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedor)

          datos =  window["graphic"+ identificadorGr];
          d3.select("#" + nomIdContenedor).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")
          var RESULTADO_layout = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          
                
          decisionTipoGrafico(RESULTADO_layout)

}



function activarLayout4(layout,nomIdContenedorVC_ON, nomIdContenedorVC_OFF,SEGUIDORES,estadoVentanas){

    
    var activarVentana;
    activate = "SI"
    var ventanaActivaAnterior = "ninguna";
    for (var i = 0; i < estadoVentanas.length; i++) {
      if(estadoVentanas[i]=="greenMandon" || estadoVentanas[i]=="red"){
        ventanaActivaAnterior = "4"+(i+1)
      }
    };
    ////// si la ventana que voy a activar NO es de vistas combinadas
    var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)

    var identificadorGrOn = miIDgrafico(nomIdContenedorVC_ON)
    if (identificadorGr=="noG"&&identificadorGrOn=="noG"){alert("no hay gráfico!!!!!!!")}
    else{ // ELSE R

      if (nomIdContenedorVC_OFF!=[]) { // IF S

          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          

          var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          
          //var titulo = titulosGraficos(identificadorGr)
          var titulo = titulosGraficos(identificadorGr)
        


          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").remove()
          
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          datos =  window["graphic"+ identificadorGr];
          
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")

          var RESULTADO_noCtrl = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          
          decisionTipoGrafico(RESULTADO_noCtrl)

      
      } // END IF S
      else // ELSE T
      { 
        if(nomIdContenedorVC_ON!=[]) ////// si la ventana que voy a activar SI es de vistas combinadas  // IF X
        { 
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)

          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)

          miColorVentanaActiva(miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))

          //////////////////// GRAFICAR identificadorGr (la ventana MASTER)
          
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")

          datos =  window["graphic"+ identificadorGr];
          var RESULTADO = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          decisionTipoGrafico(RESULTADO)

          
          //////////////////// SI EXISTEN SLAVES
          if (SEGUIDORES !=[]) { // if Z
              //////////////// GRAFICAR SLAVES CON FILTRO DE MASTER
              for (var i = 0; i < SEGUIDORES.length; i++) { // FOR Y
              
              miColorVentanaSLAVEactivadas(miGraficoActivoAlmoadilla(SEGUIDORES[i]))
 
                fromMASTER = miPosicionResumenMAT(nomIdContenedorVC_ON)
                toSLAVE = miPosicionResumenMAT_workframe(miGraficoActivo_workframe(SEGUIDORES[i]))

                workFrame = miGraficoActivo_workframe(SEGUIDORES[i])
                
                

                var FILTRADO_COORDINADO = copyFiltradoMaster2(resumenMAT,miGraficoActivo_workframe(SEGUIDORES[i]), fromMASTER,toSLAVE)
                
                             
                // graficar
                var titulo = titulosGraficos( miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i])))

                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("h3").remove()
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("h3").data([1]).enter().append("h3")
                  .text(titulo).attr("align","center").classed("tituloGrafico",true)
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("svg").remove()
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("svg").data([1]).enter().append("svg")
                  .attr("id","contenedorGr" + miGraficoActivo_workframe(SEGUIDORES[i]))
                  .attr("class","chart" + miGraficoActivo_workframe(SEGUIDORES[i]))
                  .attr("width", "100%")
                  //.attr("heigth", "180px")
                  datos =  window["graphic" + miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i]))];

                  
                  var summaryResultado = renderGlobal(datos, FILTRADO_COORDINADO, toSLAVE)
            

                  decisionTipoGrafico(summaryResultado)

              }; // END FOR Y

          }  // END if Z
        } // END IF X
      }  // END ELSE T
    
    } // END ELSE R
        

  } // END FUNCTION


  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
/*function activarLayout2(layout,nomIdContenedorVC_ON, nomIdContenedorVC_OFF,SEGUIDORES,estadoVentanas){
    var activarVentana;
    activate = "SI"


    var ventanaActivaAnterior = "ninguna";
    for (var i = 0; i < estadoVentanas.length; i++) {
      if(estadoVentanas[i]=="greenMandon" || estadoVentanas[i]=="red"){
        ventanaActivaAnterior = "2"+(i+1)  
      }
    };
    ////// si la ventana que voy a activar NO es de vistas combinadas
    var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)

   //alert (identificadorGr)
    var identificadorGrOn = miIDgrafico(nomIdContenedorVC_ON)
    if (identificadorGr=="noG"&&identificadorGrOn=="noG"){alert("no hay gráfico!!!!!!!")}
    else{
      if (nomIdContenedorVC_OFF!=[]) { ////// si la ventana que voy a activar NO es de vistas combinadas
          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          
          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + activarVentana)
            .attr("class","chart" + activarVentana)
            .attr("width", "100%")
            workFrame = activarVentana;
          var RESULTADO_noCtrl = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          
          decisionTipoGrafico(RESULTADO_noCtrl)
      }
      else
      { 
        if(nomIdContenedorVC_ON!=[]) ////// si la ventana que voy a activar SI es de vistas combinadas
        { 
          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          miColorVentanaActiva(miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))

          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))///
            .attr("class","chart" + miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))///
            .attr("width", "100%")
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          datos =  window["graphic"+ identificadorGr];
          var RESULTADO = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          
          

          decisionTipoGrafico(RESULTADO)
            
          //////////////////// SI EXISTEN SLAVES
          if (SEGUIDORES =="#window21" || SEGUIDORES =="#window22") {
              miColorVentanaSLAVEactivadas(miGraficoActivoAlmoadilla(SEGUIDORES))
 
              fromMASTER = miPosicionResumenMAT(nomIdContenedorVC_ON)
              toSLAVE = miPosicionResumenMAT_workframe(miGraficoActivo_workframe(SEGUIDORES))

              var FILTRADO_COORDINADO = copyFiltradoMaster2(resumenMAT,miGraficoActivo_workframe(SEGUIDORES), fromMASTER,toSLAVE)

              // graficar
              var titulo = titulosGraficos( miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES)))

              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("h3").remove()
              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("h3").data([1]).enter().append("h3")
                .text(titulo).attr("align","center").classed("tituloGrafico",true)

              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("svg").remove()
              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("svg").data([1]).enter().append("svg")
                .attr("id","contenedorGr" + miGraficoActivo_workframe(SEGUIDORES))
                .attr("class","chart" + miGraficoActivo_workframe(SEGUIDORES))
                .attr("width", "100%")
              datos =  window["graphic" + miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES))];
              workFrame = miGraficoActivo_workframe(SEGUIDORES)
              var summaryResultado = renderGlobal(datos, FILTRADO_COORDINADO, toSLAVE)


              decisionTipoGrafico(summaryResultado)
          };  
        }
      }  
    }
}*/

function activarLayout2(layout,nomIdContenedorVC_ON, nomIdContenedorVC_OFF,SEGUIDORES,estadoVentanas){
    var activarVentana;
    activate = "SI"
    var ventanaActivaAnterior = "ninguna";
    for (var i = 0; i < estadoVentanas.length; i++) {
      if(estadoVentanas[i]=="greenMandon" || estadoVentanas[i]=="red"){
        ventanaActivaAnterior = "2"+(i+1)
      }
    };
    ////// si la ventana que voy a activar NO es de vistas combinadas
    var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)

    var identificadorGrOn = miIDgrafico(nomIdContenedorVC_ON)
    if (identificadorGr=="noG"&&identificadorGrOn=="noG"){alert("no hay gráfico!!!!!!!")}
    else{ // ELSE R

      if (nomIdContenedorVC_OFF!=[]) { // IF S
          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)

          var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          
          var titulo = titulosGraficos(identificadorGr)

          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").remove()
          
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          datos =  window["graphic"+ identificadorGr];
          
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")

          var RESULTADO_noCtrl = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          
          decisionTipoGrafico(RESULTADO_noCtrl)

      
      } // END IF S
      else // ELSE T
      { 
        if(nomIdContenedorVC_ON!=[]) ////// si la ventana que voy a activar SI es de vistas combinadas  // IF X
        { 
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)

          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)

          miColorVentanaActiva(miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))

          //////////////////// GRAFICAR identificadorGr (la ventana MASTER)
          
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo).attr("align","center").classed("tituloGrafico",true)

          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")

          datos =  window["graphic"+ identificadorGr];
          var RESULTADO = renderGlobal(datos,resumenFiltros(identificadorGr), miPosicionResumenMAT_workframe(workFrame))
          decisionTipoGrafico(RESULTADO)

          
          //////////////////// SI EXISTEN SLAVES
          if (SEGUIDORES !=[]) { // if Z
              //////////////// GRAFICAR SLAVES CON FILTRO DE MASTER
              for (var i = 0; i < SEGUIDORES.length; i++) { // FOR Y
              
              miColorVentanaSLAVEactivadas(miGraficoActivoAlmoadilla(SEGUIDORES[i]))
 
                fromMASTER = miPosicionResumenMAT(nomIdContenedorVC_ON)
                toSLAVE = miPosicionResumenMAT_workframe(miGraficoActivo_workframe(SEGUIDORES[i]))

                workFrame = miGraficoActivo_workframe(SEGUIDORES[i])
                
                

                var FILTRADO_COORDINADO = copyFiltradoMaster2(resumenMAT,miGraficoActivo_workframe(SEGUIDORES[i]), fromMASTER,toSLAVE)
                
                             
                // graficar
                var titulo = titulosGraficos( miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i])))

                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("h3").remove()
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("h3").data([1]).enter().append("h3")
                  .text(titulo).attr("align","center").classed("tituloGrafico",true)
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("svg").remove()
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("svg").data([1]).enter().append("svg")
                  .attr("id","contenedorGr" + miGraficoActivo_workframe(SEGUIDORES[i]))
                  .attr("class","chart" + miGraficoActivo_workframe(SEGUIDORES[i]))
                  .attr("width", "100%")
                  //.attr("heigth", "180px")
                  datos =  window["graphic" + miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i]))];

                  
                  var summaryResultado = renderGlobal(datos, FILTRADO_COORDINADO, toSLAVE)
            

                  decisionTipoGrafico(summaryResultado)

              }; // END FOR Y

          }  // END if Z
        } // END IF X
      }  // END ELSE T
    
    } // END ELSE R
        

  } // END FUNCTION
