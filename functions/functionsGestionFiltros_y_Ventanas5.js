  function miVentanaActiva(){
          Identificador = ID_VIP 
          if (document.getElementById("window41")!=null){  
            var element41 = document.getElementById("window41").className
            var element42 = document.getElementById("window42").className
            var element43 = document.getElementById("window43").className
            var element44 = document.getElementById("window44").className 
            if (element41=="greenMandon") {Identificador = "gr4_1"};
            if (element42=="greenMandon") {Identificador = "gr4_2"};
            if (element43=="greenMandon") {Identificador = "gr4_3"};
            if (element44=="greenMandon") {Identificador = "gr4_4"};

          }
          if (document.getElementById("window21")!=null){  
            var element21 = document.getElementById("window21").className
            var element22 = document.getElementById("window22").className
            if (element21=="greenMandon") {Identificador = "gr_1"};
            if (element22=="greenMandon") {Identificador = "gr_2"};
          }
          
          return Identificador

}

  function copyContentResMat(resumenMAT,WORKFRAME, fromOrigin,toDestiny){ 
    resumenMAT[toDestiny].desdeYear = resumenMAT[fromOrigin].desdeYear
    resumenMAT[toDestiny].hastaYear = resumenMAT[fromOrigin].hastaYear
    
    resumenMAT[toDestiny].Idgrafico = resumenMAT[fromOrigin].Idgrafico 
    
    resumenMAT[toDestiny].Seguimiento = WORKFRAME
    resumenMAT[toDestiny].PrimeraVez = resumenMAT[fromOrigin].PrimeraVez
    resumenMAT[toDestiny].Ventana = WORKFRAME
    resumenMAT[toDestiny].filtro = resumenMAT[fromOrigin].filtro // de localización
    resumenMAT[toDestiny].ordenado = resumenMAT[fromOrigin].ordenado
    resumenMAT[toDestiny].porcentaje = resumenMAT[fromOrigin].porcentaje
    resumenMAT[toDestiny].variacionAnual = resumenMAT[fromOrigin].variacionAnual
    resumenMAT[toDestiny].ambitoGeoNuevoFiltro = resumenMAT[fromOrigin].ambitoGeoNuevoFiltro


    resumenMAT[toDestiny].FAeropuerto = resumenMAT[fromOrigin].FAeropuerto
    resumenMAT[toDestiny].FTemperatura = resumenMAT[fromOrigin].FTemperatura
    resumenMAT[toDestiny].FTurSexo = resumenMAT[fromOrigin].FTurSexo
    resumenMAT[toDestiny].FTurEdad = resumenMAT[fromOrigin].FTurEdad

    resumenMAT[toDestiny].FTurGasto = resumenMAT[fromOrigin].FTurGasto
    resumenMAT[toDestiny].FTurMotivo = resumenMAT[fromOrigin].FTurMotivo
    resumenMAT[toDestiny].FTurAlojamiento = resumenMAT[fromOrigin].FTurAlojamiento

    resumenMAT[toDestiny].FTurRepe = resumenMAT[fromOrigin].FTurRepe
    resumenMAT[toDestiny].FTurTransporte = resumenMAT[fromOrigin].FTurTransporte

    resumenMAT[toDestiny].FBcnEcoTrabajadoresSector = resumenMAT[fromOrigin].FBcnEcoTrabajadoresSector
    resumenMAT[toDestiny].FBcnEcoSituacionLaboral = resumenMAT[fromOrigin].FBcnEcoSituacionLaboral

    resumenMAT[toDestiny].FBcnEcoPIB = resumenMAT[fromOrigin].FBcnEcoPIB
    resumenMAT[toDestiny].FBcnEcoSalariosSector = resumenMAT[fromOrigin].FBcnEcoSalariosSector

    resumenMAT[toDestiny].FTurRNumReunion = resumenMAT[fromOrigin].FTurRNumReunion
    resumenMAT[toDestiny].FTurRAsisReunion = resumenMAT[fromOrigin].FTurRAsisReunion
    resumenMAT[toDestiny].FTurAloHNumHP = resumenMAT[fromOrigin].FTurAloHNumHP
    resumenMAT[toDestiny].FTurAloHPlazasHP = resumenMAT[fromOrigin].FTurAloHPlazasHP
    resumenMAT[toDestiny].FTurCultTop = resumenMAT[fromOrigin].FTurCultTop

    resumenMAT[toDestiny].FTurPNacionalidad = resumenMAT[fromOrigin].FTurPNacionalidad
    
    resumenMAT[toDestiny].FBcnPobEdades = resumenMAT[fromOrigin].FBcnPobEdades
    resumenMAT[toDestiny].FBcnPobNacion = resumenMAT[fromOrigin].FBcnPobNacion

    resumenMAT[toDestiny].FBcnPobDistr = resumenMAT[fromOrigin].FBcnPobDistr


    /// TEST PARA POBLACIÓN
    resumenMAT[toDestiny].FBcnPobTest = resumenMAT[fromOrigin].FBcnPobTest


  }

  function copyFiltradoMaster(resumenMAT,WORKFRAME,windowMASTER,windowSLAVE){ //
    resumenMAT[windowSLAVE].desdeYear = resumenMAT[windowMASTER].desdeYear
    resumenMAT[windowSLAVE].hastaYear = resumenMAT[windowMASTER].hastaYear
    
    resumenMAT[windowSLAVE].Seguimiento = WORKFRAME
    resumenMAT[windowSLAVE].PrimeraVez = resumenMAT[windowMASTER].PrimeraVez
    resumenMAT[windowSLAVE].Ventana = WORKFRAME
    resumenMAT[windowSLAVE].filtro = resumenMAT[windowMASTER].filtro
    resumenMAT[windowSLAVE].ordenado = resumenMAT[windowMASTER].ordenado
    resumenMAT[windowSLAVE].porcentaje = resumenMAT[windowMASTER].porcentaje
    resumenMAT[windowSLAVE].variacionAnual = resumenMAT[windowMASTER].variacionAnual
    resumenMAT[windowSLAVE].ambitoGeoNuevoFiltro = resumenMAT[windowMASTER].ambitoGeoNuevoFiltro

  }
  function copyFiltradoMaster2(resumenMAT,WORKFRAME,windowMASTER,windowSLAVE){ //
    
    var filtroSlave = resumenFiltros(resumenMAT[windowSLAVE].Idgrafico)
    var filtroMaster = resumenFiltros(resumenMAT[windowMASTER].Idgrafico)
    console.log(filtroMaster)
    console.log(filtroSlave)


    var FiltroCoordinado = []
    FiltroCoordinado.barrasNuevas = "NO"
    FiltroCoordinado.estatico = "NO"
    FiltroCoordinado.localizacion = "NO"
    FiltroCoordinado.sort = "NO"
    FiltroCoordinado.porcentaje = "NO"
    FiltroCoordinado.variacionAnual = "NO"
    FiltroCoordinado.desde = "NO"
    FiltroCoordinado.hasta = "NO"
    FiltroCoordinado.mensual = "NO"
    FiltroCoordinado.mensualTest = "NO"
    FiltroCoordinado.ambitoGeoNuevoFiltro = "NO"


    if(filtroSlave.barrasNuevas=="SI"){FiltroCoordinado.barrasNuevas = "SI"}

    if(filtroSlave.estatico=="SI"){
      FiltroCoordinado.estatico = "SI"
    }
    else{ 
      if (filtroMaster.estatico=="SI") {
        FiltroCoordinado.desde = "SI";
        FiltroCoordinado.hasta = "SI" 
        if (filtroSlave.mensual == "SI") {FiltroCoordinado.mensual = "SI"}
      }
    }



    if ((filtroMaster.localizacion=="SI" && filtroSlave.localizacion=="SI")){
      FiltroCoordinado.localizacion = "SI"; resumenMAT[windowSLAVE].filtro = resumenMAT[windowMASTER].filtro
    }else{
      if ((filtroMaster.localizacion=="NO" && filtroSlave.localizacion=="SI")){
        FiltroCoordinado.localizacion = "SI";
        ambitoGeo = resumenMAT[windowSLAVE].filtro

      }
    }


    if (filtroMaster.sort=="SI" && filtroSlave.sort=="SI"){
      FiltroCoordinado.sort = "SI"; resumenMAT[windowSLAVE].ordenado = resumenMAT[windowMASTER].ordenado
    }
    
    if (filtroMaster.porcentaje=="SI" && filtroSlave.porcentaje=="SI"){
      FiltroCoordinado.porcentaje = "SI"; resumenMAT[windowSLAVE].porcentaje = resumenMAT[windowMASTER].porcentaje
    }
    
    if (filtroMaster.variacionAnual=="SI" && filtroSlave.variacionAnual=="SI"){
      FiltroCoordinado.variacionAnual = "SI"; resumenMAT[windowSLAVE].variacionAnual = resumenMAT[windowMASTER].variacionAnual
    }

    ////////////////test nuevo filtro localización
    //ambitoGeoNuevoFiltro no sirve de nada!!
    //alert("ambitoGeoNuevoFiltro: " + resumenMAT[windowMASTER].ambitoGeoNuevoFiltro)
    if (filtroMaster.nuevoGeo=="SI" && filtroSlave.nuevoGeo=="SI"){
      FiltroCoordinado.nuevoGeo = "SI"; resumenMAT[windowSLAVE].FBcnPobTest = resumenMAT[windowMASTER].FBcnPobTest
    }

    if (filtroMaster.desde=="SI" && filtroSlave.desde=="SI"){
     
      FiltroCoordinado.desde = "SI"; resumenMAT[windowSLAVE].desdeYear = resumenMAT[windowMASTER].desdeYear
    }
    
    if (filtroMaster.hasta=="SI" && filtroSlave.hasta=="SI"){
      FiltroCoordinado.hasta = "SI"; resumenMAT[windowSLAVE].hastaYear = resumenMAT[windowMASTER].hastaYear
    }
    

    if ((filtroMaster.mensual=="SI" && filtroSlave.mensual=="SI")||(filtroSlave.mensual=="SI" && filtroMaster.desde=="SI"&&filtroMaster.hasta=="SI")){
      FiltroCoordinado.mensual = "SI"; 
    }
    
    if ((filtroMaster.mensualTest=="SI" && filtroSlave.mensualTest=="SI")||(filtroSlave.mensualTest=="SI" && filtroMaster.desde=="SI"&&filtroMaster.hasta=="SI")){
      FiltroCoordinado.mensualTest = "SI"; 
    }

    resumenMAT[windowSLAVE].Seguimiento = WORKFRAME
    resumenMAT[windowSLAVE].PrimeraVez = resumenMAT[windowMASTER].PrimeraVez
    resumenMAT[windowSLAVE].Ventana = WORKFRAME
    
    
    console.log(FiltroCoordinado)
    return FiltroCoordinado
  }
  function filtrar(resMAT){ //se usa? En este fichero no
          ambitoGeo = resMAT.filtro
          SORT = resMAT.ordenado
          untilYear = resMAT.hastaYear
          fromYear = resMAT.desdeYear
          if (untilYear==fromYear){controlEVOLUTION=false}else{controlEVOLUTION=true}
          datos = window["graphic" + resMAT.Idgrafico];
  }
