  function myFunctionWDesplegablePoblacion(){
    //alert("número de dataset  : " + numeroDataSet)
    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    //console.log(inputElements)
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
               //break;
           }
       }
       //alert("Posicion " + posicionDesplegable + " del desplegable");
       //alert(ID_VIP)
       //alert(miPosicionResumenMAT(ID_VIP))
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="01"; datos = graphic01;loadMenu("01");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="04";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic04;loadMenu("04");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       // if ((posicionNum)==3) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="04"; datos = graphic04};
       console.log(datos)
       seleccionWindow([],[],CONTROL_primeraVez,workFrame);
      //render() 
    }
 function myFunctionWDesplegableTurista(){
    //alert("número de dataset  : " + numeroDataSet)
    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    //console.log(inputElements)
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
               //break;
           }
         }
           //alert("Posicion " + posicionDesplegable + " del desplegable");
       //alert(ID_VIP)
       //alert(miPosicionResumenMAT(ID_VIP))
        if ((posicionNum)==1) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="03"; 
                              resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic03;loadMenu("03");
                              
                              untilYear=2015;
                              fromYear=2015;
                              resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear=2015;
                              resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear=2015;
                              controlEVOLUTION=false
                              console.log(datos)};
       // if ((posicionNum)==3) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="04"; datos = graphic04};
       seleccionWindow([],[],CONTROL_primeraVez,workFrame);

    }

function myFunctionPorcentaje(controlPorcentaje){

  percentage = controlPorcentaje;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje = percentage
  var numeroDataSet = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
  datos = misDatos(numeroDataSet)

  seleccionWindow([],[],CONTROL_primeraVez,workFrame);
}

function myFunctionHasta(){
  //d3.selectAll("g").remove()
  var checkedValue = [];
  var inputElements = document.getElementsByClassName("hasta"); 
  //var fromElements = document.getElementsByClassName("desde"); 
  var pos;
for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].selected){
      checkedValue = inputElements[i].value;
      pos=i;
    }
  } 
  //fromElements[i].selected = true;
  document.getElementById("desde" + checkedValue).selected = true;
   
   any = [checkedValue,"pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe"];
   var identificadorGr = miIDgrafico(ID_VIP)
   untilYear=checkedValue
   fromYear=checkedValue
   resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear = fromYear;
   resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear = untilYear;
   datos = misDatos(identificadorGr)
   controlEVOLUTION=false;
   seleccionWindow([],[],CONTROL_primeraVez,workFrame);

}
function myFunctionDesde(){
  //d3.selectAll("g").remove()
  var checkedValue = [];
  var inputElements = document.getElementsByClassName("desde"); 
  //var fromElements = document.getElementsByClassName("desde"); 
  var pos;
for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].selected){
      checkedValue = inputElements[i].value;
      pos=i;
    }
  } 
  //fromElements[i].selected = true;
  //document.getElementById("desde" + checkedValue).selected = true;
   
   any = [checkedValue,"pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe"];
   var identificadorGr = miIDgrafico(ID_VIP)
   fromYear=checkedValue
   resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear = fromYear;
   datos = misDatos(identificadorGr)
   controlEVOLUTION=true;
   var activar;
   if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear==resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
      {
        controlEVOLUTION=false
        activar="si"
      }else{
            if(resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear>resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
              {alert("rango de fechas NO posible");activar="no"}
            else{controlEVOLUTION=true;activar="si"}      
          }
  if (activar=="si"){seleccionWindow([],[],CONTROL_primeraVez,workFrame);}
   

}

