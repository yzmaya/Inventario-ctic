  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAOAkG1s0doBtE2xArxUJ4L039ic2xUO34",
    authDomain: "proyecto-tic-294a3.firebaseapp.com",
    databaseURL: "https://proyecto-tic-294a3.firebaseio.com",
    projectId: "proyecto-tic-294a3",
    storageBucket: "proyecto-tic-294a3.appspot.com",
    messagingSenderId: "254246387905"
  };
  firebase.initializeApp(config)

function saveInformation() {

console.log('inicio boton save information');
 var uuid = $('p:first').text()
 var ALL = uuid + '/ALL';
 var inv_tic = firebase.database().ref(ALL);

var usuario = $('#info').text();
var campo1 =  $('#campo1').val();
var fecha = 'PENDIENTE DE CONFG';

//RECURSOS HUMANOS
//PERSONAL RESPONSABLE

var uno_pr = $('#uno_pr').val();
var uno_name = $('#uno_name').val();
var uno_cargo = $('#uno_cargo').val();
var uno_sede = $('#uno_sede').val();
var uno_telefono = $('#uno_telefono').val();
var uno_correo = $('#uno_correo').val();

secc1_1 = document.getElementById('contador1');
secc1_1.value = parseInt(secc1_1.value);


//PERSONAL DE APOYO

var uno_pa_especialidad = $('#uno_pa_especialidad').val();
var uno_pa_name = $('#uno_pa_name').val();
var uno_pa_academico = $('#uno_pa_perfil').val();
var uno_pa_plaza = $('#uno_pa_plaza').val();

secc1_2 = document.getElementById('contador2');
secc1_2.value = parseInt(secc1_2.value);

//PERSONAL DE APOYO CON PERFIL DE TICS DEDICANDOSE A OTRA COSA


var uno_pa_perfiltics_other_especialidad = $('#uno_pa_perfiltics_other_especialidad').val();
var uno_pa_perfiltics_other_name = $('#uno_pa_perfiltics_other_name').val();
var uno_pa_perfiltics_other_perfil = $('#uno_pa_perfiltics_other_perfil').val();
var uno_pa_perfiltics_other_plaza = $('#uno_pa_perfiltics_other_plaza').val();

secc1_3 = document.getElementById('contador3');
secc1_3.value = parseInt(secc1_3.value);

//PERSONAL DE APOYO CON PERFIL DE DESARROLLADOR DE APLICACIONES WEB


var uno_pa_apps_especialidad = $('#uno_pa_apps_especialidad').val();
var uno_pa_apps_paradigma = $('#uno_pa_apps_paradigma').val();
var uno_pa_apps_lenguaje = $('#uno_pa_apps_lenguaje').val();
var uno_pa_apps_arquitectura = $('#uno_pa_apps_arquitectura').val();
var uno_pa_apps_name = $('#uno_pa_apps_name').val();
var uno_pa_apps_perfil = $('#uno_pa_apps_perfil').val();
var uno_pa_apps_plaza = $('#uno_pa_apps_plaza').val();

secc1_4 = document.getElementById('contador4');
secc1_4.value = parseInt(secc1_4.value);

//PERSONAL DE APOYP CON PERFIL DE BASES DE DATOS

var uno_pa_db_especialidad = $('#uno_pa_db_especialidad').val();
var uno_pa_db_paradigma = $('#uno_pa_db_paradigma').val();
var uno_pa_db_motor = $('#uno_pa_db_motor').val();
var uno_pa_db_arquitectura = $('#uno_pa_db_arquitectura').val();
var uno_pa_db_name = $('#uno_pa_db_name').val();
var uno_pa_db_perfil = $('#uno_pa_db_perfil').val();
var uno_pa_db_plaza = $('#uno_pa_db_plaza').val();

secc1_5 = document.getElementById('contador5');
secc1_5.value = parseInt(secc1_5.value);

//COMPUTADORAS PERSONALES EN OPERACIÓN

var E_CP_OPERACION_inmueble = $('#E_CP_OPERACION_inmueble').val();
var E_CP_OPERACION_tipo = $('#E_CP_OPERACION_tipo').val();
var E_CP_OPERACION_cantidad = $('#E_CP_OPERACION_cantidad').val();
var E_CP_OPERACION_antiguedad = $('#E_CP_OPERACION_antiguedad').val();
var E_CP_OPERACION_mtto = $('#E_CP_OPERACION_mtto').val();
var E_CP_OPERACION_origen = $('#E_CP_OPERACION_origen').val();

secc2_1 = document.getElementById('contador6');
secc2_1.value = parseInt(secc2_1.value);

//COMPUTADORAS PERSONALES SIN USO

var E_CP_SINUSO_inmueble = $('#E_CP_SINUSO_inmueble').val();
var E_CP_SINUSO_tipo = $('#E_CP_SINUSO_tipo').val();
var E_CP_SINUSO_cantidad = $('#E_CP_SINUSO_cantidad').val();
var E_CP_SINUSO_antiguedad = $('#E_CP_SINUSO_antiguedad').val();
var E_CP_SINUSO_razon = $('#E_CP_SINUSO_razon').val();
var E_CP_SINUSO_origen = $('#E_CP_SINUSO_origen').val();

secc2_2 = document.getElementById('contador7');
secc2_2.value = parseInt(secc2_2.value);

//SERVIDORES

var E_SERV_ubicacion = $('#E_SERV_ubicacion').val();
var E_SERV_resumen = $('#E_SERV_resumen').val();
var E_SERV_cantidad = $('#E_SERV_cantidad').val();
var E_SERV_origen = $('#E_SERV_origen').val();
var E_SERV_proposito = $('#E_SERV_proposito').val();


secc2_3 = document.getElementById('contador8');
secc2_3.value = parseInt(secc2_3.value);


//IMPRESORAS Y ESCANERES

var E_IMP_ESC_inmueble = $('#E_IMP_ESC_inmueble').val();
var E_IMP_ESC_perfil_said = $('#E_IMP_ESC_perfil_said').val();
var E_IMP_ESC_cantidad = $('#E_IMP_ESC_cantidad').val();
var E_IMP_ESC_origen = $('#E_IMP_ESC_origen').val();
var E_IMP_ESC_conectividad = $('#E_IMP_ESC_conectividad').val();

secc2_4 = document.getElementById('contador9');
secc2_4.value = parseInt(secc2_4.value);


//EQUIPOS AUDIOVISUALES

var E_EA_inmueble = $('#E_EA_inmueble').val();
var E_EA_resumen = $('#E_EA_resumen').val();
var E_EA_cantidad = $('#E_EA_cantidad').val();
var E_EA_origen = $('#E_EA_origen').val();


secc2_5 = document.getElementById('contador10');
secc2_5.value = parseInt(secc2_5.value);


//EQUIPOS OTROS DISPOSITIVOS

var E_OD_inmueble = $('#E_OD_inmueble').val();
var E_OD_resumen = $('#E_OD_resumen').val();
var E_OD_cantidad = $('#E_OD_cantidad').val();
var E_OD_origen = $('#E_OD_origen').val();


secc2_6 = document.getElementById('contador11');
secc2_6.value = parseInt(secc2_6.value);

//TELEFONIA IP

var SC_IP_inmueble = $('#SC_IP_inmueble').val();
var SC_IP_perfil = $('#SC_IP_perfil').val();
var SC_IP_cantidad = $('#SC_IP_cantidad').val();


secc3_1 = document.getElementById('contador12');
secc3_1.value = parseInt(secc3_1.value);


//INFRAESTRUCTURA DE REDES

var SC_IR_inmueble = $('#SC_IR_inmueble').val();
var SC_IR_resumen = $('#SC_IR_resumen').val();
var SC_IR_cantidad = $('#SC_IR_cantidad').val();
var SC_IR_ptos_used = $('#SC_IR_ptos_used').val();
var SC_IR_ptos_inused = $('#SC_IR_ptos_inused').val();
var SC_IR_switch_available = $('#SC_IR_switch_available').val();
var SC_IR_origen = $('#SC_IR_origen').val();

secc3_2 = document.getElementById('contador13');
secc3_2.value = parseInt(secc3_2.value);

//ENLACES A INTERNET DISTINTOS A RIMA

var SC_OS_tipo = $('#SC_OS_tipo').val();
var SC_OS_anchobanda = $('#SC_OS_anchobanda').val();
var SC_OS_proveedor = $('#SC_OS_proveedor').val();
var SC_OS_area_usuaria = $('#SC_OS_area_usuaria').val();
var SC_OS_cantidad = $('#SC_OS_cantidad').val();
var SC_OS_nombre_cash = $('#SC_OS_nombre_cash').val();

secc3_3 = document.getElementById('contador14');
secc3_3.value = parseInt(secc3_3.value);


//SOFTWARE COMERCIAL

var L_SC_paquete = $('#L_SC_paquete').val();
var L_SC_version = $('#L_SC_version').val();
var L_SC_so = $('#L_SC_so').val();
var L_SC_cant_total_lic = $('#L_SC_cant_total_lic').val();
var L_SC_cant_lic_en_uso = $('#L_SC_cant_lic_en_uso').val();
var L_SC_origen = $('#L_SC_origen').val();

secc4_1 = document.getElementById('contador15');
secc4_1.value = parseInt(secc4_1.value);

//SOFTWARE LIBRE

var L_SL_paquete = $('#L_SL_paquete').val();
var L_SL_version = $('#L_SL_version').val();
var L_SL_so = $('#L_SL_so').val();
var L_SL_cant_lic = $('#L_SL_cant_lic').val();


secc4_2 = document.getElementById('contador16');
secc4_2.value = parseInt(secc4_2.value);

//SISTEMAS INFORMATICOS EN PRODUCCION

var SA_SIP_nombre = $('#SA_SIP_nombre').val();
var SA_SIP_proposito = $('#SA_SIP_proposito').val();
var SA_SIP_desarrollo = $('#SA_SIP_desarrollo').val();
var SA_SIP_pregunta = $('#SA_SIP_pregunta').val();
var SA_SIP_cantidad = $('#SA_SIP_cantidad').val();


secc5_1 = document.getElementById('contador17');
secc5_1.value = parseInt(secc5_1.value);


//SISTEMAS INFORMATICOS EN DESARROLLO

var SA_SID_nombre = $('#SA_SID_nombre').val();
var SA_SID_proposito = $('#SA_SID_proposito').val();
var SA_SID_desarrollo = $('#SA_SID_desarrollo').val();
var SA_SID_pregunta = $('#SA_SID_pregunta').val();
var SA_SID_cantidad = $('#SA_SID_cantidad').val();


secc5_2 = document.getElementById('contador18');
secc5_2.value = parseInt(secc5_2.value);

//MATERIALES AUDIOVISUALES

var M_AV_titulo = $('#M_AV_titulo').val();
var M_AV_descripcion = $('#M_AV_descripcion').val();
var M_AV_publico = $('#M_AV_publico').val();
var M_AV_ano = $('#M_AV_ano').val();
var M_AV_autor = $('#M_AV_autor').val();


secc6_1 = document.getElementById('contador19');
secc6_1.value = parseInt(secc6_1.value);


//NECESIUDADES


var N_OR_tipo = $('#N_OR_tipo').val();
var N_OR_proposito = $('#N_OR_proposito').val();
var N_OR_caracteristicas = $('#N_OR_caracteristicas').val();
var N_OR_cantidad = $('#N_OR_cantidad').val();
var N_OR_causa = $('#N_OR_causa').val();


secc6_2 = document.getElementById('contador20');
secc6_2.value = parseInt(secc6_2.value);


//se guardan en ALL

inv_tic.set({
    usuario: usuario,
    unidad_responsable: campo1,
    fecha_registro: fecha,

    PR_0: uno_pr,
    PR_1_name: uno_name,
    PR_1_cargo: uno_cargo,
    PR_1_sede: uno_sede,
    PR_1_tel: uno_telefono,
    PR_1_email: uno_correo,
    SECCION1_1: secc1_1.value,

    PA_1_especialidad: uno_pa_especialidad,
    PA_1_name: uno_pa_name,
    PA_1_academico: uno_pa_academico,
    PA_1_plaza: uno_pa_plaza,
    SECCION1_2: secc1_2.value,

    PA_PERFIL_TICS_especialidad: uno_pa_perfiltics_other_especialidad, 
    PA_PERFIL_TICS_name: uno_pa_perfiltics_other_name, 
    PA_PERFIL_TICS_academico: uno_pa_perfiltics_other_perfil, 
    PA_PERFIL_TICS_plaza: uno_pa_perfiltics_other_plaza, 
    SECCION1_3: secc1_3.value,

    PA_PERFIL_WEBDEVELOPER_especialidad: uno_pa_apps_especialidad,
    PA_PERFIL_WEBDEVELOPER_paradigma: uno_pa_apps_paradigma,
    PA_PERFIL_WEBDEVELOPER_lenguaje: uno_pa_apps_lenguaje,
    PA_PERFIL_WEBDEVELOPER_arquitectura: uno_pa_apps_arquitectura,
    PA_PERFIL_WEBDEVELOPER_name: uno_pa_apps_name,
    PA_PERFIL_WEBDEVELOPER_academico: uno_pa_apps_perfil,
    PA_PERFIL_WEBDEVELOPER_plaza: uno_pa_apps_plaza,
    SECCION1_4: secc1_4.value,

    PA_PERFIL_DATABASE_especialidad: uno_pa_db_especialidad,
    PA_PERFIL_DATABASE_paradigma: uno_pa_db_paradigma,
    PA_PERFIL_DATABASE_motor: uno_pa_db_motor,
    PA_PERFIL_DATABASE_arquitectura: uno_pa_db_arquitectura,
    PA_PERFIL_DATABASE_name: uno_pa_db_name,
    PA_PERFIL_DATABASE_academico: uno_pa_db_perfil,
    PA_PERFIL_DATABASE_plaza: uno_pa_db_plaza,
    SECCION1_5: secc1_5.value,

    E_CP_OPERACION_1: E_CP_OPERACION_inmueble,
    E_CP_OPERACION_2: E_CP_OPERACION_tipo,
    E_CP_OPERACION_3: E_CP_OPERACION_cantidad,
    E_CP_OPERACION_4: E_CP_OPERACION_antiguedad,
    E_CP_OPERACION_5: E_CP_OPERACION_mtto,
    E_CP_OPERACION_6: E_CP_OPERACION_origen,
    SECCION2_1: secc2_1.value,

    E_CP_SINUSO_1: E_CP_SINUSO_inmueble,
    E_CP_SINUSO_2: E_CP_SINUSO_tipo,
    E_CP_SINUSO_3: E_CP_SINUSO_cantidad,
    E_CP_SINUSO_4: E_CP_SINUSO_antiguedad,
    E_CP_SINUSO_5: E_CP_SINUSO_razon,
    E_CP_SINUSO_6: E_CP_SINUSO_origen,
    SECCION2_2: secc2_2.value,

    E_SERV_1: E_SERV_ubicacion,
    E_SERV_2: E_SERV_resumen,
    E_SERV_3: E_SERV_cantidad,
    E_SERV_4: E_SERV_origen,
    E_SERV_5: E_SERV_proposito,
    SECCION2_3: secc2_3.value,

    E_IMP_ESC_1: E_IMP_ESC_inmueble,
    E_IMP_ESC_2: E_IMP_ESC_perfil_said,
    E_IMP_ESC_3: E_IMP_ESC_cantidad,
    E_IMP_ESC_4: E_IMP_ESC_origen,
    E_IMP_ESC_5: E_IMP_ESC_conectividad,
    SECCION2_4: secc2_4.value,

    E_EA_1: E_EA_inmueble,
    E_EA_2: E_EA_resumen,
    E_EA_3: E_EA_cantidad,
    E_EA_4: E_EA_origen,
    SECCION2_5: secc2_5.value,

    E_OD_1: E_OD_inmueble,
    E_OD_2: E_OD_resumen,
    E_OD_3: E_OD_cantidad,
    E_OD_4: E_OD_origen,
    SECCION2_6: secc2_6.value,

    SC_IP_1: SC_IP_inmueble,
    SC_IP_2: SC_IP_perfil,
    SC_IP_3: SC_IP_cantidad,
    SECCION3_1: secc3_1.value,

    SC_IR_1: SC_IR_inmueble,
    SC_IR_2: SC_IR_resumen,
    SC_IR_3: SC_IR_cantidad,
    SC_IR_4: SC_IR_ptos_used,
    SC_IR_5: SC_IR_ptos_inused,
    SC_IR_6: SC_IR_switch_available,
    SC_IR_7: SC_IR_origen,
    SECCION3_2: secc3_2.value,

    SC_OS_1: SC_OS_tipo,
    SC_OS_2: SC_OS_anchobanda,
    SC_OS_3: SC_OS_proveedor,
    SC_OS_4: SC_OS_area_usuaria,
    SC_OS_5: SC_OS_cantidad,
    SC_OS_6: SC_OS_nombre_cash,
    SECCION3_3: secc3_3.value,

    L_SC_1: L_SC_paquete,
    L_SC_2: L_SC_version,
    L_SC_3: L_SC_so,
    L_SC_4: L_SC_cant_total_lic,
    L_SC_5: L_SC_cant_lic_en_uso,
    L_SC_6: L_SC_origen,
    SECCION4_1: secc4_1.value,

    L_SL_1: L_SL_paquete,
    L_SL_2: L_SL_version,
    L_SL_3: L_SL_so,
    L_SL_4: L_SL_cant_lic,
    SECCION4_2: secc4_2.value,

    SA_SIP_1: SA_SIP_nombre,
    SA_SIP_2: SA_SIP_proposito,
    SA_SIP_3: SA_SIP_desarrollo,
    SA_SIP_4: SA_SIP_pregunta,
    SA_SIP_5: SA_SIP_cantidad,
    SECCION5_1: secc5_1.value,


    SA_SID_1: SA_SID_nombre,
    SA_SID_2: SA_SID_proposito,
    SA_SID_3: SA_SID_desarrollo,
    SA_SID_4: SA_SID_pregunta,
    SA_SID_5: SA_SID_cantidad,
    SECCION5_2: secc5_2.value, 

    M_AV_1: M_AV_titulo,
    M_AV_2: M_AV_descripcion,
    M_AV_3: M_AV_publico,
    M_AV_4: M_AV_ano,
    M_AV_5: M_AV_autor,
    SECCION6_1: secc6_1.value, 

    N_OR_1: N_OR_tipo,
    N_OR_2: N_OR_proposito,
    N_OR_3: N_OR_caracteristicas,
    N_OR_4: N_OR_cantidad,
    N_OR_5: N_OR_causa,
    SECCION6_2: secc6_2.value 

  });


//SE GUARDAN LOS EXTRAS DE PERSONAL RESPONSABLE
res = document.getElementById("contador1");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_PR' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

console.log(cont1);
  var A = $('#'+cont1+'_PersonalR').val();
  var B = $('#'+cont1+'_name').val();
  var C = $('#'+cont1+'_cargo').val();
  var D = $('#'+cont1+'_sede').val();
  var E = $('#'+cont1+'_telefono').val();
  var F = $('#'+cont1+'_correo').val();

   ch_pr2.set({
       E_PR1: A,
       E_PR2: B,
       E_PR3: C,
       E_PR4: D,
       E_PR5: E,
       E_PR6: F
      }); 

   
    }

    //SE GUARDAN LOS EXTRAS DE PERSONAL DE APOYO
