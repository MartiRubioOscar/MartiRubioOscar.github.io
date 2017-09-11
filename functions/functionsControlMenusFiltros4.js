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

        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="45"; datos = graphic01;loadMenu("45");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)

                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="48";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic48;loadMenu("48");
                                /*
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="04";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic04;loadMenu("04");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
                              };
       if ((posicionNum)==3)   {loadMenu("43");
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="43";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Barcelona"

                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic43;
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
       
       if ((posicionNum)==4)   {loadMenu("44")
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="44";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Barcelona"
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic44;
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
function myFunctionWDesplegablePoblacionDistrito(){
    ID_VIP = miVentanaActiva() // cambiará el valor de ID_VIP en caso que sean vistas coordinadas
    workFrame = miWorkFrame_fromIDVIP(ID_VIP) // workFrame acorde al nuevo ID_VIP
    
    //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
    var inputElements = document.getElementsByClassName('desp2');  
    var posicionNum;
    
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].selected){
        posicionDesplegable = inputElements[i].value;
        posicionNum = i+1 // posición del desplegable
    
           }
       }
        if ((posicionNum)==1) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Barcelona"
                                //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                /*updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
                              };
        if ((posicionNum)==2) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Ciutat Vella"
                                ///resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                /*updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
                              };
        if ((posicionNum)==3) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Eixample"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==4) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Sants-Montjuïc"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==5) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Les Corts"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };                                                                                          
        if ((posicionNum)==6) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Sarrià-Sant Gervasi"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==7) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Gràcia"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==8) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Horta-Guinardó"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==9) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Nou Barris"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==10) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Sant Andreu"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
                              };
        if ((posicionNum)==11) {
                                
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].FBcnPobDistr ="Sant Martí"
                                /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; datos = graphic02;loadMenu("02");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/          
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
        if ((posicionNum)==2) {
                               
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="03"; 
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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="49";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic49;loadMenu("49");
                                
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                                /*  
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="07"; datos = graphic07;loadMenu("07");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="50";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic50;loadMenu("50");
                                
                                //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)

                                  /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="08";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic08;loadMenu("08");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
                              };
       if ((posicionNum)==3)   {  resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="51";
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic51;loadMenu("51");
                                
                                  //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2015" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                  //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                                /*
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="09";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic09;loadMenu("09");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
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
        if ((posicionNum)==3)   {
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="47";
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic47;loadMenu("47");
                                
                                  if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2015" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                  if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                  updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                                  /*resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="03";
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic03;loadMenu("03");
                                  updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
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
        if ((posicionNum)==8)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="39";

                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic39;loadMenu("39");
                                console.log(datos)

                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2009"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2009";fromYear="2009"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" ){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

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
        if ((posicionNum)==1)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="21"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic21;
                                loadMenu("21");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="22";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic22;
                                loadMenu("22");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==3)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="23";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic23;
                                loadMenu("23");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==4)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="24";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic24;
                                loadMenu("24");
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


  function myFunctionWDesplegableTurAlojamiento(){
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
        if ((posicionNum)==1)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="29"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic29;
                                loadMenu("29");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="30"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic30;
                                loadMenu("30");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="46";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic46;loadMenu("46");
                                
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2012" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2012";fromYear="2012"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                                /*
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="02"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2012" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2012";fromYear="2012"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}
                                

                                datos = graphic02;
                                loadMenu("02");

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)*/
                              };
        if ((posicionNum)==4)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="27"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic27;
                                loadMenu("27");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };        
        if ((posicionNum)==5)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="28"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic28;
                                loadMenu("28");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };  
        if ((posicionNum)==6)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="40"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic40;
                                loadMenu("40");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };                                                                                        
        if ((posicionNum)==7)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="41"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic41;
                                loadMenu("41");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              }; 
        if ((posicionNum)==8)   {
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="42"; 
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; 
                                datos = graphic42;
                                loadMenu("42");
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

  function myFunctionWDesplegableTurReuniones(){
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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="25"; datos = graphic12;loadMenu("25");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="26";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic13;loadMenu("26");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="38";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic38;loadMenu("38");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        /*if ((posicionNum)==4)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="45";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic45;loadMenu("45");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==5)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="46";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic46;loadMenu("46");
                                
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2012" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2012";fromYear="2012"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==6)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="47";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic47;loadMenu("47");
                                
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2015" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==7)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="48";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic48;loadMenu("48");
                                
                                

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==8)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="49";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic49;loadMenu("49");
                                
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
          if ((posicionNum)==9)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="50";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic50;loadMenu("50");
                                
                                //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
          if ((posicionNum)==10)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="51";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="SI"; datos = graphic51;loadMenu("51");
                                
                                //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear < "2015" ||resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear == "2016"){resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear="2015";fromYear="2015"}
                                //if (resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear > "2015" || resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear<"2012"){resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear="2015";untilYear="2015"}

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };*/
        
        if (workFrame=="41"||workFrame=="42"||
              workFrame=="43"||workFrame=="44"){
              seleccionWindow4([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="21"||workFrame=="22"){
              seleccionWindow2([], [],CONTROL_primeraVez,workFrame) 
            }
        if (workFrame=="1"){activar3("gr1")}
    }

function myFunctionWDesplegableTurCultura(){
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
        if ((posicionNum)==1)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="31"; datos = graphic31;loadMenu("31");
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==2)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="32";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic32;loadMenu("32");
                                //renderBARRAS_test ("32",datos,"gr4_1")//,NOMCONTENEDOR,COLORES)
                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==3)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="33";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic33;loadMenu("33");
                                //renderBARRAS_test ("33",datos,"gr4_1")//,NOMCONTENEDOR,COLORES)

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };                              
        if ((posicionNum)==4)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="34";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic34;loadMenu("34");
                                //renderBARRAS_test ("33",datos,"gr4_1")//,NOMCONTENEDOR,COLORES)

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };                              

        if ((posicionNum)==5)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="35";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic35;loadMenu("35");
                                //renderBARRAS_test ("33",datos,"gr4_1")//,NOMCONTENEDOR,COLORES)

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==6)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="36";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic36;loadMenu("36");
                                //renderBARRAS_test ("33",datos,"gr4_1")//,NOMCONTENEDOR,COLORES)

                                updateFiltroNavegador(resumenMAT[miPosicionResumenMAT(ID_VIP)].filtro,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].desdeYear,
                                  resumenMAT[miPosicionResumenMAT(ID_VIP)].hastaYear)
                              };
        if ((posicionNum)==7)   {resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico="37";
                                resumenMAT[miPosicionResumenMAT(ID_VIP)].porcentaje="NO"; datos = graphic37;loadMenu("37");
                                //renderBARRAS_test ("33",datos,"gr4_1")//,NOMCONTENEDOR,COLORES)

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

        if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="10" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="11" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="12" ||
            //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="13" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="40" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="41" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="42") {
          // para que aparezca el menú de VA en datasets mensuales
            MenuVariacionAnual()
              //alert("dentro " + resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
                
        }

        if (miExisteVariacionAnual(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)=="SI"){
          //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
          //alert(resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual)
          if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico!="10" &
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico!="11" &
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico!="12" &
            //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="13" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico!="40" &
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico!="41" &
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico!="42") {
          
            resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual="NO"      
          }
          datos = misDatos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
          
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
        //alert("iguales")
        if (resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="10" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="11" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="12" ||
            //resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="13" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="40" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="41" ||
            resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico=="42") {
            MenuVariacionAnual()
            activar="si"
            //alert("VA " + resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual)
            VARIACIONANUAL = resumenMAT[miPosicionResumenMAT(ID_VIP)].variacionAnual 
            datos = misDatos(resumenMAT[miPosicionResumenMAT(ID_VIP)].Idgrafico)
                
        }
        else{
            //alert("no es mensual")
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
        
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (ID_VIP=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{})

        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (ID_VIP=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (ID_VIP=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (ID_VIP=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (ID_VIP=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (ID_VIP=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(ID_VIP,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{})
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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FAeropuerto:resumenMAT[3].FAeropuerto})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FAeropuerto:resumenMAT[4].FAeropuerto})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FAeropuerto:resumenMAT[5].FAeropuerto})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FAeropuerto:resumenMAT[6].FAeropuerto})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FAeropuerto:resumenMAT[1].FAeropuerto})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FAeropuerto:resumenMAT[2].FAeropuerto})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FAeropuerto:resumenMAT[0].FAeropuerto})
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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTemperatura:resumenMAT[3].FTemperatura})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTemperatura:resumenMAT[4].FTemperatura})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTemperatura:resumenMAT[5].FTemperatura})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTemperatura:resumenMAT[6].FTemperatura})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTemperatura:resumenMAT[1].FTemperatura})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTemperatura:resumenMAT[2].FTemperatura})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTemperatura:resumenMAT[0].FTemperatura})
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

