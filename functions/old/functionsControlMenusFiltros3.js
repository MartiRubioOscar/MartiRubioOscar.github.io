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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="07"; datos = graphic07;loadMenu("07");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="08";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic08;loadMenu("08");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="09";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic09;loadMenu("09");
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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="10"; datos = graphic10;loadMenu("10");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="11";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic11;loadMenu("11");
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

  function myFunctionWDesplegableClima(){
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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="12"; datos = graphic12;loadMenu("12");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="13";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic13;loadMenu("13");
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

  function myFunctionWDesplegablePerfilTurista(){
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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="14"; datos = graphic14;loadMenu("14");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="15";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic15;loadMenu("15");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="16";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic16;loadMenu("16");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==4)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="17";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic17;loadMenu("17");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==5)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="18";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic18;loadMenu("18");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };                                                                  

        if ((posicionNum)==6)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="19";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic19;loadMenu("19");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==7)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="20";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic20;loadMenu("20");
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

  function myFunctionWDesplegableEconomia(){
    //ID_VIP = miVentanaActiva() // cambiará el valor de ID_VIP en caso que sean vistas coordinadas
    //workFrame = miWorkFrame_fromIDVIP(ID_VIP) // workFrame acorde al nuevo ID_VIP

    var inputElements = document.getElementsByClassName('desp');  
    var posicionNum;
    
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
    
           }
       }
        if ((posicionNum)==1)   {
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="22"; 
                                //datos = graphic10;
                                loadMenu("21");
                                //updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="22";
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                //datos = graphic22;
                                loadMenu("22");
                                //updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
      
        
        /*if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}*/
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
            else{
              controlEVOLUTION=true; 
              if (resumenFiltros(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico).variacionAnual=="SI"){ MenuVariacionAnual()}; 
              activar="si"
            }      
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

function myFunctionCheckBoxTemperaturas(){

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

  var filtroTempertatura = [];
  if (document.getElementById("Media").checked == true){filtroTempertatura[0]="media"}else{filtroTempertatura[0]="vacío"}
  if (document.getElementById("Minima").checked == true){filtroTempertatura[1]="minima"}else{filtroTempertatura[1]="vacío"}
  if (document.getElementById("Maxima").checked == true){filtroTempertatura[2]="maxima"}else{filtroTempertatura[2]="vacío"}
//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTemperatura = filtroTempertatura}
if (Identificador=="gr4_2"){resumenMAT[4].FTemperatura = filtroTempertatura}
if (Identificador=="gr4_3"){resumenMAT[5].FTemperatura = filtroTempertatura}
if (Identificador=="gr4_4"){resumenMAT[6].FTemperatura = filtroTempertatura}

if (Identificador=="gr_1"){resumenMAT[1].FTemperatura = filtroTempertatura}
if (Identificador=="gr_2"){resumenMAT[2].FTemperatura = filtroTempertatura}

if (Identificador=="gr1"){resumenMAT[0].FTemperatura = filtroTempertatura}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura)
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

function myFunctionCheckBoxSexo(){

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

  var filtroSexo = [];
  if (document.getElementById("Hombres").checked == true){filtroSexo[0]="hombres"}else{filtroSexo[0]="vacío"}
  if (document.getElementById("Mujeres").checked == true){filtroSexo[1]="mujeres"}else{filtroSexo[1]="vacío"}
//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTurSexo = filtroSexo}
if (Identificador=="gr4_2"){resumenMAT[4].FTurSexo = filtroSexo}
if (Identificador=="gr4_3"){resumenMAT[5].FTurSexo = filtroSexo}
if (Identificador=="gr4_4"){resumenMAT[6].FTurSexo = filtroSexo}

if (Identificador=="gr_1"){resumenMAT[1].FTurSexo = filtroSexo}
if (Identificador=="gr_2"){resumenMAT[2].FTurSexo = filtroSexo}

if (Identificador=="gr1"){resumenMAT[0].FTurSexo = filtroSexo}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo)
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

function myFunctionCheckBoxEdadTurista(){

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

  var filtroEdadT = [];
  if (document.getElementById("rangoEdadT1").checked == true){filtroEdadT[0]="de 15 a 17"}else{filtroEdadT[0]="vacío"}
  if (document.getElementById("rangoEdadT2").checked == true){filtroEdadT[1]="de 18 a 24"}else{filtroEdadT[1]="vacío"}
  if (document.getElementById("rangoEdadT3").checked == true){filtroEdadT[2]="de 25 a 34"}else{filtroEdadT[2]="vacío"}
  if (document.getElementById("rangoEdadT4").checked == true){filtroEdadT[3]="de 35 a 44"}else{filtroEdadT[3]="vacío"}
  if (document.getElementById("rangoEdadT5").checked == true){filtroEdadT[4]="de 45 a 54"}else{filtroEdadT[4]="vacío"}
  if (document.getElementById("rangoEdadT6").checked == true){filtroEdadT[5]="55 o mas"}else{filtroEdadT[5]="vacío"}

//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTurEdad = filtroEdadT}
if (Identificador=="gr4_2"){resumenMAT[4].FTurEdad = filtroEdadT}
if (Identificador=="gr4_3"){resumenMAT[5].FTurEdad = filtroEdadT}
if (Identificador=="gr4_4"){resumenMAT[6].FTurEdad = filtroEdadT}

if (Identificador=="gr_1"){resumenMAT[1].FTurEdad = filtroEdadT}
if (Identificador=="gr_2"){resumenMAT[2].FTurEdad = filtroEdadT}

if (Identificador=="gr1"){resumenMAT[0].FTurEdad = filtroEdadT}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo, resumenMAT[3].FTurEdad)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo, resumenMAT[4].FTurEdad)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo, resumenMAT[5].FTurEdad)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo, resumenMAT[6].FTurEdad)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo, resumenMAT[1].FTurEdad)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo, resumenMAT[2].FTurEdad)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo, resumenMAT[0].FTurEdad)
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