res = document.getElementById("contador2");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_PA' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_PA_especialidad').val();
  var B = $('#'+cont1+'_PA_nombre').val();
  var C = $('#'+cont1+'_PA_perfil').val();
  var D = $('#'+cont1+'_PA_tipo').val();

   ch_pr2.set({
       E_PA1: A,
       E_PA2: B,
       E_PA3: C,
       E_PA4: D
      }); 

   
    }

       //SE GUARDAN LOS EXTRAS DE PERSONAL DE APOYO DE TICS 
res = document.getElementById("contador3");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_PA_PERFILTICS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_PA_perfiltics_especialidad').val();
  var B = $('#'+cont1+'_PA_perfiltics_name').val();
  var C = $('#'+cont1+'_PA_perfiltics_perfil').val();
  var D = $('#'+cont1+'_PA_perfiltics_plaza').val();

   ch_pr2.set({
       E_PA_PERFILTICS1: A,
       E_PA_PERFILTICS2: B,
       E_PA_PERFILTICS3: C,
       E_PA_PERFILTICS4: D
      }); 

   
    }

 //SE GUARDAN LOS EXTRAS DE PERSONAL DE APOYO DE DESARROLO DE WEB APPS
res = document.getElementById("contador4");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_PA_PERFIL_WEBAPPS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_PA_WAPPS_especialidad').val();
  var B = $('#'+cont1+'_PA_WAPPS_paradigma').val();
  var C = $('#'+cont1+'_PA_WAPPS_lenguaje').val();
  var D = $('#'+cont1+'_PA_WAPPS_arquitectura').val();
  var E = $('#'+cont1+'_PA_WAPPS_nombre').val();
  var F = $('#'+cont1+'_PA_WAPPS_perfil').val();
  var G = $('#'+cont1+'_PA_WAPPS_plaza').val();

   ch_pr2.set({
       E_PA_PERFIL_WEBAPPS1: A,
       E_PA_PERFIL_WEBAPPS2: B,
       E_PA_PERFIL_WEBAPPS3: C,
       E_PA_PERFIL_WEBAPPS4: D,
       E_PA_PERFIL_WEBAPPS5: E,
       E_PA_PERFIL_WEBAPPS6: F,
       E_PA_PERFIL_WEBAPPS7: G
      }); 

   
    }

