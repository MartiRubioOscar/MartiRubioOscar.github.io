function render(){

      alert(" RENDER")
      //console.log(" DENTRO DE RENDER POBLACIÓN")

  //var any = ["2016", "2015","2014","2013","2012","2011","2010","2009","2008","2007","2006"]
  //var any = ["2016"]
 // console.log("estoy dentro de render")

  /*var ambitoGeo = ["Barcelona", "Ciutat Vella","Eixample", "Sants-Montjuïc", "Sant Martí", 
                  "Les Corts", "Sarrià-Sant Gervasi", "Gràcia", "Horta-Guinardó",
                  "Nou Barris", "Sant Andreu", "Sant Martí"]
  var ambitoGeo = ["Ciutat Vella","Eixample", "Sants-Montjuïc", "Sant Martí", 
                  "Les Corts", "Sarrià-Sant Gervasi", "Gràcia", "Horta-Guinardó",
                  "Nou Barris", "Sant Andreu", "Sant Martí"]*/
  //var ambitoGeo = ["Eixample", "Sant Andreu", "Sarrià-Sant Gervasi", "Gràcia"]
  //console.log(ambitoGeo.length)
  if (posicionDesplegable==1) {
    alert("dentro desplegable")
    d3.csv("poblacionHabitantesCD.csv", function (error, ventas) {
      if (error) {
          window.alert("No ha sido posible recuperar los datos.");
          console.log(error);
      } else {
          var datos = ventas;
          //renderSort(datos)
          DATOS = datos;
          //console.log(DATOS)
          

          // selección: DE MOMENTO PREFIERO CARGAR CADA VEZ YA QUE ES MÁS SENCILLO
          //console.log(any)
          var DATOSfiltrados = DATOS.filter(function (el) {
              return (el.year === any[0] || el.year === any[1] || el.year === any[2] ||
                el.year === any[3] || el.year === any[4] || el.year === any[5] ||
                el.year === any[6] || el.year === any[7] || el.year === any[8] ||
                el.year === any[9] || el.year === any[10]);
              });
          DATOSfiltrados = DATOSfiltrados.filter(function (el) {
              return (el.localizacion === ambitoGeo[0] || el.localizacion === ambitoGeo[1] || 
                el.localizacion === ambitoGeo[2] || el.localizacion === ambitoGeo[3] || 
                el.localizacion === ambitoGeo[4] || el.localizacion === ambitoGeo[5] || 
                el.localizacion === ambitoGeo[6] || el.localizacion === ambitoGeo[7] || 
                el.localizacion === ambitoGeo[8] || el.localizacion === ambitoGeo[9] || 
                el.localizacion === ambitoGeo[10] )});
         //console.log(DATOSfiltrados)
         //alert("variable valorAbsolut " + valorAbsolut)
         if (valorAbsolut == "SI"){
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
            /*var arreglado = arreglo.map( item => { 
  return { nombreUsuario: item.nombre , apellidoUsuario : item.apellido }; 
});*/
        

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
            renderPoblacion(DATOSfiltradosDEF, ambitoGeo)
          }

        }
    }); 
   
  }
  else 
    if (posicionDesplegable==2){
        console.log(rangosEdades); //alert("vamos bien   " + posicionDesplegable);
        d3.csv("poblacionHabitantesEDAD.csv", function (error, ventas) {
            if (error) {
                window.alert("No ha sido posible recuperar los datos.");
                console.log(error);
            } else {
                    var datos = ventas;
                    //renderSort(datos)
                    DATOS = datos;
                    console.log(DATOS)
                 
            
                var DATOSfiltrados = DATOS.filter(function (el) {
                      return (el.year === any[0] || el.year === any[1] || el.year === any[2] ||
                        el.year === any[3] || el.year === any[4] || el.year === any[5] ||
                        el.year === any[6] || el.year === any[7] || el.year === any[8] ||
                        el.year === any[9] || el.year === any[10]);
                      });
                  
                  console.log(ambitoGeo)

                  DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                      return (el.localizacion === ambitoGeo[0] || el.localizacion === ambitoGeo[1] || 
                        el.localizacion === ambitoGeo[2] || el.localizacion === ambitoGeo[3] || 
                        el.localizacion === ambitoGeo[4] || el.localizacion === ambitoGeo[5] || 
                        el.localizacion === ambitoGeo[6] || el.localizacion === ambitoGeo[7] || 
                        el.localizacion === ambitoGeo[8] || el.localizacion === ambitoGeo[9] || 
                        el.localizacion === ambitoGeo[10] )});
                  console.log(rangosEdades)                  
                  DATOSfiltrados = DATOSfiltrados.filter(function (el) {
                      return (el.rango === rangosEdades[0] || el.rango === rangosEdades[1] || 
                        el.rango === rangosEdades[2] || el.rango === rangosEdades[3] || 
                        el.rango === rangosEdades[4])});
                  console.log(DATOSfiltrados)   
                  
                  if (valorAbsolut == "SI"){
                    var DATOSfiltradosDEF = DATOSfiltrados.map(function(el){
                        return {localizacion: el.localizacion, year: el.year, resultado: el.poblacion}
                        });
                      //console.log(DATOSfiltradosDEF)
                   }
                  if (valorAbsolut == "NO"){
                      var DATOSfiltradosDEF = DATOSfiltrados.map(function(el){
                        return {localizacion: el.localizacion, year: el.year, resultado: el.porcentaje}
                        });
                      //console.log(DATOSfiltradosDEF)
                    }
                  if (activate == "SI"){
                      //console.log(DATOSfiltradosDEF)
                      renderEdad(DATOSfiltradosDEF, ambitoGeo)}

                   
              }
          });
    } //fin desplegable 2




    else {alert("Debería cargar   " + posicionDesplegable)}
}  //fin render