/*function myFunctionCheckBoxSexo(){

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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTURSEXO:resumenMAT[3].FTurSexo})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTURSEXO:resumenMAT[4].FTurSexo})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTURSEXO:resumenMAT[5].FTurSexo})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTURSEXO:resumenMAT[6].FTurSexo})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTURSEXO:resumenMAT[1].FTurSexo})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTURSEXO:resumenMAT[2].FTurSexo})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTURSEXO:resumenMAT[0].FTurSexo})
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

}*/

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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTUREDAD:resumenMAT[3].FTurEdad})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTUREDAD:resumenMAT[4].FTurEdad})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTUREDAD:resumenMAT[5].FTurEdad})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTUREDAD:resumenMAT[6].FTurEdad})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTUREDAD:resumenMAT[1].FTurEdad})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTUREDAD:resumenMAT[2].FTurEdad})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTUREDAD:resumenMAT[0].FTurEdad})
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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTURGASTO:resumenMAT[3].FTurGasto})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTURGASTO:resumenMAT[4].FTurGasto})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTURGASTO:resumenMAT[5].FTurGasto})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTURGASTO:resumenMAT[6].FTurGasto})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTURGASTO:resumenMAT[1].FTurGasto})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTURGASTO:resumenMAT[2].FTurGasto})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTURGASTO:resumenMAT[0].FTurGasto})
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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTURMOTIVO:resumenMAT[3].FTurMotivo})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTURMOTIVO:resumenMAT[4].FTurMotivo})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTURMOTIVO:resumenMAT[5].FTurMotivo})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTURMOTIVO:resumenMAT[6].FTurMotivo})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTURMOTIVO:resumenMAT[1].FTurMotivo})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTURMOTIVO:resumenMAT[2].FTurMotivo})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTURMOTIVO:resumenMAT[0].FTurMotivo})
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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTURALOJAMIENTO:resumenMAT[3].FTurAlojamiento})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTURALOJAMIENTO:resumenMAT[4].FTurAlojamiento})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTURALOJAMIENTO:resumenMAT[5].FTurAlojamiento})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTURALOJAMIENTO:resumenMAT[6].FTurAlojamiento})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTURALOJAMIENTO:resumenMAT[1].FTurAlojamiento})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTURALOJAMIENTO:resumenMAT[2].FTurAlojamiento})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTURALOJAMIENTO:resumenMAT[0].FTurAlojamiento})
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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTURREPE:resumenMAT[3].FTurRepe})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTURREPE:resumenMAT[4].FTurRepe})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTURREPE:resumenMAT[5].FTurRepe})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTURREPE:resumenMAT[6].FTurRepe})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTURREPE:resumenMAT[1].FTurRepe})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTURREPE:resumenMAT[2].FTurRepe})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTURREPE:resumenMAT[0].FTurRepe})
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