//SE GUARDAN LOS EXTRAS DE PERSONAL DE APOYO DE DESARROLO DE BASES DE DATOS
res = document.getElementById("contador5");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_PA_PERFIL_DBA' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_PA_DBA_especialidad').val();
  var B = $('#'+cont1+'_PA_DBA_paradigma').val();
  var C = $('#'+cont1+'_PA_DBA_basededatos').val();
  var D = $('#'+cont1+'_PA_DBA_arquitectura').val();
  var E = $('#'+cont1+'_PA_DBA_nombre').val();
  var F = $('#'+cont1+'_PA_DBA_perfil').val();
  var G = $('#'+cont1+'_PA_DBA_plaza').val();


   ch_pr2.set({
       E_PA_PERFIL_DBA1: A,
       E_PA_PERFIL_DBA2: B,
       E_PA_PERFIL_DBA3: C,
       E_PA_PERFIL_DBA4: D,
       E_PA_PERFIL_DBA5: E,
       E_PA_PERFIL_DBA6: F,
       E_PA_PERFIL_DBA7: G
      }); 

   
    }

     //SE GUARDAN LOS EXTRAS DE COMPUTADORAS PERSONALES EN OPERACIÓN
res = document.getElementById("contador6");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_CP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_CP_inmueble').val();
  var B = $('#'+cont1+'_CP_tipo').val();
  var C = $('#'+cont1+'_CP_cantidad').val();
  var D = $('#'+cont1+'_CP_antiguedad').val();
  var E = $('#'+cont1+'_CP_mtto').val();
  var F = $('#'+cont1+'_CP_origen').val();
  

   ch_pr2.set({
       E_CP1: A,
       E_CP2: B,
       E_CP3: C,
       E_CP4: D,
       E_CP5: E,
       E_CP6: F
      }); 

   
    }

  //SE GUARDAN LOS EXTRAS DE COMPUTADORAS PERSONALES SIN USO
