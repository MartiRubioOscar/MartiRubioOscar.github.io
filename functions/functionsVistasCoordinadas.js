function myFunctionBotonesCuadradosSimple(VentanaActivaAnterior,activateVentana){

  var elementExists41 = document.getElementById("contenedorGr41");
  var elementExists42 = document.getElementById("contenedorGr42");
  var elementExists43 = document.getElementById("contenedorGr43");
  var elementExists44 = document.getElementById("contenedorGr44");
  var elementExists21 = document.getElementById("contenedorGr21");
  var elementExists22 = document.getElementById("contenedorGr22");
  var elementExists11 = document.getElementById("contenedorGr1");
  var salir;
//PARA 4 VENTANAS
  // En la ventana activa debo cargar el filtro que tenga y en resumenMAT.primeraVez="NO"
  //alert("anterior: " + VentanaActivaAnterior + "  activar: " + activateVentana)
  //alert(VentanaActivaAnterior=="ninguna")
  
  if (VentanaActivaAnterior=="ninguna"&&(activateVentana=="1"||activateVentana=="21"||activateVentana=="22"||activateVentana=="41"||activateVentana=="42"||activateVentana=="43"||activateVentana=="44")) {
      //alert("dentro")
      miColorVentanaActiva(activateVentana)
  };
  // desde 41
  if ((VentanaActivaAnterior == "41")&&(activateVentana == "42")){
        if (elementExists42!=null){
          miColorVentanaActiva(activateVentana)
        // cargar el filtro
          filtrar(resumenMAT[4])

          workFrame = "42"; 
          ID_VIP = "gr4_2"; 
  
          CONTROL_primeraVez41 ="NO";
          resumenMAT[4].Seguimiento=workFrame;
          resumenMAT[3].PrimeraVez="NO"
          resumenMAT[4].PrimeraVez="NO"
          loadMenu(resumenMAT[4].Idgrafico)///////////////////
          updateFiltroNavegador(resumenMAT[4].filtro,resumenMAT[4].desdeYear, resumenMAT[4].hastaYear)
          if ((parseInt(resumenMAT[4].hastaYear)-parseInt(resumenMAT[4].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}

          datos = window["graphic" + resumenMAT[4].Idgrafico];
          miColorVentanaActiva(activateVentana)
      }
  }
  if ((VentanaActivaAnterior == "41")&&(activateVentana == "43")){
    //estaba en 41 y activo 43
    filtrar(resumenMAT[5])
    workFrame = "43"; ID_VIP = "gr4_3"; 
  
    CONTROL_primeraVez41 ="NO";
        resumenMAT[5].Seguimiento=workFrame;

        resumenMAT[3].PrimeraVez="NO"
        resumenMAT[5].PrimeraVez="NO"
        loadMenu(resumenMAT[5].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[5].filtro,resumenMAT[5].desdeYear, resumenMAT[5].hastaYear)

        if ((parseInt(resumenMAT[5].hastaYear)-parseInt(resumenMAT[5].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[5].Idgrafico];
        miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "41")&&(activateVentana == "44")){
    //estaba en 41 y activo 44
    filtrar(resumenMAT[6])
    workFrame = 44; ID_VIP = "gr4_4"; 
    CONTROL_primeraVez41 ="NO";

    resumenMAT[6].Seguimiento=workFrame;

        resumenMAT[3].PrimeraVez="NO"
        resumenMAT[6].PrimeraVez="NO"
        loadMenu(resumenMAT[6].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[6].filtro,resumenMAT[6].desdeYear, resumenMAT[6].hastaYear)

        if ((parseInt(resumenMAT[6].hastaYear)-parseInt(resumenMAT[6].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[6].Idgrafico];
        miColorVentanaActiva(activateVentana)
  }

  // desde 42
  if ((VentanaActivaAnterior == "42")&&(activateVentana == "41")){
    filtrar(resumenMAT[3])
    workFrame = 41; 
    ID_VIP = "gr4_1"; 
    
    CONTROL_primeraVez44 ="NO";
        resumenMAT[3].Seguimiento=workFrame;

        resumenMAT[4].PrimeraVez="NO"
        resumenMAT[3].PrimeraVez="NO"
        loadMenu(resumenMAT[3].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[3].filtro,resumenMAT[3].desdeYear, resumenMAT[3].hastaYear)

        if ((parseInt(resumenMAT[3].hastaYear)-parseInt(resumenMAT[3].desdeYear))==0){
            controlEVOLUTION=false
          }
          else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[3].Idgrafico];
        miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "42")&&(activateVentana == "43")){
    filtrar(resumenMAT[5])
    workFrame = "43"; ID_VIP = "gr4_3"; 
    CONTROL_primeraVez42 ="NO";
        resumenMAT[5].Seguimiento=workFrame;
        resumenMAT[4].PrimeraVez="NO"
        resumenMAT[5].PrimeraVez="NO"
        loadMenu(resumenMAT[5].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[5].filtro,resumenMAT[5].desdeYear, resumenMAT[5].hastaYear)

        if ((parseInt(resumenMAT[5].hastaYear)-parseInt(resumenMAT[5].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[5].Idgrafico];
          miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "42")&&(activateVentana == "44")){
    filtrar(resumenMAT[6])
    workFrame = "44"; ID_VIP = "gr4_4"; 
    CONTROL_primeraVez42 ="NO";
        resumenMAT[6].Seguimiento=workFrame;
        resumenMAT[4].PrimeraVez="NO"
        resumenMAT[6].PrimeraVez="NO"
        loadMenu(resumenMAT[6].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[6].filtro,resumenMAT[6].desdeYear, resumenMAT[6].hastaYear)

        if ((parseInt(resumenMAT[6].hastaYear)-parseInt(resumenMAT[6].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[6].Idgrafico];
          miColorVentanaActiva(activateVentana)
  }

  // desde 43
  if ((VentanaActivaAnterior == "43")&&(activateVentana == "41")){
    filtrar(resumenMAT[3])
    workFrame = "41"; ID_VIP = "gr4_1"; 
    CONTROL_primeraVez43 ="NO";
        resumenMAT[3].Seguimiento=workFrame;
        resumenMAT[5].PrimeraVez="NO"
        resumenMAT[3].PrimeraVez="NO"
        loadMenu(resumenMAT[3].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[3].filtro,resumenMAT[3].desdeYear, resumenMAT[3].hastaYear)

        if ((parseInt(resumenMAT[3].hastaYear)-parseInt(resumenMAT[3].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[3].Idgrafico];
          miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "43")&&(activateVentana == "42")){
    filtrar(resumenMAT[4])
    workFrame = "42"; ID_VIP = "gr4_2"; 
    CONTROL_primeraVez43 ="NO";
        resumenMAT[4].Seguimiento=workFrame;
        resumenMAT[5].PrimeraVez="NO"
        resumenMAT[4].PrimeraVez="NO"
        loadMenu(resumenMAT[4].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[4].filtro,resumenMAT[4].desdeYear, resumenMAT[4].hastaYear)

        if ((parseInt(resumenMAT[4].hastaYear)-parseInt(resumenMAT[4].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[4].Idgrafico];
        miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "43")&&(activateVentana == "44")){
    filtrar(resumenMAT[6])
    workFrame = "44"; ID_VIP = "gr4_4"; 
    CONTROL_primeraVez43 ="NO";
        resumenMAT[6].Seguimiento=workFrame;
        resumenMAT[5].PrimeraVez="NO"
        resumenMAT[6].PrimeraVez="NO"
        loadMenu(resumenMAT[6].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[6].filtro,resumenMAT[6].desdeYear, resumenMAT[6].hastaYear)

        if ((parseInt(resumenMAT[6].hastaYear)-parseInt(resumenMAT[6].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[6].Idgrafico];
          miColorVentanaActiva(activateVentana)
  }

  // desde 44
  if ((VentanaActivaAnterior == "44")&&(activateVentana == "41")){
    filtrar(resumenMAT[3])
    workFrame = "41"; ID_VIP = "gr4_1"; 
    CONTROL_primeraVez44 ="NO";
        resumenMAT[3].Seguimiento=workFrame;
        resumenMAT[6].PrimeraVez="NO"
        resumenMAT[3].PrimeraVez="NO"
        loadMenu(resumenMAT[3].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[3].filtro,resumenMAT[3].desdeYear, resumenMAT[3].hastaYear)

        if ((parseInt(resumenMAT[3].hastaYear)-parseInt(resumenMAT[3].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[3].Idgrafico];
        miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "44")&&(activateVentana == "42")){
    filtrar(resumenMAT[4])
    workFrame = "42"; ID_VIP = "gr4_2"; 
    CONTROL_primeraVez44 ="NO";
        resumenMAT[4].Seguimiento=workFrame;
        resumenMAT[6].PrimeraVez="NO"
        resumenMAT[4].PrimeraVez="NO"
        loadMenu(resumenMAT[4].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[4].filtro,resumenMAT[4].desdeYear, resumenMAT[4].hastaYear)

        if ((parseInt(resumenMAT[4].hastaYear)-parseInt(resumenMAT[4].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[4].Idgrafico];
          miColorVentanaActiva(activateVentana)
  }
  if ((VentanaActivaAnterior == "44")&&(activateVentana == "43")){
    filtrar(resumenMAT[5])
    workFrame = "43"; ID_VIP = "gr4_3"; 
    CONTROL_primeraVez44 ="NO";
        resumenMAT[5].Seguimiento=workFrame;
        resumenMAT[6].PrimeraVez="NO"
        resumenMAT[5].PrimeraVez="NO"
        loadMenu(resumenMAT[5].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[5].filtro,resumenMAT[5].desdeYear, resumenMAT[5].hastaYear)

        if ((parseInt(resumenMAT[5].hastaYear)-parseInt(resumenMAT[5].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[5].Idgrafico];
        miColorVentanaActiva(activateVentana)
  }
//PARA 2 VENTANAS
  
  if ((VentanaActivaAnterior == "21")&&(activateVentana == "22")){ // 42 es la 22 también para activateVentana
    activateVentana="22"
    filtrar(resumenMAT[2])
    workFrame = "22"; ID_VIP = "gr_2"; 
    CONTROL_primeraVez21 ="NO";
        resumenMAT[2].Seguimiento=workFrame;
        resumenMAT[1].PrimeraVez="NO"
        resumenMAT[2].PrimeraVez="NO"
        loadMenu(resumenMAT[2].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[2].filtro,resumenMAT[2].desdeYear, resumenMAT[2].hastaYear)

        if ((parseInt(resumenMAT[2].hastaYear)-parseInt(resumenMAT[2].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[2].Idgrafico];
        
        activateVentana="22" 
        miColorVentanaActiva(activateVentana)    
  }
  if ((VentanaActivaAnterior == "22")&&(activateVentana == "21")){ // 41 es la 21 también para activateVentana
    activateVentana="21"
    filtrar(resumenMAT[1])
    workFrame = "21"; ID_VIP = "gr_1"; 
    CONTROL_primeraVez22 ="NO";
        resumenMAT[1].Seguimiento=workFrame;
        resumenMAT[2].PrimeraVez="NO"
        resumenMAT[1].PrimeraVez="NO" 
        loadMenu(resumenMAT[1].Idgrafico)///////////////////
        updateFiltroNavegador(resumenMAT[1].filtro,resumenMAT[1].desdeYear, resumenMAT[1].hastaYear)

        if ((parseInt(resumenMAT[1].hastaYear)-parseInt(resumenMAT[1].desdeYear))==0){
              controlEVOLUTION=false
            }
            else{controlEVOLUTION=true}
        datos = window["graphic" + resumenMAT[1].Idgrafico];       
        activateVentana="21"       
        miColorVentanaActiva(activateVentana) 

  }
  
  // coloco el filtro de distrito como estaba

  if (VentanaActivaAnterior == "ninguna"){//&&(activateVentana == "42"))
        //alert("ninguna ventana anterior")
        loadMenu(resumenMAT[miPosicionResumenMAT_workframe(activateVentana)].Idgrafico)
        //updateFiltroNavegador(resumenMAT[miPosicionResumenMAT_workframe(activateVentana)].filtro,resumenMAT[miPosicionResumenMAT_workframe(activateVentana)].desdeYear, resumenMAT[miPosicionResumenMAT_workframe(activateVentana)].hastaYear)
        //fromYear=resumenMAT[miPosicionResumenMAT_workframe(activateVentana)].desdeYear
        //untilYear=resumenMAT[miPosicionResumenMAT_workframe(activateVentana)].hastaYear
  }

  updateFiltroNavegador(ambitoGeo, fromYear,untilYear)
 
}