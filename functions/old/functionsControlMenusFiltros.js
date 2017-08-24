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
       if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="06";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic06;loadMenu("06");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       
       // if ((posicionNum)==3) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="04"; datos = graphic04};
        console.log(datos)
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}

       //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
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
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}
      // seleccionWindow4([],[],CONTROL_primeraVez,workFrame);

    }
/* function myFunctionWDesplegableInfraestructuras(){
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
        if ((posicionNum)==1) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="10"; datos = graphic10;loadMenu("10");
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
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}
      // seleccionWindow4([],[],CONTROL_primeraVez,workFrame);

    }*/

  function myFunctionWDesplegableVivienda(){
    
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
       
       // if ((posicionNum)==3) {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="04"; datos = graphic04};
        console.log(datos)
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}

       //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
      //render() 
    }

  function myFunctionWDesplegableInfraestructuras(){
    
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
      
        console.log(datos)
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}

       //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
      //render() 
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
    
  //alert ("colores : " + colores)


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
  //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
}

function myFunctionHasta(){
  //d3.selectAll("g").remove()

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
    
  //alert ("colores : " + colores)


  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]

////////////////// FIN de miro si estoy en ventanas coordinadas

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
    

    d3.select("#variacionAnualOff").remove()
    d3.select("#variacionAnualOn").remove()
    

    // cargar datos que no sean variación anual.
        if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
          //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
          //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico = misDatosVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
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
   //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);

}
function myFunctionDesde(){
  //d3.selectAll("g").remove()

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
  //alert ("colores : " + colores)


  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]
////////////////// FIN de miro si estoy en ventanas coordinadas


  //alert("colores: " + colores)
  //alert("ID_VIP "+ ID_VIP + ", workFrame " + workFrame)
  
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
   
   //alert("ID_VIP: " + ID_VIP)
   //alert("workFrame: " + workFrame)
   //alert("posicion en resumenMAT " + miPosicionResumenMAT(ID_VIP))
   //alert("valor copiado en desdeYear " + resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear)
   
   console.log(miPosicionResumenMAT(ID_VIP))
   console.log(resumenMAT)


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
          //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico = misDatosVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
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
  //  seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
  }
   

}