function myFunctionCheckBoxGasto(){

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

  var filtroGasto = [];

  if (document.getElementById("Transporte").checked == true){filtroGasto[0]="transporte"}else{filtroGasto[0]="vacío"}
  if (document.getElementById("Alojamiento").checked == true){filtroGasto[1]="alojamiento"}else{filtroGasto[1]="vacío"}
  if (document.getElementById("Estancia").checked == true){filtroGasto[2]="estancia"}else{filtroGasto[2]="vacío"}

if (Identificador=="gr4_1"){resumenMAT[3].FTurGasto = filtroGasto}
if (Identificador=="gr4_2"){resumenMAT[4].FTurGasto = filtroGasto}
if (Identificador=="gr4_3"){resumenMAT[5].FTurGasto = filtroGasto}
if (Identificador=="gr4_4"){resumenMAT[6].FTurGasto = filtroGasto}

if (Identificador=="gr_1"){resumenMAT[1].FTurGasto = filtroGasto}
if (Identificador=="gr_2"){resumenMAT[2].FTurGasto = filtroGasto}

if (Identificador=="gr1"){resumenMAT[0].FTurGasto = filtroGasto}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo,resumenMAT[3].FTurEdad,resumenMAT[3].FTurGasto)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo,resumenMAT[4].FTurEdad,resumenMAT[4].FTurGasto)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo,resumenMAT[5].FTurEdad,resumenMAT[5].FTurGasto)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo,resumenMAT[6].FTurEdad,resumenMAT[6].FTurGasto)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo,resumenMAT[1].FTurEdad,resumenMAT[1].FTurGasto)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo,resumenMAT[2].FTurEdad,resumenMAT[2].FTurGasto)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo,resumenMAT[0].FTurEdad,resumenMAT[0].FTurGasto)
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