/*function myFunctionCheckBoxTransporteT(){

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
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,{FTURTRANSPORTE:resumenMAT[3].FTurTransporte})

        datos = window["graphic" + resumenMAT[3].Idgrafico];
      }
    if (Identificador=="gr4_2"){///ambitoGeo42=ambitoGeo;
        graphicId = resumenMAT[4].Idgrafico

        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,{FTURTRANSPORTE:resumenMAT[4].FTurTransporte})
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){///ambitoGeo43=ambitoGeo;
        graphicId = resumenMAT[5].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,{FTURTRANSPORTE:resumenMAT[5].FTurTransporte})

        datos = window["graphic" + resumenMAT[5].Idgrafico];
      }
    if (Identificador=="gr4_4"){///ambitoGeo44=ambitoGeo;
        graphicId = resumenMAT[6].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,{FTURTRANSPORTE:resumenMAT[6].FTurTransporte})

        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }
    if (Identificador=="gr_1"){///ambitoGeo21=ambitoGeo;
        graphicId = resumenMAT[1].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,{FTURTRANSPORTE:resumenMAT[1].FTurTransporte})

        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){///ambitoGeo22=ambitoGeo;
        graphicId = resumenMAT[2].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,{FTURTRANSPORTE:resumenMAT[2].FTurTransporte})
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }
    if (Identificador=="gr1"){///ambitoGeo11=ambitoGeo;
        graphicId = resumenMAT[0].Idgrafico
        updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeo,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,{FTURTRANSPORTE:resumenMAT[0].FTurTransporte})
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

}*/


