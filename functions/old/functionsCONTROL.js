function activar2(nomIdContenedor){
    activate = "SI"
    /*var titulosGraficos = d3.scale.ordinal()
      .domain(["01","02"])
      .range(["Habitantes en Barcelona","Plazas de hoteles"])
    */
    var identificadorGr = miIDgrafico(ID_VIP)
    alert("dentro de activar2 :" + ID_VIP)

    var titulo = titulosGraficos(identificadorGr)
    d3.select("#" + nomIdContenedor).selectAll("h3").remove()
    d3.select("#" + nomIdContenedor).selectAll("h3").data([1]).enter().append("h3")
      .text(titulo + " " + untilYear).attr("align","center")

   d3.select("#" + nomIdContenedor).selectAll("svg").remove()
    d3.select("#" + nomIdContenedor).selectAll("svg").data([1]).enter().append("svg")
      .attr("id","contenedorGr" + workFrame)
      .attr("class","chart" + workFrame)
      .attr("width", "100%")
      if (controlEVOLUTION==true){
        if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
        else{renderEvolucion(datos)};
      }
      else{render(datos)}
    
  }
 
 function activar3(NOMIdContenedorVC_ON, NOMIdContenedorVC_OFF,Seguidores,EstadoVentanas){
    //alert(NOMIdContenedorVC_ON)
    //alert(miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF))
    //alert("ESTADO VENTANAS " + EstadoVentanas)
    //alert("SEGUIDORES " + SEGUIDORES)
    

    //alert("nomIdContenedorVC_ON " + NOMIdContenedorVC_ON)
    //alert("nomIdContenedorVC_OFF " + NOMIdContenedorVC_OFF)
    if (NOMIdContenedorVC_OFF=="gr4_1"||NOMIdContenedorVC_OFF=="gr4_2"||NOMIdContenedorVC_OFF=="gr4_3"||
        NOMIdContenedorVC_OFF=="gr4_4"||NOMIdContenedorVC_ON=="gr4_1"||NOMIdContenedorVC_ON=="gr4_2"||
        NOMIdContenedorVC_ON=="gr4_3"||NOMIdContenedorVC_ON=="gr4_4"){
        var LAYOUT = "4"
        //alert("TOCA LA FUNCIÓN PARA 4")
        activarLayout4(LAYOUT,NOMIdContenedorVC_ON, NOMIdContenedorVC_OFF,Seguidores,EstadoVentanas)
    }
    if (NOMIdContenedorVC_OFF=="gr_1"||NOMIdContenedorVC_OFF=="gr_2"||
        NOMIdContenedorVC_ON=="gr_1"||NOMIdContenedorVC_ON=="gr_2"){
        var LAYOUT = "2"
        //alert("TOCA LA FUNCIÓN PARA 2")
        activarLayout2(LAYOUT,NOMIdContenedorVC_ON, NOMIdContenedorVC_OFF,Seguidores,EstadoVentanas)
    }
    if (NOMIdContenedorVC_ON=="gr1"){
        //alert("LAYOUT 1")
        var LAYOUT = "1"
        activarLayout1(NOMIdContenedorVC_ON)
        
    }
    
  }
function activarLayout1(nomIdContenedor){
          activate = "SI"
          var identificadorGr = miIDgrafico(nomIdContenedor)
          //alert("identificadorGr: " + identificadorGr)
          var titulo = titulosGraficos(identificadorGr)

          d3.select("#" + nomIdContenedor).selectAll("h3").remove()
          d3.select("#" + nomIdContenedor).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo + " " + untilYear).attr("align","center")
          //alert("ventana de trabajo: debe ser igual a workFrame: " + nomIdContenedorVC_OFF)
          //alert("WORKFRAME:  " + workFrame)
          d3.select("#" + nomIdContenedor).selectAll("svg").remove()
          
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedor)
          //alert("workFrame : " + workFrame)

          datos =  window["graphic"+ identificadorGr];
          //console.log(datos )
          d3.select("#" + nomIdContenedor).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")
          if (controlEVOLUTION==true){
            if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
            else{renderEvolucion(datos)};
          }
          else{render(datos)}
        }