res = document.getElementById("contador7");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_CP_SINUSO' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_CP_SINUSO_inmueble').val();
  var B = $('#'+cont1+'_CP_SINUSO_tipo').val();
  var C = $('#'+cont1+'_CP_SINUSO_cantidad').val();
  var D = $('#'+cont1+'_CP_SINUSO_antiguedad').val();
  var E = $('#'+cont1+'_CP_SINUSO_causa').val();
  var F = $('#'+cont1+'_CP_SINUSO_origen').val();
  

   ch_pr2.set({
       E_CP_SINUSO1: A,
       E_CP_SINUSO2: B,
       E_CP_SINUSO3: C,
       E_CP_SINUSO4: D,
       E_CP_SINUSO5: E,
       E_CP_SINUSO6: F
      }); 

   
    }

     //SE GUARDAN LOS EXTRAS DE SERVIDORES
res = document.getElementById("contador8");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_SERVS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_SERV_ubicacion').val();
  var B = $('#'+cont1+'_SERV_resumen').val();
  var C = $('#'+cont1+'_SERV_cantidad').val();
  var D = $('#'+cont1+'_SERV_origen').val();
  var E = $('#'+cont1+'_SERV_proposito').val();

   ch_pr2.set({
       E_SERV1: A,
       E_SERV2: B,
       E_SERV3: C,
       E_SERV4: D,
       E_SERV5: E
      }); 

   
    }


     //SE GUARDAN LOS EXTRAS DE IMPRESORAS Y ESCANERES
