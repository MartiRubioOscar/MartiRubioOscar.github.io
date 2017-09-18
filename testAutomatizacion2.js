function automaticInput(id_grafico){
  var resFiltros = d3.scale.ordinal()
                  .domain(["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51"])
                  .range([
                  { //11
                    nomMenuCB:["MenuCheckBoxBcnInfAero"],
                    nomMyFunctionCB: ["myFunctionCheckBoxBcnInfAero"],
                    nomClaseCB: ["checkBoxBcnInfAero"],
                    nomIdSquaresCB:["IdInfrATotal","IdInfrANacional","IdInfrAInternacional"],
                    titulosEjeY:["Total","Nacional","Internacional"],                  
                    titulosSquaresCB:["Total","Nacional","Internacional"],                  
                    filtroResumenMAT:"FAeropuerto",
                    filtroDatos: "filtroAeropuerto",
                    subfiltrosDatos:["Total","Nacional","Internacional"],
                    BARRAS:"uds barras",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"testEA",
                    EVOL_mensual:"pasajeros"
                  },
                  { //12
                    nomMenuCB:["MenuCheckBoxBcnClimaTemp"],
                    nomMyFunctionCB: ["myFunctionCheckBoxBcnClimaTemp"],
                    nomClaseCB: ["checkBoxBcnClimaTemp"],
                    nomIdSquaresCB:["IdMedia","IdMinima","IdMaxima"],
                    titulosEjeY:["Media","Minima","Maxima"],                  
                    titulosSquaresCB:["Media","Minima","Maxima"],                  
                    filtroResumenMAT:"FTemperatura",
                    filtroDatos: "filtroTempertatura",
                    subfiltrosDatos:["media","minima","maxima"],
                    BARRAS:"uds barras",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"testEA",
                    EVOL_mensual:"ºC"
                  },
                  { //13
                    nomMenuCB:[],
                    nomMyFunctionCB: [],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:[],                  
                    titulosSquaresCB:[],                  
                    filtroResumenMAT:[],
                    filtroDatos: [],
                    subfiltrosDatos:[],
                    BARRAS:"uds barras",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"",
                    EVOL_mensual:"días"
                  },
                  { //14
                    nomMenuCB:["MenuCheckBoxTurTuriGenero"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriGenero"],
                    nomClaseCB: ["checkBoxTurTuriGenero"],
                    nomIdSquaresCB:["IdHombres","IdMujeres"],
                    titulosEjeY:["Hombres","Mujeres"],                  
                    titulosSquaresCB:["Hombres","Mujeres"],                  
                    filtroResumenMAT:"FTurSexo",
                    filtroDatos: "filtroSexo",
                    subfiltrosDatos:["hombres","mujeres"],
                    BARRAS:"%",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"%",
                    EVOL_mensual:"testEM"
                  },
                  { //15
                    nomMenuCB:["MenuCheckBoxTurTuriEdad"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriEdad"],
                    nomClaseCB: ["checkBoxTurTuriEdad"],
                    nomIdSquaresCB:["IdRangoEd1","IdRangoEd2","IdRangoEd3","IdRangoEd4","IdRangoEd5","IdRangoEd6"],
                    titulosEjeY:["15-17 años","18-24 años","25-34 años","35-44 años","45-54 años","más de 55 años"],                  
                    titulosSquaresCB:["15-17 años","18-24 años","25-34 años","35-44 años","45-54 años","más de 55 años"],                  
                    filtroResumenMAT:"FTurEdad",
                    filtroDatos: "filtroEdadT",
                    subfiltrosDatos:["de 15 a 17","de 18 a 24","de 25 a 34","de 35 a 44","de 45 a 54","55 o mas"],
                    BARRAS:"%",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"%",
                    EVOL_mensual:"testEM"
                  },
                  { //16
                    nomMenuCB:["MenuCheckBoxTurTuriGasto"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriGasto"],
                    nomClaseCB: ["checkBoxTurTuriGasto"],
                    nomIdSquaresCB:["IdTTransporte","IdTAlojamiento","IdTEstancia"],
                    titulosEjeY:["Transporte","Alojamiento","Estancia"],
                    titulosSquaresCB:["Transporte","Alojamiento","Estancia"],
                    filtroResumenMAT:"FTurGasto",
                    filtroDatos: "filtroGastoT",
                    subfiltrosDatos:["transporte","alojamiento","estancia"],
                    BARRAS:"€",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"€",
                    EVOL_mensual:"testEM"
                  },
                  { //17
                    nomMenuCB:["MenuCheckBoxTurTuriMotivo"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriMotivo"],
                    nomClaseCB: ["checkBoxTurTuriMotivo"],
                    nomIdSquaresCB:["IdVacacional","IdProfesional","IdPersonal"],
                    titulosEjeY:["Vacacional","Profesional","Personal y otros"],                  
                    titulosSquaresCB:["Vacacional","Profesional","Personal y otros"],                  
                    filtroResumenMAT:"FTurMotivo",
                    filtroDatos: "filtroMotivosT",
                    subfiltrosDatos:["Vacacional-Ocio","Profesional","Personal y otros"],
                    BARRAS:"%",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"%",
                    EVOL_mensual:"testEM"
                  },
                  { //18
                    nomMenuCB:["MenuCheckBoxTurTuriDiasAlo"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriDiasAlo"],
                    nomClaseCB: ["checkBoxTurTuriDiasAlo"],
                    nomIdSquaresCB:["IdTHoteles","IdTPensiones"],
                    titulosEjeY:["Hoteles","Pensiones y hostales"],                  
                    titulosSquaresCB:["Hoteles","Pensiones y hostales"],                  
                    filtroResumenMAT:"FTurAlojamiento",
                    filtroDatos: "filtroAlojamientoT",
                    subfiltrosDatos:["Hoteles","Pensiones y hostales"],
                    BARRAS:"días",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"días",
                    EVOL_mensual:"testEM"
                  },
                  { //19
                    nomMenuCB:["MenuCheckBoxTurTuriRepe"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriRepe"],
                    nomClaseCB: ["checkBoxTurTuriRepe"],
                    nomIdSquaresCB:["IdPrimeraVisita","IdSegundaVisista","IdMas","IdNSNC"],
                    titulosEjeY:["Primera visita","Segunda visita","Tercera o más","NS NC"],                  
                    titulosSquaresCB:["Primera visita","Segunda visita","Tercera o más","NS NC"],                  
                    filtroResumenMAT:"FTurRepe",
                    filtroDatos: "filtroRepeT",
                    subfiltrosDatos:["primeraVisita","segundaVisita","teceraOmas","NSNC"],
                    BARRAS:"%",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"%",
                    EVOL_mensual:"testEM"
                  },
                  { //20
                    nomMenuCB:["MenuCheckBoxTurTuriTransport"],
                    nomMyFunctionCB: ["myFunctionCheckBoxTurTuriTransport"],
                    nomClaseCB: ["checkBoxTurTuriTransport"],
                    nomIdSquaresCB:["IdAvión","IdCoche","IdFerrocarril","IdAutocar","IdOtros"],
                    titulosEjeY:["Avión","Coche","Ferrocarril","Autocar","Otros"],                  
                    titulosSquaresCB:["Avión","Coche","Ferrocarril","Autocar","Otros"],                  
                    filtroResumenMAT:"FTurTransporte",
                    filtroDatos: "filtroTransporteT",
                    subfiltrosDatos:["avion","coche","ferrocarril","autocar","otros"],
                    BARRAS:"%",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"%",
                    EVOL_mensual:"testEM"
                  },
                  { //21
                    nomMenuCB:"MenuCheckBoxBcnTrabajadoresSector",
                    nomMyFunctionCB: "myFunctionCheckBoxBcnEcoTrabajadoresSector",
                    nomClaseCB: "checkBoxBcnEcoTrabajadoresSector",
                    nomIdSquaresCB:["BcnEcoAfiliados","BcnEcoAgricultura","BcnEcoIndustria","BcnEcoConstruccion","BcnEcoServicios"],
                    titulosEjeY:["Afiliados","Agricultura","Industria","Construcción","Servicios"],                  
                    titulosSquaresCB:["Afiliados","Agricultura","Industria","Construcción","Servicios"],                  
                    filtroResumenMAT:"FBcnEcoTrabajadoresSector",
                    filtroDatos: "filtroBcnEcoTrabajadoresSector",
                    subfiltrosDatos:["afiliados","agricultura","industria","construccion","servicios"],
                    BARRAS:"trabajadores",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"trabajadores",
                    EVOL_mensual:"testEM"
                  }, 
                  { //22
                    nomMenuCB:"MenuCheckBoxBcnSituacionLaboral",
                    nomMyFunctionCB: "myFunctionCheckBoxBcnEcoSituacionLaboral",
                    nomClaseCB: "checkBoxBcnEcoSituacionLaboral",
                    nomIdSquaresCB:["BcnEcoAsalariados","BcnEcoAutonomos","BcnEcoParoRegistrado"],
                    titulosEjeY:["Asalariados","Autónomos","Paro Registrado"],                    
                    titulosSquaresCB:["Asalariados","Autónomos","Paro Registrado"],                    
                    filtroResumenMAT:"FBcnEcoSituacionLaboral",
                    filtroDatos: "filtroBcnEcoSituacionLaboral",
                    subfiltrosDatos:["asalariados","autonomos","paroRegistrado"],
                    BARRAS:"pob. activa",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"pob. activa",
                    EVOL_mensual:"testEM"
                  },
                  { //23
                    nomMenuCB:"MenuCheckBoxBcnEcoPIB",
                    nomMyFunctionCB: "myFunctionCheckBoxBcnEcoPIB",
                    nomClaseCB: "checkBoxBcnEcoPIB",
                    nomIdSquaresCB:["BcnEcoPIB"],
                    titulosEjeY:["PIB"],                    
                    titulosSquaresCB:["PIB"],                    
                    filtroResumenMAT:"FBcnEcoPIB",
                    filtroDatos: "filtroBcnEcoPIB",
                    subfiltrosDatos:["barcelona"],
                    BARRAS:"millones €",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"millones €",
                    EVOL_mensual:"testEM"
                  },
                  { //24
                    nomMenuCB:"MenuCheckBoxBcnEcoSalariosSector",
                    nomMyFunctionCB: "myFunctionCheckBoxBcnEcoSalariosSector",
                    nomClaseCB: "checkBoxBcnEcoSalariosSector",
                    nomIdSquaresCB:["BcnEcoSalarioMedio","BcnEcoSalarioInd","BcnEcoSalarioConst","BcnEcoSalarioVentaR","BcnEcoSalarioComercioPM","BcnEcoSalarioTransp","BcnEcoSalarioHosteleria","BcnEcoSalarioCom","BcnEcoSalarioFin","BcnEcoSalarioInm","BcnEcoSalarioCient","BcnEcoSalarioAdminAux","BcnEcoSalarioEdu","BcnEcoSalarioAdminPub","BcnEcoSalarioSani","BcnEcoSalarioServS","BcnEcoSalarioArt"],
                    titulosEjeY:["Salario Medio","Industria","Construcción","Venta/repar. vehíc.","Comercio al por mayor","Transporte","Hostelería","Info./comunicaciones","Finan./aseguradoras","Immobiliarias","Científicas/técnicas","Administrativo auxiliar","Educación","Administración pública","Sanidad","Servicios Sociales","Artísticas"],                    
                    titulosSquaresCB:["Salario Medio","Industria","Consturcción","Venta y reparación vehículos","Comercio al por mayor","Transporte","Hostelería","Información y comunicaciones","Financieras y aseguradoras","Actividades immobiliarias","Científicas y técnicas","Administrativo auxiliar","Educación","Administración pública","Sanidad","Servicios Sociales","Actividades artísticas"],                    
                    filtroResumenMAT:"FBcnEcoSalariosSector",
                    filtroDatos: "filtroBcnEcoSalariosSector",
                    subfiltrosDatos:["salarioMedio","industria","construccion","ventaReparaciones","comercioPorMayor","transporte","hosteleria","informacionComunicaciones","financierasAseguradoras","actividadesInmobiliarias","actividadesProfesionalesCientificasTecnicas","administrativasAuxiliares","educacion","administracionPublica","sanidad","serviciosSociales","artisticasServicioPersonas"],
                    BARRAS:"€ br/anuales",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"€ br/anuales",
                    EVOL_mensual:"testEM"
                  },
                  { //25
                    nomMenuCB:"MenuCheckBoxTurRNumReunion",
                    nomMyFunctionCB: "myFunctionCheckBoxTurRNumReunion",
                    nomClaseCB: "checkBoxTurRNumReunion",
                    nomIdSquaresCB:["TurRNumCongresos","TurRNumConvenciones"],
                    titulosEjeY:["Congresos","Convenciones"],                    
                    titulosSquaresCB:["Congresos","Convenciones"],                    
                    filtroResumenMAT:"FTurRNumReunion",
                    filtroDatos: "filtroTurRNumReunion",
                    subfiltrosDatos:["congresos","convenciones"],
                    BARRAS:"reuniones",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"reuniones",
                    EVOL_mensual:"testEM"
                  },                  
                  { //26
                    nomMenuCB:"MenuCheckBoxTurRAsisReunion",
                    nomMyFunctionCB: "myFunctionCheckBoxTurRAsisReunion",
                    nomClaseCB: "checkBoxTurRAsisReunion",
                    nomIdSquaresCB:["TurRAsisCongresos","TurRAsisConvenciones"],
                    titulosEjeY:["Congresos","Convenciones"],                    
                    titulosSquaresCB:["Congresos","Convenciones"],                    
                    filtroResumenMAT:"FTurRAsisReunion",
                    filtroDatos: "filtroTurRAsisReunion",
                    subfiltrosDatos:["congresos","convenciones"],
                    BARRAS:"asistentes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"asistentes",
                    EVOL_mensual:"testEM"
                  },                  
                  { //27
                    nomMenuCB:"MenuCheckBoxTurAloHUTLicencias",
                    nomMyFunctionCB: "myFunctionCheckBoxTurAloHUTLicencias",
                    nomClaseCB: "checkBoxTurAloHUTLicencias",
                    nomIdSquaresCB:[],
                    titulosEjeY:[],                    
                    titulosSquaresCB:[],                    
                    filtroResumenMAT:"FTurAloHUTLicencias",
                    filtroDatos: "filtroTurAloHUTLicencias",
                    subfiltrosDatos:[],
                    BARRAS:"licencias",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"licencias",
                    EVOL_mensual:"testEM"
                  },
                  { //28
                    nomMenuCB:"MenuCheckBoxTurAloHUTPlazas",
                    nomMyFunctionCB: "myFunctionCheckBoxTurAloHUTPlazas",
                    nomClaseCB: "checkBoxTurAloHUTPlazas",
                    nomIdSquaresCB:[],
                    titulosEjeY:[],                    
                    titulosSquaresCB:[],                    
                    filtroResumenMAT:"FTurAloHUTPlazas",
                    filtroDatos: "filtroTurAloHUTPlazas",
                    subfiltrosDatos:[],
                    BARRAS:"plazas",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"plazas",
                    EVOL_mensual:"testEM"
                  },
                  { //29
                    nomMenuCB:"MenuCheckBoxTurAloNumHP",
                    nomMyFunctionCB: "myFunctionCheckBoxTurAloNumHP",
                    nomClaseCB: "checkBoxTurAloNumHP",
                    nomIdSquaresCB:["TurNumHP13","TurNumHP45","TurNumHPPensiones"],
                    titulosEjeY:["H. 1,2,3 estrellas","H. 4 o 5 estrellas","Pensiones y hostales"],                    
                    titulosSquaresCB:["Hoteles de 1,2,3 estrellas","Hoteles de 4 o 5 estrellas","Pensiones y hostales"],                    
                    filtroResumenMAT:"FTurAloHNumHP",
                    filtroDatos: "filtroTurNumHP",
                    subfiltrosDatos:["total_1a3","total_4y5","pensionesHostales"],
                    BARRAS:"establecimientos",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"establecimientos",
                    EVOL_mensual:"testEM"
                  },
                  { //30
                    nomMenuCB:"MenuCheckBoxTurAloPlazasHP",
                    nomMyFunctionCB: "myFunctionCheckBoxTurAloPlazasHP",
                    nomClaseCB: "checkBoxTurAloPlazasHP",
                    nomIdSquaresCB:["TurPlazasHP13","TurPlazasHP45","TurPlazasHPPensiones"],
                    titulosEjeY:["H. 1,2,3 estrellas","H. 4 o 5 estrellas","Pensiones y hostales"],                    
                    titulosSquaresCB:["Hoteles de 1,2,3 estrellas","Hoteles de 4 o 5 estrellas","Pensiones y hostales"],                    
                    filtroResumenMAT:"FTurAloHPlazasHP",
                    filtroDatos: "filtroTurPlazasHP",
                    subfiltrosDatos:["total_1a3","total_4y5","pensionesHostales"],
                    BARRAS:"plazas",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"plazas",
                    EVOL_mensual:"testEM"
                  },
                  { //31
                    nomMenuCB:"MenuCheckBoxTurCultTop",
                    nomMyFunctionCB: "myFunctionCheckBoxTurCultTop",
                    nomClaseCB: "checkBoxTurCultTop",
                    nomIdSquaresCB:["TurCultTopSagradaFamilia","TurCultTopParqueGuell","TurCultTopFCB","TurCultTopAcua","TurCultTopBorn","TurCultTopPE","TurCultTopPicaso","TurCultTopZoo","TurCultTopBatllo","TurCultTopPedrera","TurCultTopHist","TurCultTopCaixaF","TurCultTopCosmoC","TurCultTopCast"],
                    titulosEjeY:["Sagrada Familia","Parc Güell","Museo FC Barcelona","Acuario","Centro Cultural Born","Pueblo Español","Museo Picaso","Zoo", "Casa Batlló","La Pedrera","Museo de Historia","CaixaFourm","CosmoCaixa","Castillo de Montjuïc"],                    
                    titulosSquaresCB:["Sagrada Familia","Parc Güell","Museo de FC Barcelona","Acuario","Centro Cultural del Born","Pueblo Español","Museo Picaso","Zoo", "Casa Batlló","La Pedrera","Museo de Historia","CaixaFourm","CosmoCaixa","Castillo de Montjuïc"],                    
                    filtroResumenMAT:"FTurCultTop",
                    filtroDatos: "filtroTurCultTop",
                    subfiltrosDatos:["sagradaFamilia","parqueGuell","museuFCB","acuario","bornCentreCultural","pobleEspanyol","picaso","zoo","casaBatllo","pedrera","museoHistoria","caixaForum","cosmoCaixa","castilloMontjuic"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },                 
                  { //32
                    nomMenuCB:"MenuCheckBoxTurCultELleure",
                    nomMyFunctionCB: "myFunctionCheckBoxTurCultELleure",
                    nomClaseCB: "checkBoxTurCultELleure",
                    nomIdSquaresCB:["TurCultELleureTibidabo","TurCultELleureLaberinto,TurCultELleureColon"],
                    titulosEjeY:["Tibidabo","Laberinto de Horta","Mirador de Colón"],                    
                    titulosSquaresCB:["Tibidabo","Laberinto de Horta","Mirador de Colón"],                    
                    filtroResumenMAT:"FTurCultELleure",
                    filtroDatos: "filtroTurCultELleure",
                    subfiltrosDatos:["parqueAtraccionesTibidabo","parqueLaberintHorta","miradorColon"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },                 
                  { //33
                    nomMenuCB:"MenuCheckBoxTurCultArquitectura",
                    nomMyFunctionCB: "myFunctionCheckBoxTurCultArquitectura",
                    nomClaseCB: "checkBoxTurCultArquitectura",
                    nomIdSquaresCB:["TurCultArquitecturaSagradaFamilia","TurCultArquitecturaParqueGuell","TurCultArquitecturaPobleEspanyol","TurCultArquitecturaBatllo","TurCultArquitecturaPedrera","TurCultArquitecturaCastillo","TurCultArquitecturaMUHBA","TurCultArquitecturaMuseoGaudi","TurCultArquitecturaPalauGuell","TurCultArquitecturaSantPau","TurCultArquitecturaPalauMusica","TurCultArquitecturaRohe","TurCultArquitecturaLiceu"],
                    titulosEjeY:["Sagrada Familia","Parc Güell","Pueblo Español","Casa Batlló","La Pedrera","Castillo de Montjuïc","Espacios MUHBA","Casa-Museo Gaudí","Palacio Güell", "Sant Pau","Palau de la Música","Pavellón van der Rohe","Liceu"],                    
                    titulosSquaresCB:["Sagrada Familia","Parc Güell","Pueblo Español","Casa Batlló","La Pedrera","Castillo de Montjuïc","Espacios MUHBA","Casa-Museo Gaudí","Palacio Güell", "Sant Pau","Palau de la Música","Pavellón Mies van der Rohe","Liceu"],                    
                    filtroResumenMAT:"FTurCultArquitectura",
                    filtroDatos: "filtroTurCultArquitectura",
                    subfiltrosDatos:["Basílica de la Sagrada Familia","Park Güell","Poble Espanyol de Barcelona","Casa Batlló","La Pedrera","Castell de Montjuïc","Espais Patrimonials de MUHBA","Casa-Museu Gaudí (Park Güell)","Palau Güell","Recinte Modernista de Sant Pau","Palau de la Música Catalana","Pavelló Mies van der Rohe","Gran Teatre del Liceu (rutes guiades)"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },
                  { //34
                    nomMenuCB:[],
                    nomMyFunctionCB: [],
                    nomClaseCB: [],
                    nomIdSquaresCB:["TurCultExpoForum","TurCultExpoRobert","TurCultExpoCCCB","TurCultExpoMonica","TurCultExpoMapfre","TurCultExpoVirreina","TurCultExpoCapella","TurCultExpoHist","TurCultExpoFoto","TurCultExpoCAC","TurCultExpoCasas"],
                    titulosEjeY:["CaixaForum","Palau Robert","CCCB","Arts Santa Mònica","Fundación MAPFRE","La Virreina","La Capella","Archivo Histórico","Archivo Fotográfico","CAC Fabra y Coats","Funcación Vila Casas"],                    
                    titulosSquaresCB:["CaixaForum","Palau Robert","CCCB","Arts Santa Mònica","Fundación MAPFRE","La Virreina","La Capella","Archivo Histórico","Archivo Fotográfico","CAC Fabra y Coats","Funcación Vila Casas"],                    
                    filtroResumenMAT:"FTurCultExpo",
                    filtroDatos: "filtroTurCultExpo",
                    subfiltrosDatos:["CaixaForum","Palau Robert","CCCB","Arts Santa Mònica","Fundación MAPFRE","La Virreina","La Capella","Arxiu Històric","Arxiu Fotogràfic","CAC Fabra i Coats","Funcació Vila Casas"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },
                  { //35
                    nomMenuCB:[],
                    nomMyFunctionCB: [],
                    nomClaseCB: [],
                    nomIdSquaresCB:["TurCultMuseosFCB","TurCultMuseosAcua","TurCultMuseosBorn","TurCultMuseosPicaso","TurCultMuseosZoo","TurCultMuseosMUHBA","TurCultMuseosCosmo","TurCultMuseosMNAC","TurCultMuseosMiro","TurCultMuseosMACBA","TurCultMuseosEgipto","TurCultMuseosMar","TurCultMuseosDiseny","TurCultMuseosDaurel","TurCultMuseosCera","TurCultMuseosBlau","TurCultMuseosHist","TurCultMuseosAuto","TurCultMuseosChoco"],
                    titulosEjeY:["Museu FC Barcelona","Acuario","Centro Cultural Born","Museu Picasso","Zoo","MUHBA","CosmoCaixa","MNAC","Fundación Joan Miró","MACBA","Museo Egipcio","Museo Marítimo","Museo del Diseño","Fundació Daurel","Museo de Cera","Museu Blau", "Museo de Historia","Museo Autómatas","Museo del Chocolate"],                    
                    titulosSquaresCB:["Museu FC Barcelona","Acuario","Centro Cultural Born","Museu Picasso","Zoo","MUHBA","CosmoCaixa","MNAC","Fundación Joan Miró","MACBA","Museo Egipcio","Museo Marítimo","Museo del Diseño","Fundació Daurel","Museo de Cera","Museu Blau", "Museo de Historia","Museo Autómatas","Museo del Chocolate"],                    
                    filtroResumenMAT:"FTurCultMuseos",
                    filtroDatos: "filtroTurCultMuseos",
                    subfiltrosDatos:["Museu FC Barcelona","L'Aquàrium de Barcelona","El Born Centre Cultural","Museu Picasso","Parc Zoològic de Barcelona","Museu d'Història de Barcelona MUHBA","CosmoCaixa Barcelona","Museu Nacional d'Art de Catalunya MNAC","Fundació Joan Miró","Museu d'Art Contemporani de Barcelona MACBA","Museu Egipci de Barcelona","Museu Marítim de Barcelona MMB","Museu del Disseny de Barcelona","Fundació Fran Daurel","Museu de Cera de Barcelona","Museu Blau","Museu d'Història de Catalunya","Museu dels Autòmats del Tibidabo","Museu de la Xocolata"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },
                  { //36
                    nomMenuCB:[],
                    nomMyFunctionCB: [],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:["Bus Turístico","Teleférico Montjuïc","Barcelona City Tour","Funicular Tibidabo","Las Golondrinas","Tranvía Blau"],                    
                    titulosSquaresCB:["Bus Turístico","Teleférico Montjuïc","Barcelona City Tour","Funicular Tibidabo","Las Golondrinas","Tranvía Blau"],                    
                    filtroResumenMAT:"FTurCultTransportes",
                    filtroDatos: "filtroTurCultTransportes",
                    subfiltrosDatos:["Bus Turístico","Teleférico Montjuïc","Barcelona City Tour","Funicular Tibidabo","Las Golondrinas","Tranvía Blau"],
                    BARRAS:"usuarios",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"usuarios",
                    EVOL_mensual:"testEM"
                  },
                  { //37
                    nomMenuCB:[],
                    nomMyFunctionCB: [],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:["Museos y Colecciones","Centros Exposiciones","Lugares Ocio","Interés arquitectónico","Transportes Singulares"],                    
                    titulosSquaresCB:["Museos y Colecciones","Centros Exposiciones","Lugares Ocio","Interés arquitectónico","Transportes Singulares"],                    
                    filtroResumenMAT:"FTurCultResumen",
                    filtroDatos: "filtroTurCultResumenLugares",
                    subfiltrosDatos:["Total Museus i Col.leccions (MC)","Total Centres d´exposicions (CE)","Total Espais de lleure (ELL)","Total Espais d´interès Arquitectònic (EIA)","Total Transports singulars (TS)"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },                                                                        
                  { //38
                    nomMenuCB:[],
                    nomMyFunctionCB: [],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:["Salón Automóvil","Harley Days","Mango","Cómic","Sónar","Oktoberfest","Cosmobelleza","MobileWorldCongress","Salón Enseñanza","Festival Infancia"],                    
                    titulosSquaresCB:["Salón Automóvil","Harley Days","Mango","Cómic","Sónar","Oktoberfest","Cosmobelleza & Wellness","Mobile World Congress","Salón Enseñanza","Festival Infancia"],                    
                    filtroResumenMAT:"FTurRFerias",
                    filtroDatos: "filtroTurRFerias",
                    subfiltrosDatos:["Saló Internacional De L'Automóbil","Barcelona Harley Days","Saló Del Manga","Saló Internacional del Còmic de Barcelona","Sónar","Oktoberfest Bcn","Cosmobelleza & Wellness","Mobile World Congress","Saló de L'Ensenyament","Festival De La Infància"],
                    BARRAS:"visitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"visitantes",
                    EVOL_mensual:"testEM"
                  },   
                  { //39
                    nomMenuCB:"MenuCheckBoxTurPerfilNacionalidad",
                    nomMyFunctionCB: "myFunctionCheckBoxTurPerfilNacionalidad",
                    nomClaseCB: "checkBoxTurPerfilNacionalidad",
                    nomIdSquaresCB:["TurPNacionalTOTAL","TurPNacionalEsp","TurPNacionalAle","TurPNacionalBel","TurPNacionalFr","TurPNacionalIta","TurPNacionalPB","TurPNacionalUK","TurPNacionalSue","TurPNacionalRCEE","TurPNacionalRus","TurPNacionalSui","TurPNacionalREur","TurPNacionalJap","TurPNacionalEEUU","TurPNacionalRAme","TurPNacionalAfr","TurPNacionalRMun"],
                    titulosEjeY:["TOTAL","España","Alemania","Bélgica","Francia","Italia","Países Bajos","Reino Unido","Suecia","Resto CEE","Rusia","Suiza","Resto de Europa","Japón","EEUU","Resto de América","Países africanos","Resto del mundo"],                    
                    titulosSquaresCB:["TOTAL","España","Alemania","Bélgica","Francia","Italia","Países Bajos","Reino Unido","Suecia","Resto CEE","Rusia","Suiza","Resto de Europa","Japón","EEUU","Resto de América","Países africanos","Resto del mundo"],                    
                    filtroResumenMAT:"FTurPNacionalidad",
                    filtroDatos: "filtroTurPNacionalidad",
                    subfiltrosDatos:["TOTAL","España","Alemania","Bélgica","Francia","Italia","Países Bajos","Reino Unido","Suecia","Resto Unión Europea","Rusia","Suiza","Resto de Europa","Japón","Estados Unidos de América","Resto de América","Países africanos","Resto del mundo"],
                    BARRAS:"turistas",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"turistas",
                    EVOL_mensual:"testEM"
                  },
                  { //40
                    nomMenuCB:[],
                    nomMyFunctionCB:[],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:[],                    
                    titulosSquaresCB:[],                    
                    filtroResumenMAT:"FTurTurAloOcupacion",
                    filtroDatos: "filtroTurAloOcupacion",
                    subfiltrosDatos:[],
                    BARRAS:"uds barras",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"testEA",
                    EVOL_mensual:"%"
                  },
                  { //41
                    nomMenuCB:[],
                    nomMyFunctionCB:[],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:[],                    
                    titulosSquaresCB:[],                    
                    filtroResumenMAT:"FTurTurAloPersonal",
                    filtroDatos: "filtroTurAloPersonal",
                    subfiltrosDatos:[],
                    BARRAS:"uds barras",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"testEA",
                    EVOL_mensual:"empleados"
                  },
                  { //42
                    nomMenuCB:[],
                    nomMyFunctionCB:[],
                    nomClaseCB: [],
                    nomIdSquaresCB:[],
                    titulosEjeY:[],                    
                    titulosSquaresCB:[],                    
                    filtroResumenMAT:"FTurTurAloPrecio",
                    filtroDatos: "filtroTurAloPrecio",
                    subfiltrosDatos:[],
                    BARRAS:"uds barras",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"testEA",
                    EVOL_mensual:"€/noche"
                  },
                  { //43 Edades
                    nomMenuCB:"MenuCheckBoxBcnPobEdades",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnPobEdades",
                    nomClaseCB: "checkBoxBcnPobEdades",
                    nomIdSquaresCB:["BcnPobEdades0a20","BcnPobEdades20a39","BcnPobEdades40a59","BcnPobEdades60a79","BcnPobEdadesmasde80"],
                    titulosEjeY:["de 0 a 19", "de 20 a 39", "de 40 a 59","de 60 a 79","más de 80"],                    
                    titulosSquaresCB:["de 0 a 19", "de 20 a 39", "de 40 a 59","de 60 a 79","más de 80"],                    
                    filtroResumenMAT:"FBcnPobEdades",
                    filtroDatos: "filtroBcnPobEdades",
                    subfiltrosDatos:["de 0 a 20","de 20-39","de 40-59","de 60-79","más de 80"],
                    BARRAS:"habitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"habitantes",
                    EVOL_mensual:"testEM"
                  },           
                  { //44 Nacionalidad
                    nomMenuCB:"MenuCheckBoxBcnPobNacionalidad",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnPobNacionalidad",
                    nomClaseCB: "checkBoxBcnPobNacionalidad",
                    nomIdSquaresCB:["BcnPobNacionEsp","BcnPobNacionIta","BcnPobNacionFr","BcnPobNacionRU","BcnPobNacionMar","BcnPobNacionBol","BcnPobNacionEcu","BcnPobNacionPer","BcnPobNacionCol","BcnPobNacionPak","BcnPobNacionChi","BcnPobNacionFil","BcnPobNacionRum"],
                    titulosEjeY:["España","Italia","Francia","Reino Unido","Marruecos","Bolivia","Ecuador","Perú","Colombia","Pakistán","China","Filipinas","Rumanía"],                    
                    titulosSquaresCB:["España","Italia","Francia","Reino Unido","Marruecos","Bolivia","Ecuador","Perú","Colombia","Pakistán","China","Filipinas","Rumanía"],                    
                    filtroResumenMAT:"FBcnPobNacion",
                    filtroDatos: "filtroBcnPobNacion",
                    subfiltrosDatos:["España","Italia","francia","Reino Unido","Marruecos","Bolivia","Ecuador","Perú","Colombia","Pakistán","China","Filipinas","Rumanía"],
                    BARRAS:"habitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"habitantes",
                    EVOL_mensual:"testEM"
                  },
                  { //45 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxBcnPobTest",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnPobTest",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"habitantes",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"habitantes",
                    EVOL_mensual:"testEM"
                  },
                  { //46 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxTurAloPlazasDistrTest",
                    nomMyFunctionCB:"myFunctionCheckBoxTurAloPlazasDistrTest",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"plazas",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"plazas",
                    EVOL_mensual:"testEM"
                  },
                  { //47 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxBcnSuperficie",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnSuperficie",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"km^2",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"testEA",
                    EVOL_mensual:"testEM"
                  },
                  { //48 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxBcnPobDensidadTest",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnPobDensidadTest",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"km^2/hab.",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"km^2/hab.",
                    EVOL_mensual:"testEM"
                  },
                    { //49 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxBcnVivNuevaTest",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnVivNuevaTest",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"€/m^2",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"€/m^2",
                    EVOL_mensual:"testEM"
                  },
                    { //50 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxBcnVivSegundaManoTest",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnVivSegundaManoTest",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"€/m^2",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"€/m^2",
                    EVOL_mensual:"testEM"
                  },
                    { //51 TEST PARA DATASETS CON AMBITOGEO
                    nomMenuCB:"MenuCheckBoxBcnVivAlquilerTest",
                    nomMyFunctionCB:"myFunctionCheckBoxBcnVivAlquilerTest",
                    nomClaseCB: "checkBoxBcnPobTest",
                    nomIdSquaresCB:["IdTestBarcelona","IdTestCiutat Vella","IdTestEixample","IdTestSants-Montjuïc","IdTestLes Corts","IdTestSarrià-Sant Gervasi","IdTestGràcia","IdTestHorta-Guinardó","IdTestNou Barris","IdTestSant Andreu","IdTestSant Martí"],
                    titulosEjeY:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],                    
                    titulosSquaresCB:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    filtroResumenMAT:"FBcnPobTest",
                    filtroDatos: "filtroBcnPobLocalizacion",
                    subfiltrosDatos:["Barcelona","Ciutat Vella","Eixample","Sants-Montjuïc","Les Corts","Sarrià-Sant Gervasi","Gràcia","Horta-Guinardó","Nou Barris","Sant Andreu","Sant Martí"],
                    BARRAS:"€ mes/m^2",
                    VA_anual: "%",
                    VA_mensual:"%",
                    EVOL_anual:"€ mes/m^2",
                    EVOL_mensual:"testEM"
                  }
                  ])
  return resFiltros(id_grafico)
}

function automatizacionMenuCheckBox(numeroGrafico){
  var CHECKBOX = automaticInput(numeroGrafico)
  d3.select("#navegadorDiv").append("br")
  for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {
    d3.select("#navegadorDiv").append("br")
    d3.select("#navegadorDiv")
      .append("label").text(CHECKBOX.titulosSquaresCB[i])
      .append("input").style("width","13px").style("height","13px")
      .attr("class",CHECKBOX.nomClaseCB).attr("type","checkbox")
        .style("display", "inline-block").style("float","left").style("margin","0px 2% 0px 5px")
        .attr("onclick",CHECKBOX.nomMyFunctionCB + "()")
        .attr("id",CHECKBOX.nomIdSquaresCB[i]).property("checked","true")

  };    
}

function automatizarUpdateFiltro(numeroGrafico,IDENTIFICADOR){
  
  var CHECKBOX = automaticInput(numeroGrafico)
 
    for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {            
      
      if (eval("resumenMAT[miPosicionResumenMAT(IDENTIFICADOR)]." + CHECKBOX.filtroResumenMAT + "[i]=='vacío'")){
                    document.getElementById(CHECKBOX.nomIdSquaresCB[i]).checked = false;
                  }
      else {document.getElementById(CHECKBOX.nomIdSquaresCB[i]).checked = true;}
    };     
}

function myFunctionCheckBoxAutomatizar(numeroGrafico){
  var CHECKBOX = automaticInput(numeroGrafico)
  
  
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
  
  resumenMAT[miPosicionResumenMAT(Identificador)].Idgrafico=numeroGrafico

  // fin para que funcione cuando es master

  var filtroAuto = [];
    for (var i = 0; i < CHECKBOX.titulosSquaresCB.length; i++) {
      if (document.getElementById(CHECKBOX.nomIdSquaresCB[i]).checked == true){filtroAuto[i]=CHECKBOX.subfiltrosDatos[i]}else{filtroAuto[i]="vacío"}
    }; 

var filtroDistr = []
if (Identificador=="gr4_1"){eval("resumenMAT[3]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}
if (Identificador=="gr4_2"){eval("resumenMAT[4]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}
if (Identificador=="gr4_3"){eval("resumenMAT[5]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}
if (Identificador=="gr4_4"){eval("resumenMAT[6]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}

if (Identificador=="gr_1"){eval("resumenMAT[1]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}
if (Identificador=="gr_2"){eval("resumenMAT[2]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}

if (Identificador=="gr1"){eval("resumenMAT[0]." + CHECKBOX.filtroResumenMAT + "= filtroAuto")}



var obj = {};
obj[CHECKBOX.filtroResumenMAT] = filtroAuto
console.log(obj)

if (CONTROL_primeraVez =="SI"){
    var PrimeraVez = "NO"


    if (Identificador=="gr4_1"){
        workFrame="41"
        
        graphicId = resumenMAT[3].Idgrafico    
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[3].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,obj)                            
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[3].desdeYear,resumenMAT[3].hastaYear,"NO",resumenMAT[3].ordenado,resumenMAT[3].porcentaje,resumenMAT[3].variacionAnual,obj)                            
        }
        datos = window["graphic" + resumenMAT[3].Idgrafico];
    }
    if (Identificador=="gr4_2"){
        workFrame="42"
        graphicId = resumenMAT[4].Idgrafico
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[4].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,obj)                            
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[4].desdeYear,resumenMAT[4].hastaYear,"NO",resumenMAT[4].ordenado,resumenMAT[4].porcentaje,resumenMAT[4].variacionAnual,obj)
        }             
        datos = window["graphic" + resumenMAT[4].Idgrafico];
      }
    if (Identificador=="gr4_3"){
        workFrame="43"
        graphicId = resumenMAT[5].Idgrafico
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[5].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,obj)                                    
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[5].desdeYear,resumenMAT[5].hastaYear,"NO",resumenMAT[5].ordenado,resumenMAT[5].porcentaje,resumenMAT[5].variacionAnual,obj)        
        }                



 
        datos = window["graphic" + resumenMAT[5].Idgrafico];
    }    
    if (Identificador=="gr4_4"){
          workFrame="44"
        graphicId = resumenMAT[6].Idgrafico
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[6].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,obj)                                    
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[6].desdeYear,resumenMAT[6].hastaYear,"NO",resumenMAT[6].ordenado,resumenMAT[6].porcentaje,resumenMAT[6].variacionAnual,obj)
        }
        datos = window["graphic" + resumenMAT[6].Idgrafico];
      }    

    if (Identificador=="gr_1"){
          workFrame="21"
        graphicId = resumenMAT[1].Idgrafico
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[1].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,obj)                                    
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[1].desdeYear,resumenMAT[1].hastaYear,"NO",resumenMAT[1].ordenado,resumenMAT[1].porcentaje,resumenMAT[1].variacionAnual,obj)
        }
        datos = window["graphic" + resumenMAT[1].Idgrafico];
      }
    if (Identificador=="gr_2"){
          workFrame="22"
        graphicId = resumenMAT[2].Idgrafico
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[2].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,obj)                                    
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[2].desdeYear,resumenMAT[2].hastaYear,"NO",resumenMAT[2].ordenado,resumenMAT[2].porcentaje,resumenMAT[2].variacionAnual,obj)
        }
        datos = window["graphic" + resumenMAT[2].Idgrafico];
      }    

    if (Identificador=="gr1"){
        workFrame="1"
        graphicId = resumenMAT[0].Idgrafico
        switch(true) {
            case numeroGrafico=="43"|| numeroGrafico=="44":
                obj["FBcnPobDistr"] = resumenMAT[0].FBcnPobDistr
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,obj)                                    
                break;
            default:
                updateSeguimientoUnaLinea(Identificador,resumenMAT,workFrame,ambitoGeoIni,resumenMAT[0].desdeYear,resumenMAT[0].hastaYear,"NO",resumenMAT[0].ordenado,resumenMAT[0].porcentaje,resumenMAT[0].variacionAnual,obj)
        }
              


       
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


function suma (c,d,{a=0,b}){
       if (b){
              alert("b existe")
            }else {b=0} 
  return (d*c+a+2*b)
}