function myFunctionCheckBox(){
  console.log(resumenMAT)
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
  //alert("desde from " + fromYear + " hasta until" + untilYear)
  //alert("Posición 41 " + resumenMAT[3].desdeYear + "  " + resumenMAT[3].hastaYear)
  //alert("Posición 42 " + resumenMAT[4].desdeYear + "  " + resumenMAT[4].hastaYear)

  if (CONTROL_primeraVez =="SI"){
    //alert("DENTRO DE CONTROL PRIMERA VEZ")
    var PrimeraVez = "NO"
    console.log(resumenMAT)
    if (ID_VIP=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        console.log(resumenMAT[3])
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual)

        console.log(resumenMAT[3])
        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (ID_VIP=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico
        console.log(resumenMAT[4])
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual)
        console.log(resumenMAT[4])
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (ID_VIP=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (ID_VIP=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (ID_VIP=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (ID_VIP=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (ID_VIP=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual)
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
  //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
  console.log(resumenMAT)
}

function myFunctionCheckBoxTipoVuelo(){
  var element = document.getElementsByClassName("greenMandon")
  var element = document.getElementById("window41").className
    alert(element=="red")

  var filtroAeropuerto = [];
  if (document.getElementById("AeropuertoTotal").checked == true){filtroAeropuerto[0]="Total"}else{filtroAeropuerto[0]="vacío"}
  if (document.getElementById("AeropuertoNacional").checked == true){filtroAeropuerto[1]="Nacional"}else{filtroAeropuerto[1]="vacío"}
  if (document.getElementById("AeropuertoInternacional").checked == true){filtroAeropuerto[2]="Internacional"}else{filtroAeropuerto[2]="vacío"}
alert("filtroAeropuerto " + filtroAeropuerto)
if (ID_VIP=="gr4_1"){
  resumenMAT[3].FAeropuerto = filtroAeropuerto
}
if (ID_VIP=="gr4_2"){
  resumenMAT[4].FAeropuerto = filtroAeropuerto
}
if (ID_VIP=="gr4_3"){
  resumenMAT[5].FAeropuerto = filtroAeropuerto
}
if (ID_VIP=="gr4_4"){
  resumenMAT[6].FAeropuerto = filtroAeropuerto
}

if (ID_VIP=="gr_1"){
  resumenMAT[1].FAeropuerto = filtroAeropuerto
}
if (ID_VIP=="gr_2"){
  resumenMAT[2].FAeropuerto = filtroAeropuerto
}

if (ID_VIP=="gr1"){
  resumenMAT[0].FAeropuerto = filtroAeropuerto
}


  if (CONTROL_primeraVez =="SI"){
    //alert("DENTRO DE CONTROL PRIMERA VEZ")
    var PrimeraVez = "NO"
    console.log(resumenMAT)
    if (ID_VIP=="gr4_1"){///ambitoGeo41=ambitoGeo;
        graphicId = resumenMAT[3].Idgrafico
        console.log(resumenMAT[3])
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,resumenMAT[3].FAeropuerto)

        console.log(resumenMAT[3])
        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (ID_VIP=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico
        console.log(resumenMAT[4])
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,resumenMAT[4].FAeropuerto)
        console.log(resumenMAT[4])
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (ID_VIP=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,resumenMAT[5].FAeropuerto)

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (ID_VIP=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,resumenMAT[6].FAeropuerto)

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (ID_VIP=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,resumenMAT[1].FAeropuerto)

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (ID_VIP=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,resumenMAT[2].FAeropuerto)
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (ID_VIP=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        //updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,fromYear,untilYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual)
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,resumenMAT[0].FAeropuerto)
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
//seleccionWindow4([],[],CONTROL_primeraVez,workFrame);


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
    
  //alert ("colores : " + colores)


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
  //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);

}

/*function myFunctionVariacionAnual(controlVarAnual){
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
  }else{colores[6] = d3.select("#window11")[0][0].className}  
  //alert ("colores : " + colores)


  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]
////////////////// FIN de miro si estoy en ventanas coordinadas
  VARIACIONANUAL = controlVarAnual;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual = VARIACIONANUAL
  if (VARIACIONANUAL=="SI"){
    switch(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico) {
    case "01":
        //alert("switch 01")
        resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="06"
        break;
    default:
        alert("DEFAULT VARIACIÓN ANUAL")
    }

  }
  else{
    switch(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico) {
    case "06":
        resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="01"
        break;
    default:
        alert("DEFAULT VARIACIÓN ANUAL")
    }

  }
  var numeroDataSet = resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico
  //alert("numeroDataSet" + numeroDataSet)
  console.log(datos)
  datos = misDatos(numeroDataSet)

  console.log(datos)

          if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="1"){activar3("gr1")}


}*/


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
    
  //alert ("colores : " + colores)


  var res = ordenfiltradoVistasCoordinadas(ID_VIP,colores)
  ID_VIP = res[0]
  workFrame = res[1]
  //alert("colores: " + colores)
  //alert("ID_VIP "+ ID_VIP + ", workFrame " + workFrame)




  //alert(ID_VIP)
  //alert(workFrame)
  SORT = controlSort;
  resumenMAT[miPosicionResumenMAT(ID_VIP)].ordenado = SORT
  //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].ordenado)
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

  //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
}
function myFunctionRadio(controlRadio){
  valorAbsolut = controlRadio;
          if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="1"){activar3("gr1")}

  //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
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
    workFrame = "44"; ID_VIP = "gr4_4"; 
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
    workFrame = "41"; 
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
         if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
          if (workFrame=="1"){activar3("gr1")}
  //seleccionWindow4([],[],CONTROL_primeraVez,workFrame);
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