res = document.getElementById("contador9");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_IMP_ESC' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_IE_inmueble').val();
  var B = $('#'+cont1+'_IE_perfil').val();
  var C = $('#'+cont1+'_IE_cantidad').val();
  var D = $('#'+cont1+'_IE_origen').val();
  var E = $('#'+cont1+'_IE_conectividad').val();

   ch_pr2.set({
       E_IE1: A,
       E_IE2: B,
       E_IE3: C,
       E_IE4: D,
       E_IE5: E
      }); 
    }


     //SE GUARDAN LOS EXTRAS DE EQUIPO AUDIOVISUAL
res = document.getElementById("contador10");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_EA' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_EA_inmueble').val();
  var B = $('#'+cont1+'_EA_perfil').val();
  var C = $('#'+cont1+'_EA_cantidad').val();
  var D = $('#'+cont1+'_EA_origen').val();


   ch_pr2.set({
       E_EA1: A,
       E_EA2: B,
       E_EA3: C,
       E_EA4: D
      }); 
    }

     //SE GUARDAN LOS EXTRAS DE OTROS DISPOSITIVOS
res = document.getElementById("contador11");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_OD' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_OD_inmueble').val();
  var B = $('#'+cont1+'_OD_perfil').val();
  var C = $('#'+cont1+'_OD_cantidad').val();
  var D = $('#'+cont1+'_OD_origen').val();


   ch_pr2.set({
       E_OD1: A,
       E_OD2: B,
       E_OD3: C,
       E_OD4: D
      }); 
    }


     //SE GUARDAN LOS EXTRAS DE TELEFONIA IP
