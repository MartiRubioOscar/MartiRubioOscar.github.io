function render(datos ){

      //alert(" RENDER test")
 
          DATOS = datos;
          //console.log(DATOS)
        
        //console.log(controlFiltro)
        
        

          // selección: DE MOMENTO PREFIERO CARGAR CADA VEZ YA QUE ES MÁS SENCILLO
          console.log(any)
          /*var DATOSfiltrados = DATOS.filter(function (el) {
              return (el.year === any[0] || el.year === any[1] || el.year === any[2] ||
                el.year === any[3] || el.year === any[4] || el.year === any[5] ||
                el.year === any[6] || el.year === any[7] || el.year === any[8] ||
                el.year === any[9] || el.year === any[10]);
              });*/
          var DATOSfiltrados = DATOS.filter(function (el) {
                return el.year === untilYear
              });
          console.log(DATOSfiltrados)
          DATOSfiltrados = DATOSfiltrados.filter(function (el) {
              return (el.localizacion === ambitoGeo[0] || el.localizacion === ambitoGeo[1] || 
                el.localizacion === ambitoGeo[2] || el.localizacion === ambitoGeo[3] || 
                el.localizacion === ambitoGeo[4] || el.localizacion === ambitoGeo[5] || 
                el.localizacion === ambitoGeo[6] || el.localizacion === ambitoGeo[7] || 
                el.localizacion === ambitoGeo[8] || el.localizacion === ambitoGeo[9] || 
                el.localizacion === ambitoGeo[10] )});
         //console.log(DATOSfiltrados)
         //alert("variable valorAbsolut " + valorAbsolut)
         
         var DATOSfiltradosDEF = DATOSfiltrados;
         /*if (valorAbsolut == "SI"){
          var DATOSfiltradosDEF = DATOSfiltrados.map(function(el){
              return {localizacion: el.localizacion, year: el.year, resultado: el.poblacion}
              });


            //console.log(DATOSfiltradosDEF)
         }
         if (valorAbsolut == "NO"){
            var DATOSfiltradosDEF = DATOSfiltrados.map(function(el){
              return {localizacion: el.localizacion, year: el.year, resultado: el.densidad}
              });
            //console.log(DATOSfiltradosDEF)
          }
         */
        
         //alert(SORT)
         if (SORT == "SI"){
            console.log("dentro del if")
            DATOSfiltradosDEF = DATOSfiltradosDEF.sort(function(a, b){
              return a.resultado-b.resultado
              })
            //console.log(DATOSfiltrados)
          }


         /*var MAXIMO2 = d3.max(DATOSfiltrados, function(d) {
            return d.poblacion; //References first value in each sub-array
          });*/
         /*var MAXIMO2 = d3.max(["1","55","9","3","4"]);
         console.log(MAXIMO2)*/
         if (activate == "SI"){
            //console.log(DATOSfiltradosDEF)
            //datos = DATOSfiltradosDEF;
            //console.log(datos)
            //console.log(ambitoGeo)
            renderPoblacion(DATOSfiltradosDEF, ambitoGeo)
            
          }

    }  //fin render