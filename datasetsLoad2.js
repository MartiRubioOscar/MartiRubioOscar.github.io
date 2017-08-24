function load(){ // <-E

	//CARGA POBLACIÓN HABITANTES
	//////////////////////////////////
	//////////////////////////////////
        	d3.csv("data/POBLACION.CSV", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 01.");
		          console.log(error);
		      } else {

		          //datosIni = 
		          graphic01 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.poblacion,absoluto:el.poblacion,porcentaje:el.porcentaje,variacionAnual:el.variacionAnualPoblacion}
		              });
		      }
			})

    //CARGA PLAZAS DE HOTEL
	//////////////////////////////////
	//////////////////////////////////    	

        	d3.csv("data/placesHotels2.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 02.");
		          console.log(error);
		      } else {
		      	marca="fora"

		          graphic02 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.plazasHotel,absoluto:el.plazasHotel,porcentaje:el.porcentaje,variacionAnual:el.variacionAnual}
		              });
		      }
			})
    //SUPERFICIE DE LOS DISTRITOS DE BCN
	//////////////////////////////////
	//////////////////////////////

	d3.csv("data/poblacionSuperficie3.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 03.");
		          console.log(error);
		      } else {
		      	
		          graphic03 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, resultado: el.superficie, absoluto:el.superficie,porcentaje:el.porcentaje}
		              });
		      }
	})
	    //DENSIDAD DE POBLACIÓN habitantes/km^2
	//////////////////////////////////
	//////////////////////////////

	d3.csv("data/BcnPoblacionDensidad.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 04.");
		          console.log(error);
		      } else {
		      	

		          graphic04 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.densidad, absoluto:el.densidad,variacionAnual:el.VAdensidad}
		              });
		      }
	})

	//CARGA DATASET: PRUEBAS GRÁFICO VARIACIÓN ANUAL
	//////////////////////////////////
	//////////////////////////////
	d3.csv("data/POBLACION.CSV", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 06.");
		          console.log(error);
		      } else {
		      	
		          graphic06 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.variacionAnualPoblacion,absoluto:el.variacionAnualPoblacion}
		              });
		      }
	})

	    //CARGA DATASET: ESTE ES PARA PRUEBAS DEL GRÁFICO MULTILINEA
	//////////////////////////////////
	//////////////////////////////
	d3.csv("data/dataProvesMultilinea2.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 05.");
		          console.log(error);
		      } else {
		      	
		          graphic05 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.resultado, absoluto:el.resultado}
		              });
		      }
	})
	// VIVIENDA
	//////////////////////////////////
	//////////////////////////////
	// Vivienda nueva
	d3.csv("data/BcnViviendaExcelCSV.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 07.");
		          console.log(error);
		      } else {
		      	
		          graphic07 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.precioViviendaNueva, absoluto:el.precioViviendaNueva,variacionAnual:el.VAViviendaNueva}
		              });
		      }
	})
		// Vivienda nueva
	d3.csv("data/BcnViviendaExcelCSV.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 08.");
		          console.log(error);
		      } else {
		      	
		          graphic08 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.precioViviendaSegundaMano,absoluto:el.precioViviendaSegundaMano,variacionAnual:el.VASegundaMano}
		              });
		      }
	})
		// Vivienda Alquiler
	d3.csv("data/BcnViviendaExcelCSV.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 09.");
		          console.log(error);
		      } else {
		      	
		          graphic09 = dataset.map(function(el){
		 	             return {localizacion: el.localizacion, year: el.year, resultado: el.PrecioViviendaAlquiler, absoluto:el.PrecioViviendaAlquiler,variacionAnual:el.VAAlquiler}
		              });
		      }
	})
		// INFRAESTRUCTURAS
	//////////////////////////////////
	//////////////////////////////
	// Puerto Evolución mensual
	d3.csv("data/BcnInfraestructurasPuerto.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 10.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosPuerto = datos.map(function(el){
		 	             return {fecha: el.fecha, resultado: el.pasajerosPuerto,absoluto:el.pasajerosPuerto,porcentaje:el.porcentajePuerto,variacionAnual:el.VApuerto}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosPuerto[i].fecha = parser(datosPuerto[i].fecha)
                        datosPuerto[i].resultado = Number(datosPuerto[i].resultado)

                    };
                    graphic10 = datosPuerto
			    }
	})
	d3.csv("data/BcnInfraestructurasAeropuerto.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 11.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosAeropuerto = datos.map(function(el){
		 	             return {fecha: el.fecha, filtroAeropuerto:el.tipoPasajero, resultado: el.pasajerosAeropuerto,absoluto:el.pasajerosAeropuerto,porcentaje:el.porcentajeAeropuerto,variacionAnual:el.VAaeropuerto}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosAeropuerto[i].fecha = parser(datosAeropuerto[i].fecha)
                        datosAeropuerto[i].resultado = Number(datosAeropuerto[i].resultado)

                    };
                    graphic11 = datosAeropuerto
			    }
	})
		// CLIMA
	//////////////////////////////////
	//////////////////////////////
	/// Temperaturas
	d3.csv("data/BcnClimaTemperatura.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 12.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosTemperatura = datos.map(function(el){
		 	             return {fecha: el.fecha, filtroTempertatura:el.medida, resultado: el.Temperatura,absoluto:el.Temperatura,variacionAnual:el.VariacionAnual}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosTemperatura[i].fecha = parser(datosTemperatura[i].fecha)
                        datosTemperatura[i].resultado = Number(datosTemperatura[i].resultado)

                    };
                    graphic12 = datosTemperatura
                    
			    }
	})
	/// Precipitaciones	
	d3.csv("data/BcnClimaLluvia.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 13.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosPrecipitaciones = datos.map(function(el){
		 	             return {fecha: el.fecha, resultado: el.diasLluvia, absoluto:el.diasLluvia}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosPrecipitaciones[i].fecha = parser(datosPrecipitaciones[i].fecha)
                        datosPrecipitaciones[i].resultado = Number(datosPrecipitaciones[i].resultado)

                    };
                    graphic13 = datosPrecipitaciones
			    }
	})

	
			// TURISMO
	//////////////////////////////////
	//////////////////////////////
	/// Perfil SEXO
	d3.csv("data/TurPerfilSexo.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 14.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosSexo = datos.map(function(el){
		 	             return {year: el.year, filtroSexo: el.sexo, resultado: el.porcentaje, absoluto:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosSexo[i].year = parser(datosSexo[i].year)
                        datosSexo[i].resultado = Number(datosSexo[i].resultado)
                        datosSexo[i].absoluto = Number(datosSexo[i].absoluto)
                        
                        datosSexo[i].year=datosSexo[i].year.getFullYear()
                    };
                    graphic14 = datosSexo
			    }
	})

		/// Perfil EDAD
	d3.csv("data/TurPerfilEdad.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 15.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosEdad = datos.map(function(el){
		 	             return {year: el.year, filtroEdadT: el.franjaEdad, resultado: el.porcentaje, absoluto:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosEdad[i].year = parser(datosEdad[i].year)
                        datosEdad[i].resultado = Number(datosEdad[i].resultado)
                        datosEdad[i].absoluto = Number(datosEdad[i].absoluto)
                        
                        datosEdad[i].year=datosEdad[i].year.getFullYear()
                    };
                    graphic15 = datosEdad
			    }
	})
			/// Perfil EDAD
	d3.csv("data/TurPerfilGasto.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 16.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosG = datos.map(function(el){
		 	             return {year: el.year, filtroGastoT: el.Gasto, resultado: el.euros, absoluto:el.euros,variacionAnual:el.variacionAnual,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosG[i].year = parser(datosG[i].year)
                        datosG[i].resultado = Number(datosG[i].resultado)
                        datosG[i].absoluto = Number(datosG[i].absoluto)
                        
                        datosG[i].year=datosG[i].year.getFullYear()
                    };
                    graphic16 = datosG
			    }
	})
			/// Perfil MOTIVOS
	d3.csv("data/TurPerfilMotivos.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 17.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosM = datos.map(function(el){
		 	             return {year: el.year, filtroMotivosT: el.motivo, resultado: el.porcentaje, absoluto:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosM[i].year = parser(datosM[i].year)
                        datosM[i].resultado = Number(datosM[i].resultado)
                        datosM[i].absoluto = Number(datosM[i].absoluto)
                        
                        datosM[i].year=datosM[i].year.getFullYear()
                    };
                    graphic17 = datosM
			    }
	})
			/// Perfil días ALOJAMIENTO
	d3.csv("data/TurPerfilTiempoAlojamiento.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 18.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year: el.year, filtroAlojamientoT: el.alojamiento, resultado: el.dias, absoluto:el.dias,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].year = parser(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        
                        datosA[i].year=datosA[i].year.getFullYear()
                    };
                    graphic18 = datosA
			    }
	})

	/// Perfil REPETIBILIDAD
	d3.csv("data/TurPerfilRepetibilidad.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 19.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year: el.year, filtroRepeT: el.visita, resultado: el.porcentaje, absoluto:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].year = parser(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        
                        datosA[i].year=datosA[i].year.getFullYear()
                    };
                    graphic19 = datosA
			    }
	})
	/// Perfil TRANSPORTE
	d3.csv("data/TurPerfilTransporte.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 20.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year: el.year, filtroTransporteT: el.transporte, resultado: el.porcentaje, absoluto:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].year = parser(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        
                        datosA[i].year=datosA[i].year.getFullYear()
                    };
                    graphic20 = datosA
			    }
	})
	/// Economía: Trabajadores Sector
	d3.csv("data/BcnEcoTrabajadoresSector.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 21.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year: el.year, filtroBcnEcoTrabajadoresSector: el.trabajadoresSector, resultado: el.personas, absoluto:el.personas,porcentaje:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].year = parser(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        
                        datosA[i].year=datosA[i].year.getFullYear()
                    };
                    graphic21 = datosA
			    }
	})	
	/// Economía: situación laboral: LA TASA DE PARO ES LA DE LA EPA !!!!!!!!
	d3.csv("data/BcnEcoSituacionLaboral.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 22.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year: el.year, filtroBcnEcoSituacionLaboral: el.situacionLaboral, resultado: el.personas, absoluto:el.personas,porcentaje:el.porcentaje,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].year = parser(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        
                        datosA[i].year=datosA[i].year.getFullYear()
                    };
                    graphic22 = datosA
			    }
	})

	/// Economia: PIB Bcn
		d3.csv("data/BcnEcoPIB.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 23.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year: el.year, filtroBcnEcoPIB: el.ambito, resultado: el.PIBBarcelona, absoluto:el.PIBBarcelona,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].year = parser(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        
                        datosA[i].year=datosA[i].year.getFullYear()
                    };
                    graphic23 = datosA
			    }
	})

	/// Economia: Salarios por sectores
	d3.csv("data/BcnEcoSalarioSectores.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 24.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroBcnEcoSalariosSector: el.sector, resultado: el.salario, absoluto:el.salario,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic24 = datosA
		    }
	})

	/// Turismo Reuniones: Número
	d3.csv("data/TurReunionNumero.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 25.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             	return {year: el.year, filtroTurRNumReunion: el.reunion, resultado: el.numero, absoluto:el.numero,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic25 = datosA
		    }
	}) 
	/// Turismo Reuniones: Asistentes
	d3.csv("data/TurReunionAsistencia.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 26.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             	return {year: el.year, filtroTurRAsisReunion: el.reunion, resultado: el.numero, absoluto:el.numero,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic26 = datosA
		    }
	})

	/// Turismo Alojamiento: HUT número
	d3.csv("data/TurAloHUT.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 27.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, resultado: el.licenciasHUT, absoluto:el.licenciasHUT,variacionAnual:el.variacionAnualLicencias}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic27 = datosA
		    }
	})	
	/// Turismo Alojamiento: HUT plazas
	d3.csv("data/TurAloHUT.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 28.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, resultado: el.plazasHUT, absoluto:el.plazasHUT,variacionAnual:el.variacionAnualPlazas}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic28 = datosA
		    }
	})		
	/// Turismo Alojamiento: Número hoteles
	d3.csv("data/TurAloNumHP.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 29.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurNumHP: el.tipoAlojamiento, resultado: el.numero, absoluto:el.numero,porcentaje:el.porcentaje,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic29 = datosA
		    }
	})		
	/// Turismo Alojamiento: Plazas hoteles
	d3.csv("data/TurAloPlazasHP.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 30.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurPlazasHP: el.tipoAlojamiento, resultado: el.numero, absoluto:el.numero,porcentaje:el.porcentaje,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic30 = datosA
		    }
	})			
	/// Turismo Cultural: TOP evolución
	d3.csv("data/TurCultTopLugaresVisitas.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 31.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultTop: el.lugar, resultado: el.numero, absoluto:el.numero,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic31 = datosA
		    }
	})		
		/// Turismo Cultural: Espais de lleure
	d3.csv("data/TurCultEspaisLleure.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 32.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultELleure: el.espaiLleure, resultado: el.entradasVendidas, absoluto:el.entradasVendidas}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic32 = datosA
		    }
	})	
		/// Turismo Cultural: Espais de interés arquitectónico
	d3.csv("data/TurCultEspaisArquitectonic.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 33.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultArquitectura: el.interesArquitectonico, resultado: el.entradasVendidas, absoluto:el.entradasVendidas}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic33 = datosA
		    }
	})	

		/// Turismo Cultural: Centros Exposiciones
	d3.csv("data/TurCultCentrosExposiciones.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 34.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultExpo: el.centrosExposiciones, resultado: el.visitantes, absoluto:el.visitantes}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic34 = datosA
		    }
	})	
			/// Turismo Cultural: Museos y colecciones
	d3.csv("data/TurCultMuseosColecciones.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 35.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultMuseos: el.museusColeccions, resultado: el.visitantes, absoluto:el.visitantes}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic35 = datosA
		    }
	})	
			/// Turismo Cultural: Transports singulars
	d3.csv("data/TurCultTransportesSingulares.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 36.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultTransportes: el.transportesSingulares, resultado: el.ticketsVendidos, absoluto:el.ticketsVendidos}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic36 = datosA
		    }
	})	
			/// Turismo Cultural: Resumen lugares de interés
	d3.csv("data/TurCultResumenLugaresInteres.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 37.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurCultResumenLugares: el.lugarInteres, resultado: el.totalLugaresInteres, absoluto:el.totalLugaresInteres}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic37 = datosA
		    }
	})	

			/// Turismo Reuniones: Ferias vip
	d3.csv("data/TurReunionFerias.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 38.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurRFerias: el.salones, resultado: el.visitantes, absoluto:el.visitantes}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic38 = datosA
		    }
	})		

			/// Perfil Turista: Nacionalidad
	d3.csv("data/TurPerfilNacionalidad.csv", function (error, dataset) {
	      if (error) {
	          window.alert("No ha sido posible recuperar los datos de 39.");
	          console.log(error);
	      } else {
	      		datos = dataset
                    

                    datosA = datos.map(function(el){
	 	             return {year: el.year, filtroTurPNacionalidad: el.nacionalidad, resultado: el.visitantes, absoluto:el.visitantes,variacionAnual:el.variacionAnual}
                    });
                   
                var parser = d3.timeParse("%Y");
                for (var i = 0; i < datos.length; i++) {
                    datosA[i].year = parser(datosA[i].year)
                    datosA[i].resultado = Number(datosA[i].resultado)
                    datosA[i].absoluto = Number(datosA[i].absoluto)
                    
                    datosA[i].year=datosA[i].year.getFullYear()
                };
                graphic39 = datosA
		    }
	})	
	/// TurismoAlojamiento: grado de ocupación hotelera
	d3.csv("data/TurAloGradoOcupacionHotelera.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 40.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year:el.fecha,fecha: el.fecha, filtroTurAloOcupacion:el.filtro, resultado: el.gradoOcupacion,absoluto:el.gradoOcupacion,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    //var parser2 = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].fecha = parser(datosA[i].fecha)
                        //datosA[i].year = parser2(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)

                    };
                    graphic40 = datosA

			    }
	})
	/// TurismoAlojamiento: Personal empleado en hoteles
	d3.csv("data/TurAloPersonalHoteles.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 41.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year:el.fecha,fecha: el.fecha, filtroTurAloPersonal:el.filtro, resultado: el.personalOcupado,absoluto:el.personalOcupado,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    //var parser2 = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].fecha = parser(datosA[i].fecha)
                        //datosA[i].year = parser2(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)

                    };
                    graphic41 = datosA

			    }
	})
	/// TurismoAlojamiento: Precio hoteles
	d3.csv("data/TurAloPrecioHoteles.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 42.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year:el.fecha,fecha: el.fecha, filtroTurAloPrecio:el.filtro, resultado: el.precioHotel,absoluto:el.precioHotel,variacionAnual:el.variacionAnual}
                        });
                       
                    var parser = d3.timeParse("%m/%Y");
                    //var parser2 = d3.timeParse("%Y");
                    for (var i = 0; i < datos.length; i++) {
                        datosA[i].fecha = parser(datosA[i].fecha)
                        //datosA[i].year = parser2(datosA[i].year)
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)

                    };
                    graphic42 = datosA

			    }
	})
	/// Barcelona Población: según Edad
	d3.csv("data/BcnPoblacionEdades.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 43.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year:el.year, filtroBcnPobDistrito:el.localizacion,filtroBcnPobEdades:el.rango ,resultado: el.poblacion,absoluto:el.poblacion,variacionAnual:el.variacionAnual,porcentaje:el.porcentaje}
                        });
                       
                    //var parser = d3.timeParse("%Y");
                    
                    for (var i = 0; i < datos.length; i++) {
                    //    datosA[i].year = parser(datosA[i].year)
                    
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)

                    };
                    graphic43 = datosA

			    }
	})
	/// Barcelona Población: según Nacionalidad
	d3.csv("data/BcnPoblacionNacionalidades.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 44.");
		          console.log(error);
		      } else {
		      		datos = dataset
                        

                        datosA = datos.map(function(el){
		 	             return {year:el.year, filtroBcnPobDistrito:el.localizacion,filtroBcnPobNacion:el.nacionalidad ,resultado: el.personas,absoluto:el.personas,variacionAnual:el.variacionAnual,porcentaje:el.porcentaje}
                        });
                       
                    //var parser = d3.timeParse("%Y");
                    
                    for (var i = 0; i < datos.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)

                    };
                    graphic44 = datosA

			    }
	})