function myFunctionCheckBoxMotivos(){

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

  var filtroMotivo = [];
  if (document.getElementById("Vacacional").checked == true){filtroMotivo[0]="Vacacional-Ocio"}else{filtroMotivo[0]="vacío"}
  if (document.getElementById("Profesional").checked == true){filtroMotivo[1]="Profesional"}else{filtroMotivo[1]="vacío"}
  if (document.getElementById("Personal").checked == true){filtroMotivo[2]="Personal y otros"}else{filtroMotivo[2]="vacío"}

//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTurMotivo = filtroMotivo}
if (Identificador=="gr4_2"){resumenMAT[4].FTurMotivo = filtroMotivo}
if (Identificador=="gr4_3"){resumenMAT[5].FTurMotivo = filtroMotivo}
if (Identificador=="gr4_4"){resumenMAT[6].FTurMotivo = filtroMotivo}

if (Identificador=="gr_1"){resumenMAT[1].FTurMotivo = filtroMotivo}
if (Identificador=="gr_2"){resumenMAT[2].FTurMotivo = filtroMotivo}

if (Identificador=="gr1"){resumenMAT[0].FTurMotivo = filtroMotivo}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo,resumenMAT[3].FTurEdad,resumenMAT[3].FTurGasto,resumenMAT[3].FTurMotivo)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo,resumenMAT[4].FTurEdad,resumenMAT[4].FTurGasto,resumenMAT[4].FTurMotivo)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo,resumenMAT[5].FTurEdad,resumenMAT[5].FTurGasto,resumenMAT[5].FTurMotivo)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo,resumenMAT[6].FTurEdad,resumenMAT[6].FTurGasto,resumenMAT[6].FTurMotivo)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo,resumenMAT[1].FTurEdad,resumenMAT[1].FTurGasto,resumenMAT[1].FTurMotivo)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo,resumenMAT[2].FTurEdad,resumenMAT[2].FTurGasto,resumenMAT[2].FTurMotivo)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo,resumenMAT[0].FTurEdad,resumenMAT[0].FTurGasto,resumenMAT[0].FTurMotivo)
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

function myFunctionCheckBoxAlojamientoPT(){

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

  var filtroAlojamiento = [];
  if (document.getElementById("HotelesPT").checked == true){filtroAlojamiento[0]="Hoteles"}else{filtroAlojamiento[0]="vacío"}
  if (document.getElementById("PensionesPT").checked == true){filtroAlojamiento[1]="Pensiones y hostales"}else{filtroAlojamiento[1]="vacío"}
//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTurAlojamiento = filtroAlojamiento}
if (Identificador=="gr4_2"){resumenMAT[4].FTurAlojamiento = filtroAlojamiento}
if (Identificador=="gr4_3"){resumenMAT[5].FTurAlojamiento = filtroAlojamiento}
if (Identificador=="gr4_4"){resumenMAT[6].FTurAlojamiento = filtroAlojamiento}

if (Identificador=="gr_1"){resumenMAT[1].FTurAlojamiento = filtroAlojamiento}
if (Identificador=="gr_2"){resumenMAT[2].FTurAlojamiento = filtroAlojamiento}

if (Identificador=="gr1"){resumenMAT[0].FTurAlojamiento = filtroAlojamiento}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo,resumenMAT[3].FTurEdad,resumenMAT[3].FTurGasto,resumenMAT[3].FTurMotivo,resumenMAT[3].FTurAlojamiento)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo,resumenMAT[4].FTurEdad,resumenMAT[4].FTurGasto,resumenMAT[4].FTurMotivo,resumenMAT[4].FTurAlojamiento)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo,resumenMAT[5].FTurEdad,resumenMAT[5].FTurGasto,resumenMAT[5].FTurMotivo,resumenMAT[5].FTurAlojamiento)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo,resumenMAT[6].FTurEdad,resumenMAT[6].FTurGasto,resumenMAT[6].FTurMotivo,resumenMAT[6].FTurAlojamiento)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo,resumenMAT[1].FTurEdad,resumenMAT[1].FTurGasto,resumenMAT[1].FTurMotivo,resumenMAT[1].FTurAlojamiento)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo,resumenMAT[2].FTurEdad,resumenMAT[2].FTurGasto,resumenMAT[2].FTurMotivo,resumenMAT[2].FTurAlojamiento)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo,resumenMAT[0].FTurEdad,resumenMAT[0].FTurGasto,resumenMAT[0].FTurMotivo,resumenMAT[0].FTurAlojamiento)
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