function activarLayout4(layout,nomIdContenedorVC_ON, nomIdContenedorVC_OFF,SEGUIDORES,estadoVentanas){
    var activarVentana;
    activate = "SI"
    var ventanaActivaAnterior = "ninguna";
    for (var i = 0; i < estadoVentanas.length; i++) {
      if(estadoVentanas[i]=="greenMandon" || estadoVentanas[i]=="red"){
        ventanaActivaAnterior = "4"+(i+1)
        
        //alert("la ventana activa antes del cambio es: " + ventanaActivaAnterior)
      }
    };
    ////// si la ventana que voy a activar NO es de vistas combinadas
    var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
    //alert("identificadorGr" + identificadorGr)
    /*if (identificadorGr=="noG"){alert("no hay gráfico")}*/
    var identificadorGrOn = miIDgrafico(nomIdContenedorVC_ON)
    if (identificadorGr=="noG"&&identificadorGrOn=="noG"){alert("no hay gráfico!!!!!!!")}
    else{
      //alert("entro en loop NO VC?")
      //alert( nomIdContenedorVC_OFF!=[])
      if (nomIdContenedorVC_OFF!=[]) { 
          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          //alert ("activaré la ventana" + activarVentana)
          //alert ("activaré la ventana" + nomIdContenedorVC_OFF)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
          // alert("Grafico solamente " + identificadorGr)  
          /////////////////////////////////////// AQUÍ!!!
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          
          var titulo = titulosGraficos(identificadorGr)

          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo + " " + untilYear).attr("align","center")
          //alert("ventana de trabajo: debe ser igual a workFrame: " + nomIdContenedorVC_OFF)
          //alert("WORKFRAME:  " + workFrame)
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").remove()
          
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          datos =  window["graphic"+ identificadorGr];
          
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")
          if (controlEVOLUTION==true){
            if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
            else{renderEvolucion(datos)};
          }
          else{render(datos)}
          
      }
      else
      { //alert("entro en loop SÍ VC?"); alert(nomIdContenedorVC_ON!=[]); 
        if(nomIdContenedorVC_ON!=[]) ////// si la ventana que voy a activar SI es de vistas combinadas
        { //alert("nomIdContenedorVC_ON: " + nomIdContenedorVC_ON)
          //alert("identificadorGr: " + identificadorGr)
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          //workFrame = ventanaActivaAnterior
          //alert(workFrame)

          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)
          alert("El grafico que manda es: " + identificadorGr)
          console.log(resumenFiltros(identificadorGr))
          var filtroMaster = resumenFiltros(identificadorGr)

          miColorVentanaActiva(miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))

          //////////////////// GRAFICAR identificadorGr (la ventana MASTER)
          
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)
          // alert("Grafico solamente " + identificadorGr)  
          /////////////////////////////////////// AQUÍ!!!
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo + " " + untilYear).attr("align","center")

          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + workFrame)
            .attr("class","chart" + workFrame)
            .attr("width", "100%")

          datos =  window["graphic"+ identificadorGr];
          if (controlEVOLUTION==true){
            if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
            else{renderEvolucion(datos)};
          }
          else{render(datos)}
          
          //////////////////// SI EXISTEN SLAVES
          if (SEGUIDORES !=[]) {
              //var workFrameMaster = workFrame
              //////////////// GRAFICAR SLAVES CON FILTRO DE MASTER
              for (var i = 0; i < SEGUIDORES.length; i++) {
              console.log("seguidores" + SEGUIDORES[i])
              miColorVentanaSLAVEactivadas(miGraficoActivoAlmoadilla(SEGUIDORES[i]))
 
                fromMASTER = miPosicionResumenMAT(nomIdContenedorVC_ON)
                toSLAVE = miPosicionResumenMAT_workframe(miGraficoActivo_workframe(SEGUIDORES[i]))

                //console.log(resumenMAT)
                console.log("from: "+ fromMASTER)
                console.log("to: "+ toSLAVE)

                var filtroSlave = resumenFiltros(resumenMAT[toSLAVE].Idgrafico)
                
                alert("El grafico slave es: " + resumenMAT[toSLAVE].Idgrafico)
                console.log(filtroSlave)
                var FiltroCoordinado = []
                if (filtroMaster.localizacion=="SI" && filtroSlave.localizacion=="SI"){
                  FiltroCoordinado.localizacion = "SI"
                }else{FiltroCoordinado.localizacion = "NO"}
                if (filtroMaster.sort=="SI" && filtroSlave.sort=="SI"){
                  FiltroCoordinado.sort = "SI"
                }else{FiltroCoordinado.sort = "NO"}
                if (filtroMaster.porcentaje=="SI" && filtroSlave.porcentaje=="SI"){
                  FiltroCoordinado.porcentaje = "SI"
                }else{FiltroCoordinado.porcentaje = "NO"}
                if (filtroMaster.variacionAnual=="SI" && filtroSlave.variacionAnual=="SI"){
                  FiltroCoordinado.variacionAnual = "SI"
                }else{FiltroCoordinado.variacionAnual = "NO"}
                if (filtroMaster.desde=="SI" && filtroSlave.desde=="SI"){
                  FiltroCoordinado.desde = "SI"
                }else{FiltroCoordinado.desde = "NO"}
                if (filtroMaster.hasta=="SI" && filtroSlave.hasta=="SI"){
                  FiltroCoordinado.hasta = "SI"
                }else{FiltroCoordinado.hasta = "NO"}
                console.log(FiltroCoordinado)

                workFrame = miGraficoActivo_workframe(SEGUIDORES[i])
                

                copyFiltradoMaster(resumenMAT,miGraficoActivo_workframe(SEGUIDORES[i]), fromMASTER,toSLAVE)
                
                // cargar datos miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i]))
                
                // graficar
                var titulo = titulosGraficos( miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i])))

                //alert("workframe2 :" + miGraficoActivo(SEGUIDORES[i]))
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("h3").remove()
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("h3").data([1]).enter().append("h3")
                  .text(titulo + " " + untilYear).attr("align","center")
                //alert("borro y reago: " + miGraficoActivoAlmoadilla(SEGUIDORES[i]))
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("svg").remove()
                d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES[i])).selectAll("svg").data([1]).enter().append("svg")
                  .attr("id","contenedorGr" + miGraficoActivo_workframe(SEGUIDORES[i]))
                  .attr("class","chart" + miGraficoActivo_workframe(SEGUIDORES[i]))
                  .attr("width", "100%")
                  //.attr("heigth", "180px")
                  datos =  window["graphic" + miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES[i]))];
                if (controlEVOLUTION==true){
                  
                  //alert("en Control, activarlayout4, con evolución")
                  if (VARIACIONANUAL=="SI") {alert("VARIACIONANUAL==SI");renderVariacionAnual(datos)}
                  else{/*alert("VARIACIONANUAL==NO");*/renderEvolucion(datos)};
                }
                else{render(datos)}

              };

          };  
        }
      }  
    }
  }


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
function activarLayout2(layout,nomIdContenedorVC_ON, nomIdContenedorVC_OFF,SEGUIDORES,estadoVentanas){
    var activarVentana;
    activate = "SI"
    
    //alert("ESTADO VENTANAS " + estadoVentanas)
    //alert("SEGUIDORES " + SEGUIDORES)
    //alert("nomIdContenedorVC_ON " + nomIdContenedorVC_ON)
    //alert("nomIdContenedorVC_OFF " + nomIdContenedorVC_OFF)
    
    var ventanaActivaAnterior = "ninguna";
    for (var i = 0; i < estadoVentanas.length; i++) {
      if(estadoVentanas[i]=="greenMandon" || estadoVentanas[i]=="red"){
        ventanaActivaAnterior = "2"+(i+1)  
        //alert("la ventana activa antes del cambio es: " + ventanaActivaAnterior)
      }
    };
    ////// si la ventana que voy a activar NO es de vistas combinadas
    var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
    var identificadorGrOn = miIDgrafico(nomIdContenedorVC_ON)
    if (identificadorGr=="noG"&&identificadorGrOn=="noG"){alert("no hay gráfico!!!!!!!")}
    else{
      if (nomIdContenedorVC_OFF!=[]) { ////// si la ventana que voy a activar NO es de vistas combinadas
          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_OFF)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_OFF)
          /////////////////////////////////////// AQUÍ!!!
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          
          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo + " " + untilYear).attr("align","center")

          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_OFF).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + activarVentana)
            .attr("class","chart" + activarVentana)
            .attr("width", "100%")
            workFrame = activarVentana;
          
          if (controlEVOLUTION==true){
            if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
            else{renderEvolucion(datos)};
          }
          else{render(datos)}
          
      }
      else
      { 
        if(nomIdContenedorVC_ON!=[]) ////// si la ventana que voy a activar SI es de vistas combinadas
        { //alert("nomIdContenedorVC_ON: " + nomIdContenedorVC_ON)
          //alert("identificadorGr: " + identificadorGr)
          //workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          //workFrame = ventanaActivaAnterior
          //alert(workFrame)

          var activarVentana = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          var identificadorGr = miIDgrafico(nomIdContenedorVC_ON)
          myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)
          //alert("Graficar vc " + miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))
          miColorVentanaActiva(miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))

          //myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)

          var titulo = titulosGraficos(identificadorGr)
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("h3").data([1]).enter().append("h3")
            .text(titulo + " " + untilYear).attr("align","center")

          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").remove()
          d3.select("#" + nomIdContenedorVC_ON).selectAll("svg").data([1]).enter().append("svg")
            .attr("id","contenedorGr" + miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))///
            .attr("class","chart" + miWorkFrame_fromIDVIP(nomIdContenedorVC_ON))///
            .attr("width", "100%")
          workFrame = miWorkFrame_fromIDVIP(nomIdContenedorVC_ON)
          datos =  window["graphic"+ identificadorGr];
          if (controlEVOLUTION==true){
            if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
            else{renderEvolucion(datos)};
          }
          else{render(datos)}
          
          //////////////////// SI EXISTEN SLAVES
          if (SEGUIDORES =="#window21" || SEGUIDORES =="#window22") {
              //alert("dentro de seguidores SEGUIDORES " + SEGUIDORES)
              console.log(SEGUIDORES)
              miColorVentanaSLAVEactivadas(miGraficoActivoAlmoadilla(SEGUIDORES))
 
              fromMASTER = miPosicionResumenMAT(nomIdContenedorVC_ON)
              toSLAVE = miPosicionResumenMAT_workframe(miGraficoActivo_workframe(SEGUIDORES))

              //console.log(resumenMAT)
              console.log("from: "+ fromMASTER)
              console.log("to: "+ toSLAVE)

              //workFrame = miGraficoActivo_workframe(SEGUIDORES)
              
              //myFunctionBotonesCuadradosSimple(ventanaActivaAnterior, activarVentana)

              copyFiltradoMaster(resumenMAT,miGraficoActivo_workframe(SEGUIDORES), fromMASTER,toSLAVE)
              //console.log(resumenMAT)
              //alert("seguidores: " + SEGUIDORES)
              //alert("cargar datos "+ miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES)))
              
              
              // graficar
              var titulo = titulosGraficos( miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES)))

              //alert("workframe2 :" + miGraficoActivo(SEGUIDORES[i]))
              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("h3").remove()
              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("h3").data([1]).enter().append("h3")
                .text(titulo + " " + untilYear).attr("align","center")

              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("svg").remove()
              d3.select("#" + miGraficoActivoAlmoadilla(SEGUIDORES)).selectAll("svg").data([1]).enter().append("svg")
                .attr("id","contenedorGr" + miGraficoActivo_workframe(SEGUIDORES))
                .attr("class","chart" + miGraficoActivo_workframe(SEGUIDORES))
                .attr("width", "100%")
              datos =  window["graphic" + miIDgrafico(miGraficoActivo_IDVIP(SEGUIDORES))];
              workFrame = miGraficoActivo_workframe(SEGUIDORES)
              if (controlEVOLUTION==true){
                if (VARIACIONANUAL=="SI") {renderVariacionAnual(datos)}
               else{renderEvolucion(datos)};
              }
              else{render(datos)}

            //};

          };  
        }
      }  
    }
}