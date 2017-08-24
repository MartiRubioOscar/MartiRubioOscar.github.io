  function myFunctionWDesplegablePoblacion(){
    
    ID_VIP = miVentanaActiva() // cambiará el valor de ID_VIP en caso que sean vistas coordinadas
    workFrame = miWorkFrame_fromIDVIP(ID_VIP) // workFrame acorde al nuevo ID_VIP

    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
           }
       }

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
       if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="06";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic06;loadMenu("06");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       
        
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}

    }
 function myFunctionWDesplegableTurista(){
    ID_VIP = miVentanaActiva() // cambiará el valor de ID_VIP en caso que sean vistas coordinadas
    workFrame = miWorkFrame_fromIDVIP(ID_VIP) // workFrame acorde al nuevo ID_VIP

    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
           }
         }

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
                              };
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}
    }


  function myFunctionWDesplegableVivienda(){
    ID_VIP = miVentanaActiva() // cambiará el valor de ID_VIP en caso que sean vistas coordinadas
    workFrame = miWorkFrame_fromIDVIP(ID_VIP) // workFrame acorde al nuevo ID_VIP


    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
    
           }
       }
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="07"; datos = graphic01;loadMenu("07");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="08";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic04;loadMenu("08");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="09";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic06;loadMenu("09");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}
    }

  function myFunctionWDesplegableInfraestructuras(){
    ID_VIP = miVentanaActiva() // cambiará el valor de ID_VIP en caso que sean vistas coordinadas
    workFrame = miWorkFrame_fromIDVIP(ID_VIP) // workFrame acorde al nuevo ID_VIP

    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
    
           }
       }
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="10"; datos = graphic01;loadMenu("10");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="11";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic04;loadMenu("11");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
      
        
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}
    }


function myFunctionPorcentaje(controlPorcentaje){
  
////////////////// miro si estoy en ventanas coordinadas
  var colores = [] 
  if (document.getElementById("gr4_1")==null){
    colores[0]= "no existe";colores[1]= "no existe"
    colores[2]= "no existe";colores[3]= "no existe"
  }else{  colores[0] = d3.select("#window41")[0][0].className
  colores[1] = d3.select("#window42")[0][0].className
  colores[2] = d3.select("#window43")[0][0].className
  colores[3] = d3.select("#window44")[0][0].className
  }
  if (document.getElementById("gr_1")==null){
    colores[4]= "no existe";colores[5]= "no existe"
  }else{colores[4] = d3.select("#window21")[0][0].className
  colores[5] = d3.select("#window22")[0][0].className
  }
  if (document.getElementById("gr1")==null){colores[6]= "no existe"
  }else{colores[6] = "no existe"} // pq NO HAY BOTÓN DE CONTROL EN LAYOUT 1
    
  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]
  ////////////////// FIN  de miro si estoy en ventanas coordinadas
  

  percentage = controlPorcentaje;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje = percentage
  var numeroDataSet = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
  datos = misDatos(numeroDataSet)

        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}  
}

function myFunctionHasta(){
   ////////////////// miro si estoy en ventanas coordinadas
   var colores = []
  
  
  if (document.getElementById("gr4_1")==null){
    colores[0]= "no existe";colores[1]= "no existe"
    colores[2]= "no existe";colores[3]= "no existe"
  }else{  colores[0] = d3.select("#window41")[0][0].className
  colores[1] = d3.select("#window42")[0][0].className
  colores[2] = d3.select("#window43")[0][0].className
  colores[3] = d3.select("#window44")[0][0].className
  }
  if (document.getElementById("gr_1")==null){
    colores[4]= "no existe";colores[5]= "no existe"
  }else{colores[4] = d3.select("#window21")[0][0].className
  colores[5] = d3.select("#window22")[0][0].className
  }
  if (document.getElementById("gr1")==null){colores[6]= "no existe"
  }else{colores[6] = "no existe"} // pq NO HAY BOTÓN DE CONTROL EN LAYOUT 1

  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]

////////////////// FIN de miro si estoy en ventanas coordinadas

  var checkedValue = [];
  var inputElements = document.getElementsByClassName("hasta"); 
  var pos;
for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].selected){
      checkedValue = inputElements[i].value;
      pos=i;
    }
  } 
  document.getElementById("desde" + checkedValue).selected = true;
   
    any = [checkedValue,"pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe","pepe"];
    var identificadorGr = miIDgrafico(ID_VIP)
    untilYear=checkedValue
    fromYear=checkedValue
    resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear = fromYear;
    resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear = untilYear;
    datos = misDatos(identificadorGr)
    controlEVOLUTION=false;
    

    d3.select("#variacionAnualOff").remove()
    d3.select("#variacionAnualOn").remove()
    

    // cargar datos que no sean variación anual.
        if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){

          datos = misDatos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
          resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual="NO"
          VARIACIONANUAL = resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual 
        }
    

        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}   
}
function myFunctionDesde(){

  ////////////////// miro si estoy en ventanas coordinadas
  var colores = []
  
  
  if (document.getElementById("gr4_1")==null){
    colores[0]= "no existe";colores[1]= "no existe"
    colores[2]= "no existe";colores[3]= "no existe"
  }else{  colores[0] = d3.select("#window41")[0][0].className
  colores[1] = d3.select("#window42")[0][0].className
  colores[2] = d3.select("#window43")[0][0].className
  colores[3] = d3.select("#window44")[0][0].className
  }
  if (document.getElementById("gr_1")==null){
    colores[4]= "no existe";colores[5]= "no existe"
  }else{colores[4] = d3.select("#window21")[0][0].className
  colores[5] = d3.select("#window22")[0][0].className
  }
  if (document.getElementById("gr1")==null){colores[6]= "no existe"
  }else{colores[6] = "no existe"}  

  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]