function myFunctionCheckBoxBcnInfAero(){
  myFunctionCheckBoxAutomatizar("11")
}
function myFunctionCheckBoxBcnClimaTemp(){
  myFunctionCheckBoxAutomatizar("12")
}

function myFunctionCheckBoxTurTuriGenero(){
  myFunctionCheckBoxAutomatizar("14")
}
function myFunctionCheckBoxTurTuriEdad(){
  myFunctionCheckBoxAutomatizar("15")
}
function myFunctionCheckBoxTurTuriGasto(){
  myFunctionCheckBoxAutomatizar("16")
}
function myFunctionCheckBoxTurTuriMotivo(){
  myFunctionCheckBoxAutomatizar("17")
}
function myFunctionCheckBoxTurTuriDiasAlo(){
  myFunctionCheckBoxAutomatizar("18")
}



function myFunctionCheckBoxTurTuriRepe(){
  myFunctionCheckBoxAutomatizar("19")
}

function myFunctionCheckBoxTurTuriTransport(){
  myFunctionCheckBoxAutomatizar("20")
}

function myFunctionCheckBoxBcnEcoTrabajadoresSector(){
  myFunctionCheckBoxAutomatizar("21")
}

function myFunctionCheckBoxBcnEcoSituacionLaboral(){
  myFunctionCheckBoxAutomatizar("22")
}

function myFunctionCheckBoxBcnEcoPIB(){
  myFunctionCheckBoxAutomatizar("23")
}

function myFunctionCheckBoxBcnEcoSalariosSector(){
  myFunctionCheckBoxAutomatizar("24")
}


function myFunctionCheckBoxTurRNumReunion(){
  myFunctionCheckBoxAutomatizar("25")
}
function myFunctionCheckBoxTurRAsisReunion(){
  myFunctionCheckBoxAutomatizar("26")
}



function myFunctionCheckBoxTurAloNumHP(){
  myFunctionCheckBoxAutomatizar("29")
}
function myFunctionCheckBoxTurAloPlazasHP(){
  myFunctionCheckBoxAutomatizar("30")
}
function myFunctionCheckBoxTurCultTop(){
  myFunctionCheckBoxAutomatizar("31")
}

function myFunctionCheckBoxTurPerfilNacionalidad(){
  myFunctionCheckBoxAutomatizar("39")
}

function myFunctionCheckBoxBcnPobEdades(){
  myFunctionCheckBoxAutomatizar("43")
}
function myFunctionCheckBoxBcnPobNacionalidad(){
  myFunctionCheckBoxAutomatizar("44")
}
function myFunctionCheckBoxBcnPobTest(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("45")
}
function myFunctionCheckBoxTurAloPlazasDistrTest(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("46")
}
function myFunctionCheckBoxBcnSuperficie(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("47")
}
function myFunctionCheckBoxBcnPobDensidadTest(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("48")
}
function myFunctionCheckBoxBcnVivNuevaTest(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("49")
}
function myFunctionCheckBoxBcnVivSegundaManoTest(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("50")
}
function myFunctionCheckBoxBcnVivAlquilerTest(){ /////////test ambitoGeo
  //alert("dentro myFunctionCheckBoxBcnPobTest 1899 fichero:ControlMenuFiltros")
  myFunctionCheckBoxAutomatizar("51")
}


function myFunctionVariacionAnual(controlVarAnual){
  //alert(controlVarAnual)
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
  //console.log(resumenMAT)
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

 