res = document.getElementById("contador12");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_T_IP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_T_IP_inmueble').val();
  var B = $('#'+cont1+'_T_IP_perfil').val();
  var C = $('#'+cont1+'_T_IP_cantidad').val();


   ch_pr2.set({
       E_T_IP1: A,
       E_T_IP2: B,
       E_T_IP3: C
      }); 
    }

    //SE GUARDAN LOS EXTRAS DE INFRAESTRCTURA DE REDES
res = document.getElementById("contador13");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_IR' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_IR_inmueble').val();
  var B = $('#'+cont1+'_IR_resumen').val();
  var C = $('#'+cont1+'_IR_cantidad').val();
  var D = $('#'+cont1+'_IR_puertos_ocupados').val();
  var E = $('#'+cont1+'_IR_puertos_desocupados').val();
  var F = $('#'+cont1+'_IR_switches_desocupados').val();
  var G = $('#'+cont1+'_IR_origen').val();



   ch_pr2.set({
       E_IR1: A,
       E_IR2: B,
       E_IR3: C,
       E_IR4: D,
       E_IR5: E,
       E_IR6: F,
       E_IR7: G
      }); 
    }

    //SE GUARDAN LOS EXTRAS DE OTROS SERVICIOS
res = document.getElementById("contador14");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_OS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_OS_tipo').val();
  var B = $('#'+cont1+'_OS_ancho_banda').val();
  var C = $('#'+cont1+'_OS_proveedor').val();
  var D = $('#'+cont1+'_OS_area').val();
  var E = $('#'+cont1+'_OS_cantidad').val();
  var F = $('#'+cont1+'_OS_nombre').val();

   ch_pr2.set({
       E_OS1: A,
       E_OS2: B,
       E_OS3: C,
       E_OS4: D,
       E_OS5: E,
       E_OS6: F

      }); 
    }

   //SE GUARDAN LOS EXTRAS DE SOFTWARE COMERCIAL