function myFunctionCheckBoxRepeT(){

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

  var filtroRepeT = [];
  if (document.getElementById("PrimeraT").checked == true){filtroRepeT[0]="primeraVisita"}else{filtroRepeT[0]="vacío"}
  if (document.getElementById("SegundaT").checked == true){filtroRepeT[1]="segundaVisita"}else{filtroRepeT[1]="vacío"}
  if (document.getElementById("TerceraT").checked == true){filtroRepeT[2]="teceraOmas"}else{filtroRepeT[2]="vacío"}
  if (document.getElementById("NSNCT").checked == true){filtroRepeT[3]="NSNC"}else{filtroRepeT[3]="vacío"}

//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTurRepe = filtroRepeT}
if (Identificador=="gr4_2"){resumenMAT[4].FTurRepe = filtroRepeT}
if (Identificador=="gr4_3"){resumenMAT[5].FTurRepe = filtroRepeT}
if (Identificador=="gr4_4"){resumenMAT[6].FTurRepe = filtroRepeT}

if (Identificador=="gr_1"){resumenMAT[1].FTurRepe = filtroRepeT}
if (Identificador=="gr_2"){resumenMAT[2].FTurRepe = filtroRepeT}

if (Identificador=="gr1"){resumenMAT[0].FTurRepe = filtroRepeT}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo, resumenMAT[3].FTurEdad,resumenMAT[3].FTurGasto,resumenMAT[3].FTurMotivo,resumenMAT[3].FTurAlojamiento,resumenMAT[3].FTurRepe)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo, resumenMAT[4].FTurEdad,resumenMAT[4].FTurGasto,resumenMAT[4].FTurMotivo,resumenMAT[4].FTurAlojamiento,resumenMAT[4].FTurRepe)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo, resumenMAT[5].FTurEdad,resumenMAT[5].FTurGasto,resumenMAT[5].FTurMotivo,resumenMAT[5].FTurAlojamiento,resumenMAT[5].FTurRepe)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo, resumenMAT[6].FTurEdad,resumenMAT[6].FTurGasto,resumenMAT[6].FTurMotivo,resumenMAT[6].FTurAlojamiento,resumenMAT[6].FTurRepe)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo, resumenMAT[1].FTurEdad,resumenMAT[1].FTurGasto,resumenMAT[1].FTurMotivo,resumenMAT[1].FTurAlojamiento,resumenMAT[1].FTurRepe)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo, resumenMAT[2].FTurEdad,resumenMAT[2].FTurGasto,resumenMAT[2].FTurMotivo,resumenMAT[2].FTurAlojamiento,resumenMAT[2].FTurRepe)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo, resumenMAT[0].FTurEdad,resumenMAT[0].FTurGasto,resumenMAT[0].FTurMotivo,resumenMAT[0].FTurAlojamiento,resumenMAT[0].FTurRepe)
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