////////////// TEST POBLACIÓN
	d3.csv("data/POBLACION.CSV", function (error, dataset) {
      if (error) {
          window.alert("No ha sido posible recuperar los datos de 45.");
          console.log(error);
      } else {

          //datosIni = 
          datosA = dataset.map(function(el){
 	             return {filtroBcnPobLocalizacion: el.localizacion, year: el.year, resultado: el.poblacion,absoluto:el.poblacion,porcentaje:el.porcentaje,variacionAnual:el.variacionAnualPoblacion}
              });
          for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic45 = datosA
      }
	})
	//CARGA PLAZAS DE HOTEL
	//////////////////////////////////
	//////////////////////////////////    	

        	d3.csv("data/placesHotels2.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 46.");
		          console.log(error);
		      } else {

		          datosA = dataset.map(function(el){
		 	             return {filtroBcnPobLocalizacion: el.localizacion, year: el.year, resultado: el.plazasHotel,absoluto:el.plazasHotel,porcentaje:el.porcentaje,variacionAnual:el.variacionAnual}
		              });
		          for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic46 = datosA
		      }
			})

	//SUPERFICIE DE LOS DISTRITOS DE BCN
	//////////////////////////////////
	//////////////////////////////

	d3.csv("data/poblacionSuperficie3.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 47.");
		          console.log(error);
		      } else {
		      	
		          datosA = dataset.map(function(el){
		 	             return {filtroBcnPobLocalizacion: el.localizacion, resultado: el.superficie, absoluto:el.superficie,porcentaje:el.porcentaje}
		              });
		        	for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic47 = datosA
		      }
	})
	    //DENSIDAD DE POBLACIÓN habitantes/km^2
	//////////////////////////////////
	//////////////////////////////

	d3.csv("data/BcnPoblacionDensidad.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 48.");
		          console.log(error);
		      } else {
		      	

		          datosA = dataset.map(function(el){
		 	             return {filtroBcnPobLocalizacion: el.localizacion, year: el.year, resultado: el.densidad, absoluto:el.densidad,variacionAnual:el.VAdensidad}
		              });
		        	for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic48 = datosA
		      }
	})
	// VIVIENDA
	//////////////////////////////////
	//////////////////////////////
	// Vivienda nueva
	d3.csv("data/BcnViviendaExcelCSV.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 49.");
		          console.log(error);
		      } else {
		      	
		          datosA = dataset.map(function(el){
		 	             return {filtroBcnPobLocalizacion: el.localizacion, year: el.year, resultado: el.precioViviendaNueva, absoluto:el.precioViviendaNueva,variacionAnual:el.VAViviendaNueva}
		              });
		          for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic49 = datosA
		      }
	})
		// Segunda mano
	d3.csv("data/BcnViviendaExcelCSV.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 50.");
		          console.log(error);
		      } else {
		      	
		          datosA = dataset.map(function(el){
		 	             return {filtroBcnPobLocalizacion: el.localizacion, year: el.year, resultado: el.precioViviendaSegundaMano,absoluto:el.precioViviendaSegundaMano,variacionAnual:el.VASegundaMano}
		              });
		          for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic50 = datosA
		      }
	})
		// Vivienda Alquiler
	d3.csv("data/BcnViviendaExcelCSV.csv", function (error, dataset) {
		      if (error) {
		          window.alert("No ha sido posible recuperar los datos de 51.");
		          console.log(error);
		      } else {
		      	
		          datosA = dataset.map(function(el){
		 	             return {filtroBcnPobLocalizacion: el.localizacion, year: el.year, resultado: el.PrecioViviendaAlquiler, absoluto:el.PrecioViviendaAlquiler,variacionAnual:el.VAAlquiler}
		              });
		          for (var i = 0; i < datosA.length; i++) {
                      //  datosA[i].year = parser(datosA[i].year)
                        
                        datosA[i].resultado = Number(datosA[i].resultado)
                        datosA[i].absoluto = Number(datosA[i].absoluto)
                        datosA[i].variacionAnual = Number(datosA[i].variacionAnual)
                        datosA[i].porcentaje = Number(datosA[i].porcentaje)

                    };
            graphic51 = datosA
		      }
	})
}

	