res = document.getElementById("contador15");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_SC' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_SC_paquete').val();
  var B = $('#'+cont1+'_SC_version').val();
  var C = $('#'+cont1+'_SC_so').val();
  var D = $('#'+cont1+'_SC_licencias').val();
  var E = $('#'+cont1+'_SC_licencias_en_uso').val();
  var F = $('#'+cont1+'_SC_origen').val();


   ch_pr2.set({
       E_SC1: A,
       E_SC2: B,
       E_SC3: C,
       E_SC4: D,
       E_SC5: E,
       E_SC6: F
      }); 
    }

 //SE GUARDAN LOS EXTRAS DE SOFTWARE LIBRE
res = document.getElementById("contador16");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_SL' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_SL_paquete').val();
  var B = $('#'+cont1+'_SL_version').val();
  var C = $('#'+cont1+'_SL_so').val();
  var D = $('#'+cont1+'_SL_licencias').val();


   ch_pr2.set({
       E_SL1: A,
       E_SL2: B,
       E_SL3: C,
       E_SL4: D
      }); 
    }

 //SE GUARDAN LOS EXTRAS DE SISTEMA DE PRODUCCIÓN
res = document.getElementById("contador17");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_SIP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_SIP_nombre').val();
  var B = $('#'+cont1+'_SIP_proposito').val();
  var C = $('#'+cont1+'_SIP_desarrollo').val();
  var D = $('#'+cont1+'_SIP_documentado').val();
  var E = $('#'+cont1+'_SIP_cantidad').val();


   ch_pr2.set({
       E_SIP1: A,
       E_SIP2: B,
       E_SIP3: C,
       E_SIP4: D,
       E_SIP5: E
      }); 
    }

 //SE GUARDAN LOS EXTRAS DE SISTEMA DE DESARROLLO
