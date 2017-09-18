function renderGlobal(DATOS, FILTROsetup,posicion){

          var controlVA = "NO"
          var controlBARRAS = "NO"
          var controlEVOL = "NO"
          var controlEVOLmensual = "NO"
          var controlBarrasNuevas = "NO"
          var controlEVOLmensualTest = "NO"
          var controlNuevoGeo = "NO"

          var DATOSfiltrados=DATOS

          DATOSfiltrados.resultado = DATOSfiltrados.map(function(el){
                return el.resultado = el.absoluto
              });

          if (FILTROsetup.barrasNuevas=="SI" && (FILTROsetup.estatico=="SI")){
              controlBarrasNuevas = "SI"
              var prueba = filtradoBarrasNuevas(DATOSfiltrados)
              console.log(prueba)
              DATOSfiltrados = prueba.datos
              var textoBarrasY = prueba.texto
          }

          if (FILTROsetup.estatico=="SI" && (FILTROsetup.barrasNuevas=="NO")){
              controlBARRAS = "SI"
          }

          if (FILTROsetup.localizacion=="SI"){
            DATOSfiltrados = DATOSfiltrados.filter(function (el) {
              return (el.localizacion === ambitoGeo[0] || el.localizacion === ambitoGeo[1] || 
                el.localizacion === ambitoGeo[2] || el.localizacion === ambitoGeo[3] || 
                el.localizacion === ambitoGeo[4] || el.localizacion === ambitoGeo[5] || 
                el.localizacion === ambitoGeo[6] || el.localizacion === ambitoGeo[7] || 
                el.localizacion === ambitoGeo[8] || el.localizacion === ambitoGeo[9] || 
                el.localizacion === ambitoGeo[10] )});
                var flags = [], output = [], l = DATOSfiltrados.length, i;
                for( i=0; i<l; i++) {
                    if( flags[DATOSfiltrados[i].localizacion]) continue;
                    flags[DATOSfiltrados[i].localizacion] = true;
                    output.push(DATOSfiltrados[i].localizacion);
                }
          }
          if (FILTROsetup.nuevoGeo=="SI"){
            DATOSfiltrados = DATOSfiltrados.filter(function (el) {
              return (el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[0] || el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[1] || 
                el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[2] || el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[3] || 
                el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[4] || el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[5] || 
                el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[6] || el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[7] || 
                el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[8] || el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[9] || 
                el.filtroBcnPobLocalizacion === resumenMAT[posicion].FBcnPobTest[10] )});
                controlNuevoGeo="SI"

          }

          var grDobleFiltro = resumenMAT[posicion].Idgrafico

          if (/*FILTROsetup.distrito=="SI"*/grDobleFiltro=="43" || grDobleFiltro=="44"){
            // es un poco chapuza lo que he hecho pero funciona!
            DATOSfiltrados = DATOSfiltrados.filter(function (el){
                return el.filtroBcnPobDistrito == resumenMAT[posicion].FBcnPobDistr})
          }
          console.log(DATOSfiltrados)

          if (FILTROsetup.porcentaje=="SI" && resumenMAT[posicion].porcentaje == "SI"){
              DATOSfiltrados.resultado = DATOSfiltrados.map(function(el){
                return el.resultado = el.porcentaje
              });
          }

          if (FILTROsetup.variacionAnual=="SI" && resumenMAT[posicion].variacionAnual == "SI"){
              DATOSfiltrados.resultado = DATOSfiltrados.map(function(el){
                return el.resultado = el.variacionAnual
              });
              controlVA = "SI"
          }

          if (FILTROsetup.mensual=="NO"&&FILTROsetup.mensualTest=="NO"){ 
                if (FILTROsetup.hasta=="SI" && FILTROsetup.desde=="SI"){ 
                  if (resumenMAT[posicion].desdeYear == resumenMAT[posicion].hastaYear){  
                        DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                          return el.year == resumenMAT[posicion].desdeYear
                        });
                        if (FILTROsetup.barrasNuevas=="NO") {
                          controlBARRAS = "SI"   
                        };
                        if (FILTROsetup.barrasNuevas=="SI") {
                          controlBarrasNuevas = "SI" 
                          
                         if (controlVA == "SI"){resumenMAT[posicion].variacionAnual="NO";controlVA ="NO"; DATOSfiltrados.resultado = DATOSfiltrados.map(function(el){
                                                    return el.resultado = el.absoluto
                          });}
                          
                          var prueba = filtradoBarrasNuevas(DATOSfiltrados)
                          console.log(prueba) 
                          DATOSfiltrados = prueba.datos
                          var textoBarrasY = prueba.texto 
                        };
                        
                  }
                  if (resumenMAT[posicion].desdeYear < resumenMAT[posicion].hastaYear){

                    DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                      return ((el.year >= (resumenMAT[posicion].desdeYear)) && (el.year <= (resumenMAT[posicion].hastaYear)))
                    });

                    controlEVOL = "SI"
                  }
                  if (resumenMAT[posicion].desdeYear > resumenMAT[posicion].hastaYear){
                    alert ("FECHAS IMPOSIBLES")
                  }


              }  
            }
            if (controlEVOL == "NO" && FILTROsetup.sort=="SI" && resumenMAT[posicion].ordenado == "SI" && (FILTROsetup.variacionAnual=="SI" && resumenMAT[posicion].variacionAnual == "SI")==false){
                DATOSfiltrados = DATOSfiltrados.sort(function(a, b){
                  return a.resultado-b.resultado
                })
                console.log(DATOSfiltrados)
                
                ID_VIP = miIDVIP_fromWorkFrame(workFrame) // ESTO LO HAGO PARA EL CASO DE VENTANAS COORDINADAS
                var numeroGrafico = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
                var CHECKBOX = automaticInput(numeroGrafico)
                textoBarrasY=[]
                for (var i = 0; i < DATOSfiltrados.length; i++) {
                  textoBarrasY[i] = eval("DATOSfiltrados[i]." + CHECKBOX.filtroDatos) 
                };
                console.log(textoBarrasY)

            }


            if (FILTROsetup.mensual=="SI"){ // FILTROsetup.mensual=="SI"
                
                DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                  var start = new Date(resumenMAT[posicion].desdeYear, 0, 01)
                  var end = new Date(resumenMAT[posicion].hastaYear, 11, 01)
                  return (el.fecha >= start && el.fecha <= end)
                });
                
                controlEVOLmensual = "SI"
                controlEVOL = "SI"
            }
            if (FILTROsetup.mensualTest=="SI"){ // FILTROsetup.mensual=="SI"
                
                DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                  var start = new Date(resumenMAT[posicion].desdeYear, 0, 01)
                  var end = new Date(resumenMAT[posicion].hastaYear, 11, 01)
                  return (el.fecha >= start && el.fecha <= end)
                });
                
                controlEVOLmensualTest = "SI"
                controlEVOL = "SI"
            }  


            var DESDE = resumenMAT[posicion].desdeYear
            var HASTA = resumenMAT[posicion].hastaYear
          

          var resultado={datos:DATOSfiltrados, VA:controlVA, EVOL:controlEVOL,
                        EVOLmensual:controlEVOLmensual,BARRAS:controlBARRAS,localizacion:output,desde:DESDE, hasta:HASTA,posicion:posicion,
                        BARRASnuevas:controlBarrasNuevas,EVOLmensualTest:controlEVOLmensualTest,textoY:textoBarrasY} 
          return resultado

    } 
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function filtradoBarrasNuevas(dades){


  ID_VIP = miIDVIP_fromWorkFrame(workFrame) // ESTO LO HAGO PARA EL CASO DE VENTANAS COORDINADAS
  var numeroGrafico = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico 
  var IDENTIFICADOR = ID_VIP

  var CHECKBOX = automaticInput(numeroGrafico)

  var datos_Filtrados =[]
  var controlTexto = []
  for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {            

          if (eval("resumenMAT[miPosicionResumenMAT(ID_VIP)]." + CHECKBOX.filtroResumenMAT + "[i] !='vacío'")){
            controlTexto.push(CHECKBOX.titulosEjeY[i])  
          }
          

         datos_Filtrados[i] = dades.filter(function (el) {  
              return eval("el." + CHECKBOX.filtroDatos + "=== resumenMAT[miPosicionResumenMAT(ID_VIP)]." + CHECKBOX.filtroResumenMAT + "[i]")
          })
  };
  
  var resultadoFiltradoLimpio=[]
  var n = 0
  if (datos_Filtrados.length>0) {
    for (var i = 0; i < datos_Filtrados.length; i++) {
      if (datos_Filtrados[i].length != 0) {resultadoFiltradoLimpio[n] = datos_Filtrados[i][0]; n = n + 1};
    };  
  }else{
    resultadoFiltradoLimpio = dades    
  }
  


  controlTexto.push("") 

  resultado = {datos: resultadoFiltradoLimpio,texto:controlTexto}
  return resultado
}