function myFunctionCheckBox(){
  //d3.selectAll("g").remove()
  //alert(ID_VIP)
  var ambitoGeo1 = [];
  if (document.getElementById("Distr00").checked == true){ambitoGeo1[0]="Barcelona"}else{ambitoGeo1[0]="vacío"}
  if (document.getElementById("Distr01").checked == true){ambitoGeo1[1]="Ciutat Vella"}else{ambitoGeo1[1]="vacío"}
  if (document.getElementById("Distr02").checked == true){ambitoGeo1[2]="Eixample"}else{ambitoGeo1[2]="vacío"}
  if (document.getElementById("Distr03").checked == true){ambitoGeo1[3]="Sants-Montjuïc"}else{ambitoGeo1[3]="vacío"}
  if (document.getElementById("Distr04").checked == true){ambitoGeo1[4]="Les Corts"}else{ambitoGeo1[4]="vacío"}
  if (document.getElementById("Distr05").checked == true){ambitoGeo1[5]="Sarrià-Sant Gervasi"}else{ambitoGeo1[5]="vacío"}
  if (document.getElementById("Distr06").checked == true){ambitoGeo1[6]="Gràcia"}else{ambitoGeo1[6]="vacío"}
  if (document.getElementById("Distr07").checked == true){ambitoGeo1[7]="Horta-Guinardó"}else{ambitoGeo1[7]="vacío"}
  if (document.getElementById("Distr08").checked == true){ambitoGeo1[8]="Nou Barris"}else{ambitoGeo1[8]="vacío"}
  if (document.getElementById("Distr09").checked == true){ambitoGeo1[9]="Sant Andreu"}else{ambitoGeo1[9]="vacío"}
  if (document.getElementById("Distr10").checked == true){ambitoGeo1[10]="Sant Martí"}else{ambitoGeo1[10]="vacío"}
  ambitoGeo = ambitoGeo1; /// ambitoGeo es una variable global

  if (CONTROL_primeraVez =="SI"){
    //alert("DENTRO DE CONTROL PRIMERA VEZ")
    var PrimeraVez = "NO"
    console.log(resumenMAT)
    if (ID_VIP=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico

        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (ID_VIP=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (ID_VIP=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje)
        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (ID_VIP=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje)
        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (ID_VIP=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje)
        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (ID_VIP=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (ID_VIP=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje)
        datos = window["graphic" + resumenMAT[0].Idgrafico];
      }
    
  }
  seleccionWindow([],[],CONTROL_primeraVez,workFrame);
}

function myFunctionSort(controlSort){

  SORT = controlSort;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].ordenado = SORT
  var numeroDataSet = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
  datos = misDatos(numeroDataSet)

  seleccionWindow([],[],CONTROL_primeraVez,workFrame);
}
function myFunctionRadio(controlRadio){
  valorAbsolut = controlRadio;
  seleccionWindow([],[],CONTROL_primeraVez,workFrame);
}
function myFunctionRadioMenu(controlRadio){
  var activateVentana = controlRadio.toString();
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

  // desde 41
  if ((ID_VIP == "gr4_1")&&(activateVentana == "42")){
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
          //alert(parseInt(resumenMAT[4].hastaYear)-parseInt(resumenMAT[4].desdeYear))

          datos = window["graphic" + resumenMAT[4].Idgrafico];
          miColorVentanaActiva(activateVentana)
      }
  }
  if ((ID_VIP == "gr4_1")&&(activateVentana == "43")){
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
  if ((ID_VIP == "gr4_1")&&(activateVentana == "44")){
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
  if ((ID_VIP == "gr4_2")&&(activateVentana == "41")){
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
  if ((ID_VIP == "gr4_2")&&(activateVentana == "43")){
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
  if ((ID_VIP == "gr4_2")&&(activateVentana == "44")){
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
  if ((ID_VIP == "gr4_3")&&(activateVentana == "41")){
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
  if ((ID_VIP == "gr4_3")&&(activateVentana == "42")){
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
  if ((ID_VIP == "gr4_3")&&(activateVentana == "44")){
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
  if ((ID_VIP == "gr4_4")&&(activateVentana == "41")){
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
  if ((ID_VIP == "gr4_4")&&(activateVentana == "42")){
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
  if ((ID_VIP == "gr4_4")&&(activateVentana == "43")){
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
  
  if ((ID_VIP == "gr_1")&&(activateVentana == "42")){ // 42 es la 22 también para activateVentana
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
        miColorVentanaActiva(activateVentana)    
        activateVentana="42" 
  }
  if ((ID_VIP == "gr_2")&&(activateVentana == "41")){ // 41 es la 21 también para activateVentana
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
        miColorVentanaActiva(activateVentana) 
        activateVentana="41"       
  }
  

  // coloco el filtro de distrito como estaba
  updateFiltroNavegador(ambitoGeo, fromYear,untilYear)
 
  seleccionWindow([],[],CONTROL_primeraVez,workFrame);
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

 function myFunctionDesplegable(){ // ESTA SERVIRÁ PARA EL DESPLEGABLE (tal vez)
    var inputElements = document.getElementByClassName('desp');  
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
           }
       }
       console.log("Posicion " + posicionDesplegable + " del desplegable");
       render() 
    }
function myFunctionEdadesCheckBox(){
  //d3.selectAll("g").remove()
  var numTicks = 0; 
  var rangosEdades_aux =[];
  if (document.getElementById("rangoEdades1").checked == true){numTicks = numTicks +1;
          rangosEdades_aux[0]="de 0 a 20"}else{rangosEdades_aux[0]="vacío"}
  if (document.getElementById("rangoEdades2").checked == true){numTicks = numTicks +1;
          rangosEdades_aux[1]="de 20-39"}else{rangosEdades_aux[1]="vacío"}
  if (document.getElementById("rangoEdades3").checked == true){numTicks = numTicks +1;
          rangosEdades_aux[2]="de 40-59"}else{rangosEdades_aux[2]="vacío"}
  if (document.getElementById("rangoEdades4").checked == true){numTicks = numTicks +1;
          rangosEdades_aux[3]="de 60-79"}else{rangosEdades_aux[3]="vacío"}
 if (document.getElementById("rangoEdades5").checked == true){numTicks = numTicks +1;
          rangosEdades_aux[4]="más de 80"}else{rangosEdades_aux[4]="vacío"}
  //console.log("total ticks " + numTicks)
  //console.log(rangosEdades_aux)
  rangosEdades = rangosEdades_aux;

  render();
}