res = document.getElementById("contador18");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_SID' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_SID_nombre').val();
  var B = $('#'+cont1+'_SID_proposito').val();
  var C = $('#'+cont1+'_SID_desarrollo').val();
  var D = $('#'+cont1+'_SID_documentado').val();
  var E = $('#'+cont1+'_SID_cantidad').val();


   ch_pr2.set({
       E_SID1: A,
       E_SID2: B,
       E_SID3: C,
       E_SID4: D,
       E_SID5: E
      }); 
    }

    //SE GUARDAN LOS EXTRAS DE MATERIAL AUDIOVISUAL
res = document.getElementById("contador19");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_M_A' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_M_A_titulo').val();
  var B = $('#'+cont1+'_M_A_descripcion').val();
  var C = $('#'+cont1+'_M_A_p_objetivo').val();
  var D = $('#'+cont1+'_M_A_ano_creacion').val();
  var E = $('#'+cont1+'_M_A_autor').val();

   ch_pr2.set({
       E_M_A1: A,
       E_M_A2: B,
       E_M_A3: C,
       E_M_A4: D,
       E_M_A5: E
      }); 
    }


//SE GUARDAN LOS EXTRAS DE NECESIDADES DE TICS
res = document.getElementById("contador20");
 res.value = parseInt(res.value);

 
for (var i=0; i< res.value; i++) {
  var cont1 = 1;
  cont1 = cont1 + i;

  var ch_pr = uuid + '/E_NTIC' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

//console.log(cont1);
  var A = $('#'+cont1+'_NTIC_tipo').val();
  var B = $('#'+cont1+'_NTIC_proposito').val();
  var C = $('#'+cont1+'_NTIC_caracteristicas').val();
  var D = $('#'+cont1+'_NTIC_cantidad').val();
  var E = $('#'+cont1+'_NTIC_causa').val();


   ch_pr2.set({
       E_NTIC1: A,
       E_NTIC2: B,
       E_NTIC3: C,
       E_NTIC4: D,
       E_NTIC5: E
      }); 
    }

setTimeout(function(){ 
  location.href = "form.html"; }, 10);

console.log('final boton save js');
alert('Guardado');



//CIERRA LA FUNCION SAVE INFORMATION()
}