////////////////// FIN de miro si estoy en ventanas coordinadas


  var checkedValue = [];
  var inputElements = document.getElementsByClassName("desde"); 
  var pos;
for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].selected){
      checkedValue = inputElements[i].value;
      pos=i;
    }
  } 

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
        d3.select("#variacionAnualOff").remove()
        d3.select("#variacionAnualOn").remove()
        activar="si"
        // cargar datos que no sean variación anual.
        if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
          datos = misDatos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
          resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual="NO"
          VARIACIONANUAL = resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual 
        }

      }else{
            if(resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear>resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
              {alert("rango de fechas NO posible");activar="no"}
            else{controlEVOLUTION=true; MenuVariacionAnual(); activar="si"}      
          }

  if (activar=="si"){
          if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="1"){activar3("gr1")}
  }
   

}

function myFunctionCheckBox(){

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
    var PrimeraVez = "NO"
    
    if (ID_VIP=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (ID_VIP=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual)

        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (ID_VIP=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (ID_VIP=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (ID_VIP=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (ID_VIP=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (ID_VIP=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual)
        datos = window["graphic" + resumenMAT[0].Idgrafico];
      }
    
  }
          if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="1"){activar3("gr1")}

}

function myFunctionCheckBoxTipoVuelo(){

  // Para que funcione cuando es master
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
  
  

  // fin para que funcione cuando es master

  var filtroAeropuerto = [];
  if (document.getElementById("AeropuertoTotal").checked == true){filtroAeropuerto[0]="Total"}else{filtroAeropuerto[0]="vacío"}
  if (document.getElementById("AeropuertoNacional").checked == true){filtroAeropuerto[1]="Nacional"}else{filtroAeropuerto[1]="vacío"}
  if (document.getElementById("AeropuertoInternacional").checked == true){filtroAeropuerto[2]="Internacional"}else{filtroAeropuerto[2]="vacío"}
//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FAeropuerto = filtroAeropuerto}
if (Identificador=="gr4_2"){resumenMAT[4].FAeropuerto = filtroAeropuerto}
if (Identificador=="gr4_3"){resumenMAT[5].FAeropuerto = filtroAeropuerto}
if (Identificador=="gr4_4"){resumenMAT[6].FAeropuerto = filtroAeropuerto}

if (Identificador=="gr_1"){resumenMAT[1].FAeropuerto = filtroAeropuerto}
if (Identificador=="gr_2"){resumenMAT[2].FAeropuerto = filtroAeropuerto}

if (Identificador=="gr1"){resumenMAT[0].FAeropuerto = filtroAeropuerto}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto)
        datos = window["graphic" + resumenMAT[0].Idgrafico];
      }
    
  }

  if (workFrame=="41"||workFrame=="42"||
      workFrame=="43"||workFrame=="44"){
      seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
    }
  if (workFrame=="21"||workFrame=="22"){
      seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
    }
  if (workFrame=="1"){activar3("gr1")}

}

function myFunctionVariacionAnual(controlVarAnual){
////////////////// miro si estoy en ventanas coordinadas
  var colores = [] 
  if (document.getElementById("gr4_1")==null){
    colores[0]= "no existe";colores[1]= "no existe"
    colores[2]= "no existe";colores[3]= "no existe"
  }else{  colores[0] = d3.select("#window41")[0][0].className
  colores[1] = d3.select("#window42")[0][0].className
  colores[2] = d3.select("#window43")[0][0].className
  colores[3] = d3.select("#window44")[0][0].className
  }
  if (document.getElementById("gr_1")==null){
    colores[4]= "no existe";colores[5]= "no existe"
  }else{colores[4] = d3.select("#window21")[0][0].className
  colores[5] = d3.select("#window22")[0][0].className
  }
  if (document.getElementById("gr1")==null){colores[6]= "no existe"
  }else{colores[6] = "no existe"} // pq NO HAY BOTÓN DE CONTROL EN LAYOUT 1
    


  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]
  ////////////////// FIN  de miro si estoy en ventanas coordinadas
  

  VarAnual = controlVarAnual;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual = VarAnual
  var numeroDataSet = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
  datos = misDatos(numeroDataSet)

        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}  

}

function myFunctionSort(controlSort){
  var colores = []
  
  
  if (document.getElementById("gr4_1")==null){
    colores[0]= "no existe";colores[1]= "no existe"
    colores[2]= "no existe";colores[3]= "no existe"
  }else{  colores[0] = d3.select("#window41")[0][0].className
  colores[1] = d3.select("#window42")[0][0].className
  colores[2] = d3.select("#window43")[0][0].className
  colores[3] = d3.select("#window44")[0][0].className
  }
  if (document.getElementById("gr_1")==null){
    colores[4]= "no existe";colores[5]= "no existe"
  }else{colores[4] = d3.select("#window21")[0][0].className
  colores[5] = d3.select("#window22")[0][0].className
  }
  if (document.getElementById("gr1")==null){colores[6]= "no existe"
  }else{colores[6] = "no existe"} // pq NO HAY BOTÓN DE CONTROL EN LAYOUT 1

  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]

  SORT = controlSort;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].ordenado = SORT
  var numeroDataSet = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
  datos = misDatos(numeroDataSet)

          if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="1"){activar3("gr1")}

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

 