function myFunctionCheckBoxTransporteT(){

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

  var filtroTransporteT = [];
  if (document.getElementById("AvionT").checked == true){filtroTransporteT[0]="avion"}else{filtroTransporteT[0]="vacío"}
  if (document.getElementById("CocheT").checked == true){filtroTransporteT[1]="coche"}else{filtroTransporteT[1]="vacío"}
  if (document.getElementById("FerrocarrilT").checked == true){filtroTransporteT[2]="ferrocarril"}else{filtroTransporteT[2]="vacío"}
  if (document.getElementById("AutocarT").checked == true){filtroTransporteT[3]="autocar"}else{filtroTransporteT[3]="vacío"}
  if (document.getElementById("OtrosT").checked == true){filtroTransporteT[4]="otros"}else{filtroTransporteT[4]="vacío"}
  

//alert("filtroAeropuerto " + filtroAeropuerto)
if (Identificador=="gr4_1"){resumenMAT[3].FTurTransporte = filtroTransporteT}
if (Identificador=="gr4_2"){resumenMAT[4].FTurTransporte = filtroTransporteT}
if (Identificador=="gr4_3"){resumenMAT[5].FTurTransporte = filtroTransporteT}
if (Identificador=="gr4_4"){resumenMAT[6].FTurTransporte = filtroTransporteT}

if (Identificador=="gr_1"){resumenMAT[1].FTurTransporte = filtroTransporteT}
if (Identificador=="gr_2"){resumenMAT[2].FTurTransporte = filtroTransporteT}

if (Identificador=="gr1"){resumenMAT[0].FTurTransporte = filtroTransporteT}


  if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"
    
    if (Identificador=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto,resumenMAT[3].FTemperatura,resumenMAT[3].FTurSexo, resumenMAT[3].FTurEdad,resumenMAT[3].FTurGasto,resumenMAT[3].FTurMotivo,resumenMAT[3].FTurAlojamiento,resumenMAT[3].FTurRepe,resumenMAT[3].FTurTransporte)

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto,resumenMAT[4].FTemperatura,resumenMAT[4].FTurSexo, resumenMAT[4].FTurEdad,resumenMAT[4].FTurGasto,resumenMAT[4].FTurMotivo,resumenMAT[4].FTurAlojamiento,resumenMAT[4].FTurRepe,resumenMAT[4].FTurTransporte)
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto,resumenMAT[5].FTemperatura,resumenMAT[5].FTurSexo, resumenMAT[5].FTurEdad,resumenMAT[5].FTurGasto,resumenMAT[5].FTurMotivo,resumenMAT[5].FTurAlojamiento,resumenMAT[5].FTurRepe,resumenMAT[5].FTurTransporte)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto,resumenMAT[6].FTemperatura,resumenMAT[6].FTurSexo, resumenMAT[6].FTurEdad,resumenMAT[6].FTurGasto,resumenMAT[6].FTurMotivo,resumenMAT[6].FTurAlojamiento,resumenMAT[6].FTurRepe,resumenMAT[6].FTurTransporte)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto,resumenMAT[1].FTemperatura,resumenMAT[1].FTurSexo, resumenMAT[1].FTurEdad,resumenMAT[1].FTurGasto,resumenMAT[1].FTurMotivo,resumenMAT[1].FTurAlojamiento,resumenMAT[1].FTurRepe,resumenMAT[1].FTurTransporte)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto,resumenMAT[2].FTemperatura,resumenMAT[2].FTurSexo, resumenMAT[2].FTurEdad,resumenMAT[2].FTurGasto,resumenMAT[2].FTurMotivo,resumenMAT[2].FTurAlojamiento,resumenMAT[2].FTurRepe,resumenMAT[2].FTurTransporte)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto,resumenMAT[0].FTemperatura,resumenMAT[0].FTurSexo, resumenMAT[0].FTurEdad,resumenMAT[0].FTurGasto,resumenMAT[0].FTurMotivo,resumenMAT[0].FTurAlojamiento,resumenMAT[0].FTurRepe,resumenMAT[0].FTurTransporte)
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



function myFunctionCheckBoxBcnEcoTrabajadoresSector(){
  myFunctionCheckBoxAutomatizar("21")
}

function myFunctionCheckBoxBcnEcoSituacionLaboral(){
  myFunctionCheckBoxAutomatizar("22")
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

 