function updateFiltroNavegador(AMBITOGEO, FROMYEAR, UNTILYEAR){
          Identificador = ID_VIP 
          if (document.getElementById("window41")!=null){  
            var element41 = document.getElementById("window41").className
            var element42 = document.getElementById("window42").className
            var element43 = document.getElementById("window43").className
            var element44 = document.getElementById("window44").className 
            if (element41=="greenMandon") {Identificador = "gr4_1"};
            if (element42=="greenMandon") {Identificador = "gr4_2"};
            if (element43=="greenMandon") {Identificador = "gr4_3"};
            if (element44=="greenMandon") {Identificador = "gr4_4"};

          }
          if (document.getElementById("window21")!=null){  
            var element21 = document.getElementById("window21").className
            var element22 = document.getElementById("window22").className
            if (element21=="greenMandon") {Identificador = "gr_1"};
            if (element22=="greenMandon") {Identificador = "gr_2"};
          }



          var elementExists = document.getElementById("hasta" + UNTILYEAR);

          if (elementExists!=null){
            document.getElementById("hasta" + UNTILYEAR).selected = true;
            document.getElementById("desde" + FROMYEAR).selected = true;  
          }
          

          ///// FILTROS
          ///Localización
          localizacionExist = document.getElementsByClassName("largerCheckbox")
    
          if(localizacionExist.length!=0){
            for (var i = 0; i < 11; i++) {
                if (i==10){if (AMBITOGEO[10]=="vacío"){document.getElementById("Distr10").checked = false;}
                          else {document.getElementById("Distr10").checked = true;}}
                if(i<10){if (AMBITOGEO[i]=="vacío"){document.getElementById("Distr0" + i).checked = false;}
                      else {document.getElementById("Distr0" + i).checked = true;}
                }
            };
          }

          /// Aeropuerto
          aeropuertoExist = document.getElementsByClassName("CheckboxAeropuerto")
          if(aeropuertoExist.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FAeropuerto[0]=="vacío"){
                    document.getElementById("AeropuertoTotal").checked = false;
                  }
                  else {document.getElementById("AeropuertoTotal").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FAeropuerto[1]=="vacío"){
                    document.getElementById("AeropuertoNacional").checked = false;
                  }
                  else {document.getElementById("AeropuertoNacional").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FAeropuerto[2]=="vacío"){
                    document.getElementById("AeropuertoInternacional").checked = false;
                  }
                  else {document.getElementById("AeropuertoInternacional").checked = true;}
                
          }

          /// Temperaturas
          temperatura = document.getElementsByClassName("CheckboxTemperaturas")
          if(temperatura.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTemperatura[0]=="vacío"){
                    document.getElementById("Media").checked = false;
                  }
                  else {document.getElementById("Media").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTemperatura[1]=="vacío"){
                    document.getElementById("Minima").checked = false;
                  }
                  else {document.getElementById("Minima").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTemperatura[2]=="vacío"){
                    document.getElementById("Maxima").checked = false;
                  }
                  else {document.getElementById("Maxima").checked = true;}
                
          }
          /// Sexo
          sexo = document.getElementsByClassName("CheckboxSexo")
          if(sexo.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurSexo[0]=="vacío"){
                    document.getElementById("Hombres").checked = false;
                  }
                  else {document.getElementById("Hombres").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurSexo[1]=="vacío"){
                    document.getElementById("Mujeres").checked = false;
                  }
                  else {document.getElementById("Mujeres").checked = true;}
          }
          /// EdadTurista
          EdadTurista = document.getElementsByClassName("CheckboxEdadTurista")
          if(EdadTurista.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurEdad[0]=="vacío"){
                    document.getElementById("rangoEdadT1").checked = false;
                  }
                  else {document.getElementById("rangoEdadT1").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurEdad[1]=="vacío"){
                    document.getElementById("rangoEdadT2").checked = false;
                  }
                  else {document.getElementById("rangoEdadT2").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurEdad[2]=="vacío"){
                    document.getElementById("rangoEdadT3").checked = false;
                  }
                  else {document.getElementById("rangoEdadT3").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurEdad[3]=="vacío"){
                    document.getElementById("rangoEdadT4").checked = false;
                  }
                  else {document.getElementById("rangoEdadT4").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurEdad[4]=="vacío"){
                    document.getElementById("rangoEdadT5").checked = false;
                  }
                  else {document.getElementById("rangoEdadT5").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurEdad[5]=="vacío"){
                    document.getElementById("rangoEdadT6").checked = false;
                  }
                  else {document.getElementById("rangoEdadT6").checked = true;}                                                                        
          }
          
          /// Gasto
          gasto = document.getElementsByClassName("CheckboxGasto")

          if(gasto.length!=0){
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurGasto[0]=="vacío"){
                    document.getElementById("Transporte").checked = false;
                  }
                  else {document.getElementById("Transporte").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurGasto[1]=="vacío"){
                    document.getElementById("Alojamiento").checked = false;
                  }
                  else {document.getElementById("Alojamiento").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurGasto[2]=="vacío"){
                    document.getElementById("Estancia").checked = false;
                  }
                  else {document.getElementById("Estancia").checked = true;}                  
          }

                    /// Motivo
          motivo = document.getElementsByClassName("CheckboxMotivos")
          if(motivo.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurMotivo[0]=="vacío"){
                    document.getElementById("Vacacional").checked = false;
                  }
                  else {document.getElementById("Vacacional").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurMotivo[1]=="vacío"){
                    document.getElementById("Profesional").checked = false;
                  }
                  else {document.getElementById("Profesional").checked = true;}

                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurMotivo[2]=="vacío"){
                    document.getElementById("Personal").checked = false;
                  }
                  else {document.getElementById("Personal").checked = true;}                  

          }
                    /// AlojamientoPT
          alojamientoPT = document.getElementsByClassName("CheckboxAlojamientoPT")
          if(alojamientoPT.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurAlojamiento[0]=="vacío"){
                    document.getElementById("HotelesPT").checked = false;
                  }
                  else {document.getElementById("HotelesPT").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurAlojamiento[1]=="vacío"){
                    document.getElementById("PensionesPT").checked = false;
                  }
                  else {document.getElementById("PensionesPT").checked = true;}
          }


          /// Repetibilidad
          Repetibilidad = document.getElementsByClassName("CheckboxRepeT")
          if(Repetibilidad.length!=0){
 
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurRepe[0]=="vacío"){
                    document.getElementById("PrimeraT").checked = false;
                  }
                  else {document.getElementById("PrimeraT").checked = true;}
                
                
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurRepe[1]=="vacío"){
                    document.getElementById("SegundaT").checked = false;
                  }
                  else {document.getElementById("SegundaT").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurRepe[2]=="vacío"){
                    document.getElementById("TerceraT").checked = false;
                  }
                  else {document.getElementById("TerceraT").checked = true;}
                  
                  if (resumenMAT[miPosicionResumenMAT(Identificador)].FTurRepe[3]=="vacío"){
                    document.getElementById("NSNCT").checked = false;
                  }
                  else {document.getElementById("NSNCT").checked = true;}
                                                                                     
          } 
          
          
          /// Turista transporte
          TuristaTransporte = document.getElementsByClassName("checkBoxTurTuriTransport")
          if(TuristaTransporte.length!=0){
            
            automatizarUpdateFiltro("20",Identificador)  
          }

          /// BcnEcoTrabajadoresSector
          TrabajadorSector = document.getElementsByClassName("checkBoxBcnEcoTrabajadoresSector")
          if(TrabajadorSector.length!=0){
            
            automatizarUpdateFiltro("21",Identificador)  
          }
          
          /// BcnEcoSituacionLaboral
          SituacionLaboral = document.getElementsByClassName("checkBoxBcnEcoSituacionLaboral")
          if(SituacionLaboral.length!=0){
            
            automatizarUpdateFiltro("22",Identificador)  
          }  
          
          /// BcnEcoPIB
          EcoPIB = document.getElementsByClassName("checkBoxBcnEcoPIB")
          if(EcoPIB.length!=0){
            
            automatizarUpdateFiltro("23",Identificador)  
          }
          
          /// BcnEcoSituacionLaboral
          EcoSalariosSector = document.getElementsByClassName("checkBoxBcnEcoSalariosSector")
          if(EcoSalariosSector.length!=0){
            
            automatizarUpdateFiltro("24",Identificador)  
          }  


          /// Tur Reuniones Número
          TurReunionesNum = document.getElementsByClassName("checkBoxTurRNumReunion")
          if(TurReunionesNum.length!=0){
            
            automatizarUpdateFiltro("25",Identificador)  
          }  
          /// Tur Reuniones visitantes
          TurReunionesVisitas = document.getElementsByClassName("checkBoxTurRAsisReunion")
          if(TurReunionesVisitas.length!=0){
            
            automatizarUpdateFiltro("26",Identificador)  
          }  
          /// Tur Alojamientos Número hoteles y pensiones
          TurAloHPNum = document.getElementsByClassName("checkBoxTurAloNumHP")
          if(TurAloHPNum.length!=0){
            
            automatizarUpdateFiltro("29",Identificador)  
          }  
          /// Tur Alojamientos Plazas hoteles y pensiones
          TurAloHPPlazas = document.getElementsByClassName("checkBoxTurAloPlazasHP")
          if(TurAloHPPlazas.length!=0){
            
            automatizarUpdateFiltro("30",Identificador)  
          }  
          /// Tur Cultural top visitas lugares de interés
          TurCultTopVisitas = document.getElementsByClassName("checkBoxTurCultTop")
          if(TurCultTopVisitas.length!=0){
            
            automatizarUpdateFiltro("31",Identificador)  
          }  

          /// Tur Perfil Nacionalidades
          TurPerfilNacionalidades = document.getElementsByClassName("checkBoxTurPerfilNacionalidad")
          if(TurPerfilNacionalidades.length!=0){
            
            automatizarUpdateFiltro("39",Identificador)  
          }
          /// Bcn Población Edades
          BcnPoblacionEdades = document.getElementsByClassName("checkBoxBcnPobEdades")
          if(BcnPoblacionEdades.length!=0){
            
            automatizarUpdateFiltro("43",Identificador)  
          }

          /// Bcn Población Nacionalidades
          BcnPoblacionNacionalidades = document.getElementsByClassName("checkBoxBcnPobNacionalidad")
          if(BcnPoblacionNacionalidades.length!=0){
            
            automatizarUpdateFiltro("44",Identificador)  
          }

          /// Bcn Población TEST. De momento está en turismo de reuniones
          BcnPoblacionTest = document.getElementsByClassName("checkBoxBcnPobTest")
          if(BcnPoblacionTest.length!=0){
            //alert(" hauria de ser posicio" + miIDgrafico(Identificador))
            var grAuto= miIDgrafico(Identificador)
            automatizarUpdateFiltro(grAuto,Identificador)  
            //automatizarUpdateFiltro("45",Identificador)  
          }



}
  

  function updateSeguimientoUnaLinea(id_vip,RESUMENmat,WORKFRAME,AMBITOGEO,FROMYEAR,UNTILYEAR,PRIMERAVEZ,sort,PORCENTAJE,variacionAnual,{FAeropuerto,FTemperatura,FTurSexo,FTurEdad,FTurGasto,FTurMotivo,FTurAlojamiento,FTurRepe,FTurTransporte,FBcnEcoTrabajadoresSector,FBcnEcoSituacionLaboral,FBcnEcoPIB,FBcnEcoSalariosSector,FTurRNumReunion,FTurRAsisReunion,FTurAloHNumHP,FTurAloHPlazasHP,FTurCultTop,FTurPNacionalidad,FBcnPobEdades,FBcnPobNacion,FBcnPobDistr,FBcnPobTest}){//

        var posicion = miPosicionResumenMAT(id_vip)
        
  
            RESUMENmat[posicion].Idgrafico=graphicId;
            RESUMENmat[posicion].filtro=AMBITOGEO;
            RESUMENmat[posicion].hastaYear=UNTILYEAR;
            RESUMENmat[posicion].desdeYear=FROMYEAR;
            RESUMENmat[posicion].ordenado=sort;
            RESUMENmat[posicion].PrimeraVez=PRIMERAVEZ;
            RESUMENmat[posicion].porcentaje=PORCENTAJE;
            RESUMENmat[posicion].variacionAnual=variacionAnual;

            if (FAeropuerto){
              RESUMENmat[posicion].FAeropuerto=FAeropuerto;  
            }else {RESUMENmat[posicion].FAeropuerto=FAeropuertoIni}  
            if (FTemperatura){
              RESUMENmat[posicion].FTemperatura=FTemperatura;  
            }else {RESUMENmat[posicion].FTemperatura=FTemperaturaIni} 
            if (FTurSexo){
              RESUMENmat[posicion].FTurSexo=FTurSexo;  
            }else {RESUMENmat[posicion].FTurSexo=FTurSexoIni}  
            if (FTurEdad){
              RESUMENmat[posicion].FTurEdad=FTurEdad;  
            }else {RESUMENmat[posicion].FTurEdad=FTurEdadIni}  
            
            if (FTurGasto){
              RESUMENmat[posicion].FTurGasto=FTurGasto;  
            }else {RESUMENmat[posicion].FTurGasto=FTurGastoIni}  
            if (FTurMotivo){
              RESUMENmat[posicion].FTurMotivo=FTurMotivo;  
            }else {RESUMENmat[posicion].FTurMotivo=FTurMotivoIni}  
            if (FTurAlojamiento){
              RESUMENmat[posicion].FTurAlojamiento=FTurAlojamiento;  
            }else {RESUMENmat[posicion].FTurAlojamiento=FTurAlojamientoIni}  

            if (FTurRepe){
              RESUMENmat[posicion].FTurRepe=FTurRepe;  
            }else {RESUMENmat[posicion].FTurRepe=FTurRepeIni}  
            if (FTurTransporte){
              RESUMENmat[posicion].FTurTransporte=FTurTransporte;  
            }else {RESUMENmat[posicion].FTurTransporte=FTurTransporteIni}

            if (FBcnEcoTrabajadoresSector){              
              RESUMENmat[posicion].FBcnEcoTrabajadoresSector=FBcnEcoTrabajadoresSector;  
            }else {RESUMENmat[posicion].FBcnEcoTrabajadoresSector=FBcnEcoTrabajadoresSectorIni}

            if (FBcnEcoSituacionLaboral){              
              RESUMENmat[posicion].FBcnEcoSituacionLaboral=FBcnEcoSituacionLaboral;  
            }else {RESUMENmat[posicion].FBcnEcoSituacionLaboral=FBcnEcoSituacionLaboralIni}
  
            if (FBcnEcoPIB){              
              RESUMENmat[posicion].FBcnEcoPIB=FBcnEcoPIB;  
            }else {RESUMENmat[posicion].FBcnEcoPIB=FBcnEcoPIBIni}

            if (FBcnEcoSalariosSector){              
              RESUMENmat[posicion].FBcnEcoSalariosSector=FBcnEcoSalariosSector;  
            }else {RESUMENmat[posicion].FBcnEcoSalariosSector=FBcnEcoSalariosSectorIni}


            if (FTurRNumReunion){              
              RESUMENmat[posicion].FTurRNumReunion=FTurRNumReunion;  
            }else {RESUMENmat[posicion].FTurRNumReunion=FTurRNumReunionIni}
            
            if (FTurRAsisReunion){              
              RESUMENmat[posicion].FTurRAsisReunion=FTurRAsisReunion;  
            }else {RESUMENmat[posicion].FTurRAsisReunion=FTurRAsisReunionIni}

            if (FTurAloHNumHP){              
              RESUMENmat[posicion].FTurAloHNumHP=FTurAloHNumHP;  
            }else {RESUMENmat[posicion].FTurAloHNumHP=FTurAloHNumHPIni}

            if (FTurAloHPlazasHP){              
              RESUMENmat[posicion].FTurAloHPlazasHP=FTurAloHPlazasHP;  
            }else {RESUMENmat[posicion].FTurAloHPlazasHP=FTurAloHPlazasHPIni}

            if (FTurCultTop){              
              RESUMENmat[posicion].FTurCultTop=FTurCultTop;  
            }else {RESUMENmat[posicion].FTurCultTop=FTurCultTopIni}            

            if (FTurPNacionalidad){
              RESUMENmat[posicion].FTurPNacionalidad=FTurPNacionalidad;  
            }else {RESUMENmat[posicion].FTurPNacionalidad=FTurPNacionalidadIni}            
            
            if (FBcnPobEdades){
              RESUMENmat[posicion].FBcnPobEdades=FBcnPobEdades;  
            }else {RESUMENmat[posicion].FBcnPobEdades=FBcnPobEdadesIni}            

            if (FBcnPobNacion){
              RESUMENmat[posicion].FBcnPobNacion=FBcnPobNacion;  
            }else {RESUMENmat[posicion].FBcnPobNacion=FBcnPobNacionIni}            

            if (FBcnPobDistr){
              RESUMENmat[posicion].FBcnPobDistr=FBcnPobDistr;  
            }else {RESUMENmat[posicion].FBcnPobDistr=FBcnPobDistrIni}            

            if (FBcnPobTest){
              RESUMENmat[posicion].FBcnPobTest=FBcnPobTest;  
            }else {RESUMENmat[posicion].FBcnPobTest=FBcnPobTestIni}            


      return RESUMENmat;
  }


  function iniLineaUpdateSeguimiento(liniaSeguimiento){
    // INICIALIZA LOS VALORES DE UNA DE LAS VENTANAS. Se usa cuando cambio de 4 a 2 ventanas o de
    // 2 a 4 o a 1...
    liniaSeguimiento.Idgrafico = "noG";
    liniaSeguimiento.filtro = ambitoGeoIni; // esto se tendrá que cambiar
    liniaSeguimiento.PrimeraVez=""
    liniaSeguimiento.desdeYear = "2015";
    liniaSeguimiento.hastaYear = "2015";
  
    liniaSeguimiento.ordenado = "NO"
    liniaSeguimiento.porcentaje="NO"
    liniaSeguimiento.variacionAnual="NO"
    liniaSeguimiento.ambitoGeoNuevoFiltro="NO"

    liniaSeguimiento.FAeropuerto=FAeropuertoIni
    liniaSeguimiento.FTemperatura=FTemperaturaIni
    liniaSeguimiento.FTurSexo=FTurSexoIni
    liniaSeguimiento.FTurEdad=FTurEdadIni

    liniaSeguimiento.FTurGasto=FTurGastoIni
    liniaSeguimiento.FTurMotivo=FTurMotivoIni
    liniaSeguimiento.FTurAlojamiento=FTurAlojamientoIni
    liniaSeguimiento.FTurRepe=FTurRepeIni
    liniaSeguimiento.FTurTransporte=FTurTransporteIni

    liniaSeguimiento.FBcnEcoPIB=FBcnEcoPIBIni
    liniaSeguimiento.FBcnEcoTrabajadoresSector=FBcnEcoTrabajadoresSectorIni
    

    liniaSeguimiento.FBcnEcoSalariosSector=FBcnEcoSalariosSectorIni
    liniaSeguimiento.FBcnEcoSituacionLaboral=FBcnEcoSituacionLaboralIni
///   FTurRNumReunion,FTurRAsisReunion,FTurAloHNumHP,FTurAloHPlazasHP,FTurCultTop       
    liniaSeguimiento.FTurRNumReunion=FTurRNumReunionIni
    liniaSeguimiento.FTurRAsisReunion=FTurRAsisReunionIni
    liniaSeguimiento.FTurAloHNumHP=FTurAloHNumHPIni
    liniaSeguimiento.FTurAloHPlazasHP=FTurAloHPlazasHPIni
    liniaSeguimiento.FTurCultTop=FTurCultTopIni
    liniaSeguimiento.FTurPNacionalidad=FTurPNacionalidadIni

    liniaSeguimiento.FBcnPobEdades=FBcnPobEdadesIni
    liniaSeguimiento.FBcnPobNacion=FBcnPobNacionIni
    liniaSeguimiento.FBcnPobDistr=FBcnPobDistrIni

/// test población
    liniaSeguimiento.FBcnPobTest=FBcnPobTestIni


    return liniaSeguimiento  
  }