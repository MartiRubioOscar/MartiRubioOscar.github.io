function renderGlobal(DATOS, FILTROsetup,posicion){

          //alert("posicion " + posicion)
          //alert(resumenMAT[posicion].desdeYear)
          //{localizacion:"SI",sort:"SI",porcentaje:"SI",variacionAnual:"NO",desde:"SI",hasta:"SI"}
          var controlVA = "NO"
          var controlBARRAS = "NO"
          var controlEVOL = "NO"
          var controlEVOLmensual = "NO"
          console.log(DATOS)
          var DATOSfiltrados=DATOS
          if (FILTROsetup.localizacion=="SI"){
            DATOSfiltrados = DATOSfiltrados.filter(function (el) {
              return (el.localizacion === ambitoGeo[0] || el.localizacion === ambitoGeo[1] || 
                el.localizacion === ambitoGeo[2] || el.localizacion === ambitoGeo[3] || 
                el.localizacion === ambitoGeo[4] || el.localizacion === ambitoGeo[5] || 
                el.localizacion === ambitoGeo[6] || el.localizacion === ambitoGeo[7] || 
                el.localizacion === ambitoGeo[8] || el.localizacion === ambitoGeo[9] || 
                el.localizacion === ambitoGeo[10] )});
                //console.log(DATOSfiltradosDEF)
                var flags = [], output = [], l = DATOSfiltrados.length, i;
                for( i=0; i<l; i++) {
                    if( flags[DATOSfiltrados[i].localizacion]) continue;
                    flags[DATOSfiltrados[i].localizacion] = true;
                    output.push(DATOSfiltrados[i].localizacion);
                }
          }
          if (FILTROsetup.sort=="SI" && resumenMAT[posicion].ordenado == "SI" && (FILTROsetup.variacionAnual=="SI" && resumenMAT[posicion].variacionAnual == "SI")==false){
              DATOSfiltrados = DATOSfiltrados.sort(function(a, b){
                return a.resultado-b.resultado
              })
          }
          if (FILTROsetup.porcentaje=="SI" && resumenMAT[posicion].porcentaje == "SI"){
              DATOSfiltrados = DATOSfiltrados.map(function(el){
                return {localizacion: el.localizacion, year: el.year, resultado: el.porcentaje,variacionAnual:el.variacionAnual}
              });
          }
          if (FILTROsetup.variacionAnual=="SI" && resumenMAT[posicion].variacionAnual == "SI"){
              DATOSfiltrados = DATOSfiltrados.map(function(el){
                return {localizacion: el.localizacion, year: el.year, resultado: el.variacionAnual}
              });
              controlVA = "SI"
          }

          /*if (FILTROsetup.desde=="SI"){

          }*/
          //alert("desde " + resumenMAT[posicion].desdeYear + "hasta " + resumenMAT[posicion].hastaYear) 
          //alert ("FILTRO SETUP. MENSUAL = " + FILTROsetup.mensual)
          if (FILTROsetup.mensual=="NO"){
                if (FILTROsetup.hasta=="SI" && FILTROsetup.desde=="SI"){
                  if (resumenMAT[posicion].desdeYear == resumenMAT[posicion].hastaYear){                  
                        DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                          return el.year == untilYear
                        });
                        controlBARRAS = "SI" 
                  }
                  if (resumenMAT[posicion].desdeYear < resumenMAT[posicion].hastaYear){
                    DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                      return ((el.year > (fromYear-1)) && (el.year < (untilYear+1)))
                    });
                    controlEVOL = "SI"
                  }
                  if (resumenMAT[posicion].desdeYear > resumenMAT[posicion].hastaYear){
                    alert ("FECHAS IMPOSIBLES")
                  }
              }  
            }
            if (FILTROsetup.mensual=="SI"){ // FILTROsetup.mensual=="SI"
                //alert("solamente un año y mensual")
                console.log(DATOSfiltrados)
                DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                var start = new Date(fromYear, 0, 01)
                var end = new Date(untilYear, 11, 01)
                //return el.fecha < end
                return (el.fecha >= start && el.fecha <= end)
                });
                console.log(DATOSfiltrados)   
                controlEVOLmensual = "SI"
                controlEVOL = "SI"
                //alert("controlEVOLmensual :" + controlEVOLmensual)
            }
          console.log(DATOSfiltrados)
          var resultado={datos:DATOSfiltrados, VA:controlVA, EVOL:controlEVOL,
                        EVOLmensual:controlEVOLmensual,BARRAS:controlBARRAS,localizacion:output} 
          return resultado

    } 