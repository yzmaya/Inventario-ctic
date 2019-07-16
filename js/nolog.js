firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in. 

    if(user != null){

    var email_id = user.email;
    document.getElementById("info").innerHTML = email_id;
    var uid = user.uid;
     document.getElementById("uid").innerHTML = uid; 
  //   var timer = setTimeout("getInfo()", 1);

console.log('inicio get info');
var unico = $('p:first').text()
var unico2 = unico + '/ALL'
var normal = firebase.database().ref(unico2);

//SE CARGAN LOS DATOS GUARDADOS ANTERIORMENTE

  normal.on('value', function(data) {
//PERSONAL RESPONSABLE
 
  $('#campo1').val(data.val().unidad_responsable);
  $('#uno_pr').val(data.val().PR_0);
  $('#uno_name').val(data.val().PR_1_name);
  $('#uno_cargo').val(data.val().PR_1_cargo);
  $('#uno_sede').val(data.val().PR_1_sede);
  $('#uno_telefono').val(data.val().PR_1_tel);
  $('#uno_correo').val(data.val().PR_1_email);
  

  //PERSONAL DE APOYO
  $('#uno_pa_especialidad').val(data.val().PA_1_especialidad);
  $('#uno_pa_name').val(data.val().PA_1_name);
  $('#uno_pa_perfil').val(data.val().PA_1_academico);
  $('#uno_pa_plaza').val(data.val().PA_1_plaza);

  //PERSONAL DE APOYO CON PERFIL DE TICS DEDICANDOSE A OTRA COSA

$('#uno_pa_perfiltics_other_especialidad').val(data.val().PA_PERFIL_TICS_especialidad);
  $('#uno_pa_perfiltics_other_name').val(data.val().PA_PERFIL_TICS_name);
  $('#uno_pa_perfiltics_other_perfil').val(data.val().PA_PERFIL_TICS_academico);
  $('#uno_pa_perfiltics_other_plaza').val(data.val().PA_PERFIL_TICS_plaza);

  //PERSONAL CON HABILIDADES DE PROGRAMACIÓN
  
  $('#uno_pa_apps_especialidad').val(data.val().PA_PERFIL_WEBDEVELOPER_especialidad);
  $('#uno_pa_apps_paradigma').val(data.val().PA_PERFIL_WEBDEVELOPER_paradigma);
  $('#uno_pa_apps_lenguaje').val(data.val().PA_PERFIL_WEBDEVELOPER_lenguaje);
  $('#uno_pa_apps_arquitectura').val(data.val().PA_PERFIL_WEBDEVELOPER_arquitectura);
  $('#uno_pa_apps_name').val(data.val().PA_PERFIL_WEBDEVELOPER_name);
  $('#uno_pa_apps_perfil').val(data.val().PA_PERFIL_WEBDEVELOPER_academico);
  $('#uno_pa_apps_plaza').val(data.val().PA_PERFIL_WEBDEVELOPER_plaza);

  //PERSONAL CON HABILIDADES DE BASES DE DATOS
  
  $('#uno_pa_db_especialidad').val(data.val().PA_PERFIL_DATABASE_especialidad);
  $('#uno_pa_db_paradigma').val(data.val().PA_PERFIL_DATABASE_paradigma);
  $('#uno_pa_db_motor').val(data.val().PA_PERFIL_DATABASE_motor);
  $('#uno_pa_db_arquitectura').val(data.val().PA_PERFIL_DATABASE_arquitectura);
  $('#uno_pa_db_name').val(data.val().PA_PERFIL_DATABASE_name);
  $('#uno_pa_db_perfil').val(data.val().PA_PERFIL_DATABASE_academico);
  $('#uno_pa_db_plaza').val(data.val().PA_PERFIL_DATABASE_plaza);


//COMPUTADORAS EN OPERACIÓN

$('#E_CP_OPERACION_inmueble').val(data.val().E_CP_OPERACION_1);
$('#E_CP_OPERACION_tipo').val(data.val().E_CP_OPERACION_2);
$('#E_CP_OPERACION_cantidad').val(data.val().E_CP_OPERACION_3);
$('#E_CP_OPERACION_antiguedad').val(data.val().E_CP_OPERACION_4);
$('#E_CP_OPERACION_mtto').val(data.val().E_CP_OPERACION_5);
$('#E_CP_OPERACION_origen').val(data.val().E_CP_OPERACION_6);

//COMPUTADORAS SIN USO

$('#E_CP_SINUSO_inmueble').val(data.val().E_CP_SINUSO_1);
$('#E_CP_SINUSO_tipo').val(data.val().E_CP_SINUSO_2);
$('#E_CP_SINUSO_cantidad').val(data.val().E_CP_SINUSO_3);
$('#E_CP_SINUSO_antiguedad').val(data.val().E_CP_SINUSO_4);
$('#E_CP_SINUSO_razon').val(data.val().E_CP_SINUSO_5);
$('#E_CP_SINUSO_origen').val(data.val().E_CP_SINUSO_6);

//SERVIDORES

$('#E_SERV_ubicacion').val(data.val().E_SERV_1);
$('#E_SERV_resumen').val(data.val().E_SERV_2);
$('#E_SERV_cantidad').val(data.val().E_SERV_3);
$('#E_SERV_origen').val(data.val().E_SERV_4);
$('#E_SERV_proposito').val(data.val().E_SERV_5);

//IMPRESORAS Y ESCANERES

$('#E_IMP_ESC_inmueble').val(data.val().E_IMP_ESC_1);
$('#E_IMP_ESC_perfil_said').val(data.val().E_IMP_ESC_2);
$('#E_IMP_ESC_cantidad').val(data.val().E_IMP_ESC_3);
$('#E_IMP_ESC_origen').val(data.val().E_IMP_ESC_4);
$('#E_IMP_ESC_conectividad').val(data.val().E_IMP_ESC_5);

//EQUIPOS AUDIOVISUALES

$('#E_EA_inmueble').val(data.val().E_EA_1);
$('#E_EA_resumen').val(data.val().E_EA_2);
$('#E_EA_cantidad').val(data.val().E_EA_3);
$('#E_EA_origen').val(data.val().E_EA_4);

//EQUIPOS OTROS DISPOSITIVOS

$('#E_OD_inmueble').val(data.val().E_OD_1);
$('#E_OD_resumen').val(data.val().E_OD_2);
$('#E_OD_cantidad').val(data.val().E_OD_3);
$('#E_OD_origen').val(data.val().E_OD_4);

//TELEFONIA IP

$('#SC_IP_inmueble').val(data.val().SC_IP_1);
$('#SC_IP_perfil').val(data.val().SC_IP_2);
$('#SC_IP_cantidad').val(data.val().SC_IP_3);

//INFRAESTRUCTURA DE REDES

$('#SC_IR_inmueble').val(data.val().SC_IR_1);
$('#SC_IR_resumen').val(data.val().SC_IR_2);
$('#SC_IR_cantidad').val(data.val().SC_IR_3);
$('#SC_IR_ptos_used').val(data.val().SC_IR_4);
$('#SC_IR_ptos_inused').val(data.val().SC_IR_5);
$('#SC_IR_switch_available').val(data.val().SC_IR_6);
$('#SC_IR_origen').val(data.val().SC_IR_7);

//ENLACES A INTERNET DISTINTOS A RIMA
$('#SC_OS_tipo').val(data.val().SC_OS_1);
$('#SC_OS_anchobanda').val(data.val().SC_OS_2);
$('#SC_OS_proveedor').val(data.val().SC_OS_3);
$('#SC_OS_area_usuaria').val(data.val().SC_OS_4);
$('#SC_OS_cantidad').val(data.val().SC_OS_5);
$('#SC_OS_nombre_cash').val(data.val().SC_OS_6);

//SOFTWARE COMERCIAL

$('#L_SC_paquete').val(data.val().L_SC_1);
$('#L_SC_version').val(data.val().L_SC_2);
$('#L_SC_so').val(data.val().L_SC_3);
$('#L_SC_cant_total_lic').val(data.val().L_SC_4);
$('#L_SC_cant_lic_en_uso').val(data.val().L_SC_5);
$('#L_SC_origen').val(data.val().L_SC_6);

//SOFTWARE LIBRE

$('#L_SL_paquete').val(data.val().L_SL_1);
$('#L_SL_version').val(data.val().L_SL_2);
$('#L_SL_so').val(data.val().L_SL_3);
$('#L_SL_cant_lic').val(data.val().L_SL_4);

//SISTEMAS INFORMATICOS EN PRODUCCION

$('#SA_SIP_nombre').val(data.val().SA_SIP_1);
$('#SA_SIP_proposito').val(data.val().SA_SIP_2);
$('#SA_SIP_desarrollo').val(data.val().SA_SIP_3);
$('#SA_SIP_pregunta').val(data.val().SA_SIP_4);
$('#SA_SIP_cantidad').val(data.val().SA_SIP_5);

//SISTEMAS INFORMATICOS EN DESARROLLO

$('#SA_SID_nombre').val(data.val().SA_SID_1);
$('#SA_SID_proposito').val(data.val().SA_SID_2);
$('#SA_SID_desarrollo').val(data.val().SA_SID_3);
$('#SA_SID_pregunta').val(data.val().SA_SID_4);
$('#SA_SID_cantidad').val(data.val().SA_SID_5);

//MATERIAL AUDIOVISUAL

$('#M_AV_titulo').val(data.val().M_AV_1);
$('#M_AV_descripcion').val(data.val().M_AV_2);
$('#M_AV_publico').val(data.val().M_AV_3);
$('#M_AV_ano').val(data.val().M_AV_4);
$('#M_AV_autor').val(data.val().M_AV_5);

//NECESIUDADES


$('#N_OR_tipo').val(data.val().N_OR_1);
$('#N_OR_proposito').val(data.val().N_OR_2);
$('#N_OR_caracteristicas').val(data.val().N_OR_3);
$('#N_OR_cantidad').val(data.val().N_OR_4);
$('#N_OR_causa').val(data.val().N_OR_5);

///////////////////////////// SECCION 1_1 /////////////////////////////////////////////////7
 var SECCION1_1 = data.val().SECCION1_1;
  $('#contador1').val(SECCION1_1);
  var calcular = $('#contador1').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador1");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_PR' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_PersonalR';
    const B = cont1 + '_name';
    const C = cont1 + '_cargo';
    const D = cont1 + '_sede';
    const E = cont1 + '_telefono';
    const F = cont1 + '_correo';


  document.getElementById("tablaPersonalResponsable").insertRow(-1).innerHTML = ' <td><select class=form-control id='+ A + '><option value="Responsable de TIC en la UR">Responsable de TIC en la UR</option><option value="Responsable de desarrollo y mantenimiento de sistema informáticos">Responsable de desarrollo y mantenimiento de sistema informáticos</option><option value="Responsable de soporte técnico y enlace informático ante la DGTIC">Responsable de soporte técnico y enlace informático ante la DGTIC</option></select></td><td><input type=text id= ' +B + ' class=form-control></td><td><select class=form-control id=' +C + ' ><option value="Asistente">Asistente</option><option value="Director General">Director General</option><option value="Coordinador">Coordinador</option><option value="Jefe de la Unidad (encargado)">Jefe de la Unidad (encargado)</option><option value="Operativo">Operativo</option> <option value="Subdirector de Área">Subdirector de Área</option></select></td><td><select class=form-control id=' + D + ' ><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><input type=text id=' + E + ' class=form-control></td><td><input type=text id=' + F + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_PR1;
    var b = data.val().E_PR2;
    var c = data.val().E_PR3;
    var d = data.val().E_PR4;
    var e = data.val().E_PR5;
    var f = data.val().E_PR6;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
  });
  
}




};

///////////////////////////// SECCION 1_2 /////////////////////////////////////////////////7
 var SECCION1_2 = data.val().SECCION1_2;
  $('#contador2').val(SECCION1_2);
  var calcular = $('#contador2').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador2");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_PA' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_PA_especialidad';
    const B = cont1 + '_PA_nombre';
    const C = cont1 + '_PA_perfil';
    const D = cont1 + '_PA_tipo';


  document.getElementById("tablaPersonalApoyo").insertRow(-1).innerHTML = '<td><select class=form-control id=' +A+ ' ><option value="  Desarrollo y mantenimiento de sistema informáticos">  Desarrollo y mantenimiento de sistema informáticos</option><option value="Soporte Técnico">Soporte Técnico</option></select></td><td><input type=text id=' + B + ' class=form-control></td><td><select class=form-control id='+ C + '><option value="Preparatoria trunca">Preparatoria trunca</option><option value="Preparatoria terminada">Preparatoria terminada</option><option value="Técnico Bachiller Universitario">Técnico Bachiller Universitario</option><option value="Licenciatura en Administración">Licenciatura en Administración</option><option value="Lic en Administración de empresas">Licenciatura en Administración de empresas</option><option value="Licenciatura en ioquímica">Licenciatura en Bioquímica</option><option value="Licenciatura en Biotecnología">Licenciatura en Biotecnología</option><option value="Licenciatura en Ciencia y Tecnología de los Alimentos">Licenciatura en Ciencia y Tecnología de los Alimentos</option><option value="Licenciatura en Ciencias Biológicas">Licenciatura en Ciencias Biológicas</option><option value="Licenciatura en Ciencias de la Computación ">Licenciatura en Ciencias de la Computación </option><option value="Licenciatura en Comunicación Social">Licenciatura en Comunicación Social</option><option value="Licenciatura en Contaduría pública">Licenciatura en Contaduría pública</option><option value="Licenciatura en Derecho">Licenciatura en Derecho</option><option value="Licenciatura en Enfermería ">Licenciatura en Enfermería </option><option value="Licenciatura en Física ">Licenciatura en Física</option><option value="Licenciatura en Informática">Licenciatura en Informática</option><option value="Licenciatura en Marketing">Licenciatura en Marketing</option><option value="Licenciatura en Nutrición">Licenciatura en Nutrición</option><option value="Licenciatura en Pedagogía">Licenciatura en Pedagogía</option><option value="Licenciatura en Periodismo">Licenciatura en Periodismo</option><option value="Licenciatura en Producción de Radio y Televisión">Licenciatura en Producción de Radio y Televisión</option><option value="Licenciatura en Psicología">Licenciatura en Psicología</option>            <option value="Licenciatura en Química">Licenciatura en Química</option><option value="Licenciatura en Telecomunicaciones">Licenciatura en Telecomunicaciones</option><option value="Licenciatura en Turismo">Licenciatura en Turismo</option><option value="Ingeniería Agronómica">Ingeniería Agronómica</option><option value="Ingeniería Electromecánica">Ingeniería Electromecánica</option><option value="Ingeniería Electrónica">Ingeniería Electrónica</option><option value="Ingeniería Electrónica con Orientación en Sistemas Digitales">Ingeniería Electrónica con Orientación en Sistemas Digitales</option><option value="Ingeniería en Alimentos">Ingeniería en Alimentos</option><option value="Ingeniería en Informática">Ingeniería en Informática</option><option value="Ingeniería Industrial">Ingeniería Industrial</option><option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option><option value="Ingeniería Química">Ingeniería Química</option></select></td><td><select class=form-control id=' + D + ' ><option selected>Selecciona una Opción</option><option value="Estructura">Estructura</option><option value="Eventual">Eventual</option><option value="Honorarios">Honorarios</option><option value="Docente">Docente</option><option value="Confianza">Confianza</option><option value="Base">Base</option></select></td><td></td>';





 ch_pr2.on('value', function(data) {

    var a = data.val().E_PA1;
    var b = data.val().E_PA2;
    var c = data.val().E_PA3;
    var d = data.val().E_PA4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};

///////////////////////////// SECCION 1_3 /////////////////////////////////////////////////7
 var SECCION1_3 = data.val().SECCION1_3;
  $('#contador3').val(SECCION1_3);
  var calcular = $('#contador3').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador3");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_PA_PERFILTICS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_PA_perfiltics_especialidad';
    const B = cont1 + '_PA_perfiltics_name';
    const C = cont1 + '_PA_perfiltics_perfil';
    const D = cont1 + '_PA_perfiltics_plaza';


  document.getElementById("tablaPersonalApoyoTicsOtros").insertRow(-1).innerHTML = ' <td><select class=form-control id='+ A +'><option value="  Desarrollo y mantenimiento de sistema informáticos">  Desarrollo y mantenimiento de sistema informáticos</option><option value="Soporte Técnico">Soporte Técnico</option></select></td><td><input type=text id=' + B + ' class=form-control></td><td><select class=form-control id='+ C + '><option value="Preparatoria trunca">Preparatoria trunca</option><option value="Preparatoria terminada">Preparatoria terminada</option><option value="Técnico Bachiller Universitario">Técnico Bachiller Universitario</option><option value="Licenciatura en Administración">Licenciatura en Administración</option><option value="Lic en Administración de empresas">Licenciatura en Administración de empresas</option><option value="Licenciatura en ioquímica">Licenciatura en Bioquímica</option><option value="Licenciatura en Biotecnología">Licenciatura en Biotecnología</option><option value="Licenciatura en Ciencia y Tecnología de los Alimentos">Licenciatura en Ciencia y Tecnología de los Alimentos</option><option value="Licenciatura en Ciencias Biológicas">Licenciatura en Ciencias Biológicas</option><option value="Licenciatura en Ciencias de la Computación ">Licenciatura en Ciencias de la Computación </option><option value="Licenciatura en Comunicación Social">Licenciatura en Comunicación Social</option><option value="Licenciatura en Contaduría pública">Licenciatura en Contaduría pública</option><option value="Licenciatura en Derecho">Licenciatura en Derecho</option><option value="Licenciatura en Enfermería ">Licenciatura en Enfermería </option><option value="Licenciatura en Física ">Licenciatura en Física</option><option value="Licenciatura en Informática">Licenciatura en Informática</option><option value="Licenciatura en Marketing">Licenciatura en Marketing</option><option value="Licenciatura en Nutrición">Licenciatura en Nutrición</option><option value="Licenciatura en Pedagogía">Licenciatura en Pedagogía</option><option value="Licenciatura en Periodismo">Licenciatura en Periodismo</option><option value="Licenciatura en Producción de Radio y Televisión">Licenciatura en Producción de Radio y Televisión</option><option value="Licenciatura en Psicología">Licenciatura en Psicología</option>            <option value="Licenciatura en Química">Licenciatura en Química</option><option value="Licenciatura en Telecomunicaciones">Licenciatura en Telecomunicaciones</option><option value="Licenciatura en Turismo">Licenciatura en Turismo</option><option value="Ingeniería Agronómica">Ingeniería Agronómica</option><option value="Ingeniería Electromecánica">Ingeniería Electromecánica</option><option value="Ingeniería Electrónica">Ingeniería Electrónica</option><option value="Ingeniería Electrónica con Orientación en Sistemas Digitales">Ingeniería Electrónica con Orientación en Sistemas Digitales</option><option value="Ingeniería en Alimentos">Ingeniería en Alimentos</option><option value="Ingeniería en Informática">Ingeniería en Informática</option><option value="Ingeniería Industrial">Ingeniería Industrial</option><option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option><option value="Ingeniería Química">Ingeniería Química</option></select></td><td><select class=form-control id=' + D + ' ><option selected>Selecciona una Opción</option><option value="Estructura">Estructura</option><option value="Eventual">Eventual</option><option value="Honorarios">Honorarios</option><option value="Docente">Docente</option><option value="Confianza">Confianza</option><option value="Base">Base</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_PA_PERFILTICS1;
    var b = data.val().E_PA_PERFILTICS2;
    var c = data.val().E_PA_PERFILTICS3;
    var d = data.val().E_PA_PERFILTICS4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};

///////////////////////////// SECCION 1_4 /////////////////////////////////////////////////7
 var SECCION1_4 = data.val().SECCION1_4;
  $('#contador4').val(SECCION1_4);
  var calcular = $('#contador4').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador4");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_PA_PERFIL_WEBAPPS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_PA_WAPPS_especialidad';
    const B = cont1 + '_PA_WAPPS_paradigma';
    const C = cont1 + '_PA_WAPPS_lenguaje';
    const D = cont1 + '_PA_WAPPS_arquitectura';
    const E = cont1 + '_PA_WAPPS_nombre';
    const F = cont1 + '_PA_WAPPS_perfil';
    const G = cont1 + '_PA_WAPPS_plaza';


  document.getElementById("tablaPersonalApoyoWebDeveloper").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Front End">Front End</option><option value="Fullstack">Fullstack</option></select></td><td><select class=form-control id='+ B +'><option value="Programación Estructurada">Programación Estructurada</option><option value="Programación Orientada a Objetos">Programación Orientada a Objetos</option><option value="Programación basada en componentes">Programación basada en componentes</option></select></td><td><select class=form-control id='+ C +'><option value="Java">Java</option><option value="Php">Php</option><option value="Programación basada en componentes">Visual Basic</option><option value="Javascript">Javascript</option><option value="Python">Python</option><option value="C#">C#</option><option value="Tyscript">Tyscript</option><option value="Ruby">Ruby</option>          </select></td><td><select class=form-control id='+ D +'><option value="Servidor (Mainframe)">Servidor (Mainframe)</option><option value="Cliente/Servidor">Cliente/Servidor</option><option value="Stand Alone o p2p">Stand Alone o p2p</option><option value="MVC">MVC</option><option alue="Microservicios">Microservicios</option></select></td><td><input type=text id=' + E + ' class=form-control></td><td><select class=form-control id='+ F + '><option value="Preparatoria trunca">Preparatoria trunca</option><option value="Preparatoria terminada">Preparatoria terminada</option><option value="Técnico Bachiller Universitario">Técnico Bachiller Universitario</option><option value="Licenciatura en Administración">Licenciatura en Administración</option><option value="Lic en Administración de empresas">Licenciatura en Administración de empresas</option><option value="Licenciatura en ioquímica">Licenciatura en Bioquímica</option><option value="Licenciatura en Biotecnología">Licenciatura en Biotecnología</option><option value="Licenciatura en Ciencia y Tecnología de los Alimentos">Licenciatura en Ciencia y Tecnología de los Alimentos</option><option value="Licenciatura en Ciencias Biológicas">Licenciatura en Ciencias Biológicas</option><option value="Licenciatura en Ciencias de la Computación ">Licenciatura en Ciencias de la Computación </option><option value="Licenciatura en Comunicación Social">Licenciatura en Comunicación Social</option><option value="Licenciatura en Contaduría pública">Licenciatura en Contaduría pública</option><option value="Licenciatura en Derecho">Licenciatura en Derecho</option><option value="Licenciatura en Enfermería ">Licenciatura en Enfermería </option><option value="Licenciatura en Física ">Licenciatura en Física</option><option value="Licenciatura en Informática">Licenciatura en Informática</option><option value="Licenciatura en Marketing">Licenciatura en Marketing</option><option value="Licenciatura en Nutrición">Licenciatura en Nutrición</option><option value="Licenciatura en Pedagogía">Licenciatura en Pedagogía</option><option value="Licenciatura en Periodismo">Licenciatura en Periodismo</option><option value="Licenciatura en Producción de Radio y Televisión">Licenciatura en Producción de Radio y Televisión</option><option value="Licenciatura en Psicología">Licenciatura en Psicología</option>            <option value="Licenciatura en Química">Licenciatura en Química</option><option value="Licenciatura en Telecomunicaciones">Licenciatura en Telecomunicaciones</option><option value="Licenciatura en Turismo">Licenciatura en Turismo</option><option value="Ingeniería Agronómica">Ingeniería Agronómica</option><option value="Ingeniería Electromecánica">Ingeniería Electromecánica</option><option value="Ingeniería Electrónica">Ingeniería Electrónica</option><option value="Ingeniería Electrónica con Orientación en Sistemas Digitales">Ingeniería Electrónica con Orientación en Sistemas Digitales</option><option value="Ingeniería en Alimentos">Ingeniería en Alimentos</option><option value="Ingeniería en Informática">Ingeniería en Informática</option><option value="Ingeniería Industrial">Ingeniería Industrial</option><option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option><option value="Ingeniería Química">Ingeniería Química</option></select></td><td><select class=form-control id=' + G + ' ><option selected>Selecciona una Opción</option><option value="Estructura">Estructura</option><option value="Eventual">Eventual</option><option value="Honorarios">Honorarios</option><option value="Docente">Docente</option><option value="Confianza">Confianza</option><option value="Base">Base</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_PA_PERFIL_WEBAPPS1;
    var b = data.val().E_PA_PERFIL_WEBAPPS2;
    var c = data.val().E_PA_PERFIL_WEBAPPS3;
    var d = data.val().E_PA_PERFIL_WEBAPPS4;
    var e = data.val().E_PA_PERFIL_WEBAPPS5;
    var f = data.val().E_PA_PERFIL_WEBAPPS6;
    var g = data.val().E_PA_PERFIL_WEBAPPS7;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
    $('#'+G+'').val(g);
    
  
  });
  
}

};


///////////////////////////// SECCION 1_5 /////////////////////////////////////////////////7
 var SECCION1_5 = data.val().SECCION1_5;
  $('#contador5').val(SECCION1_5);
  var calcular = $('#contador5').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador5");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_PA_PERFIL_DBA' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_PA_DBA_especialidad';
    const B = cont1 + '_PA_DBA_paradigma';
    const C = cont1 + '_PA_DBA_basededatos';
    const D = cont1 + '_PA_DBA_arquitectura';
    const E = cont1 + '_PA_DBA_nombre';
    const F = cont1 + '_PA_DBA_perfil';
    const G = cont1 + '_PA_DBA_plaza';


  document.getElementById("tablaPersonalApoyoDBA").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Front End">Back End</option><option value="DBA">DBA</option><option value="Fullstack">Fullstack</option></select></td><td><select class=form-control id='+ B +'><option value="Programación Estructurada">Programación Estructurada</option><option value="Programación Orientada a Objetos">Programación Orientada a Objetos</option><option value="Programación basada en componentes">Programación basada en componentes</option></select></td><td> <select class=form-control id='+ C +'>            <option value="Sql Server">Sql Server</option><option value="Oracle">Oracle</option><option value="IBM DB2">IBM DB2</option><option value="SAP Sybase">SAP Sybase</option><option value="Informix">Informix</option><option value="Mysql">Mysql</option><option value="Mongo DB">Mongo DB</option><option value="Postgres SQL">Postgres SQL</option></select></td><td><select class=form-control id='+ D +'><option value="Servidor (Mainframe)">Servidor (Mainframe)</option><option value="Cliente/Servidor">Cliente/Servidor</option><option value="Stand Alone o p2p">Stand Alone o p2p</option><option value="MVC">MVC</option><option alue="Microservicios">Microservicios</option></select></td><td><input type=text id=' + E + ' class=form-control></td><td><select class=form-control id='+ F + '><option value="Preparatoria trunca">Preparatoria trunca</option><option value="Preparatoria terminada">Preparatoria terminada</option><option value="Técnico Bachiller Universitario">Técnico Bachiller Universitario</option><option value="Licenciatura en Administración">Licenciatura en Administración</option><option value="Lic en Administración de empresas">Licenciatura en Administración de empresas</option><option value="Licenciatura en ioquímica">Licenciatura en Bioquímica</option><option value="Licenciatura en Biotecnología">Licenciatura en Biotecnología</option><option value="Licenciatura en Ciencia y Tecnología de los Alimentos">Licenciatura en Ciencia y Tecnología de los Alimentos</option><option value="Licenciatura en Ciencias Biológicas">Licenciatura en Ciencias Biológicas</option><option value="Licenciatura en Ciencias de la Computación ">Licenciatura en Ciencias de la Computación </option><option value="Licenciatura en Comunicación Social">Licenciatura en Comunicación Social</option><option value="Licenciatura en Contaduría pública">Licenciatura en Contaduría pública</option><option value="Licenciatura en Derecho">Licenciatura en Derecho</option><option value="Licenciatura en Enfermería ">Licenciatura en Enfermería </option><option value="Licenciatura en Física ">Licenciatura en Física</option><option value="Licenciatura en Informática">Licenciatura en Informática</option><option value="Licenciatura en Marketing">Licenciatura en Marketing</option><option value="Licenciatura en Nutrición">Licenciatura en Nutrición</option><option value="Licenciatura en Pedagogía">Licenciatura en Pedagogía</option><option value="Licenciatura en Periodismo">Licenciatura en Periodismo</option><option value="Licenciatura en Producción de Radio y Televisión">Licenciatura en Producción de Radio y Televisión</option><option value="Licenciatura en Psicología">Licenciatura en Psicología</option>            <option value="Licenciatura en Química">Licenciatura en Química</option><option value="Licenciatura en Telecomunicaciones">Licenciatura en Telecomunicaciones</option><option value="Licenciatura en Turismo">Licenciatura en Turismo</option><option value="Ingeniería Agronómica">Ingeniería Agronómica</option><option value="Ingeniería Electromecánica">Ingeniería Electromecánica</option><option value="Ingeniería Electrónica">Ingeniería Electrónica</option><option value="Ingeniería Electrónica con Orientación en Sistemas Digitales">Ingeniería Electrónica con Orientación en Sistemas Digitales</option><option value="Ingeniería en Alimentos">Ingeniería en Alimentos</option><option value="Ingeniería en Informática">Ingeniería en Informática</option><option value="Ingeniería Industrial">Ingeniería Industrial</option><option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option><option value="Ingeniería Química">Ingeniería Química</option></select></td><td><select class=form-control id=' + G + ' ><option selected>Selecciona una Opción</option><option value="Estructura">Estructura</option><option value="Eventual">Eventual</option><option value="Honorarios">Honorarios</option><option value="Docente">Docente</option><option value="Confianza">Confianza</option><option value="Base">Base</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_PA_PERFIL_DBA1;
    var b = data.val().E_PA_PERFIL_DBA2;
    var c = data.val().E_PA_PERFIL_DBA3;
    var d = data.val().E_PA_PERFIL_DBA4;
    var e = data.val().E_PA_PERFIL_DBA5;
    var f = data.val().E_PA_PERFIL_DBA6;
    var g = data.val().E_PA_PERFIL_DBA7;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
    $('#'+G+'').val(g);
    
  
  });
  
}

};




///////////////////////////// SECCION 2_1 /////////////////////////////////////////////////7
 var SECCION2_1 = data.val().SECCION2_1;
  $('#contador6').val(SECCION2_1);
  var calcular = $('#contador6').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador6");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_CP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_CP_inmueble';
    const B = cont1 + '_CP_tipo';
    const C = cont1 + '_CP_cantidad';
    const D = cont1 + '_CP_antiguedad';
    const E = cont1 + '_CP_mtto';
    const F = cont1 + '_CP_origen';


  document.getElementById("tablaCompuEnOperacion").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><select class=form-control id='+ B +'>            <option value="Escritorio">Escritorio</option><option value="Lap Top">Lap Top</option></select></td> <td><input type="number" class=form-control id='+ C +'></td><td><input type="number" class=form-control id='+ D +'></td><td><select class=form-control id='+ E +'><option value="Sí">Sí</option><option value="No">No</option></select></td><td><select class=form-control id='+ F +'><option value="Contrato con DGTIC">Contrato con DGTIC</option><option value="Adquisición de Recursos PROFORHCOM">Adquisición de Recursos PROFORHCOM</option><option value="Adquisición de Recursos COMIPEMS">Adquisición de Recursos COMIPEMS</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_CP1;
    var b = data.val().E_CP2;
    var c = data.val().E_CP3;
    var d = data.val().E_CP4;
    var e = data.val().E_CP5;
    var f = data.val().E_CP6;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
  
  });
  
}

};

///////////////////////////// SECCION 2_1 /////////////////////////////////////////////////7
 var SECCION2_2 = data.val().SECCION2_2;
  $('#contador7').val(SECCION2_2);
  var calcular = $('#contador7').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador7");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_CP_SINUSO' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_CP_SINUSO_inmueble';
    const B = cont1 + '_CP_SINUSO_tipo';
    const C = cont1 + '_CP_SINUSO_cantidad';
    const D = cont1 + '_CP_SINUSO_antiguedad';
    const E = cont1 + '_CP_SINUSO_causa';
    const F = cont1 + '_CP_SINUSO_origen';

  document.getElementById("tablaCompuSinUso").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><select class=form-control id='+ B +'>            <option value="Escritorio">Escritorio</option><option value="Lap Top">Lap Top</option></select></td> <td><input type="number" class=form-control id='+ C +'></td><td><input type="number" class=form-control id='+ D +'></td><td><select class=form-control id='+ E +'><option value="Sí">Sí</option><option value="No">No</option></select></td><td><select class=form-control id='+ F +'><option value="Contrato con DGTIC">Contrato con DGTIC</option><option value="Adquisición de Recursos PROFORHCOM">Adquisición de Recursos PROFORHCOM</option><option value="Adquisición de Recursos COMIPEMS">Adquisición de Recursos COMIPEMS</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_CP_SINUSO1;
    var b = data.val().E_CP_SINUSO2;
    var c = data.val().E_CP_SINUSO3;
    var d = data.val().E_CP_SINUSO4;
    var e = data.val().E_CP_SINUSO5;
    var f = data.val().E_CP_SINUSO6;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
  
  });
  
}

};


///////////////////////////// SECCION 2_3 /////////////////////////////////////////////////7
 var SECCION2_3 = data.val().SECCION2_3;
  $('#contador8').val(SECCION2_3);
  var calcular = $('#contador8').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador8");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_SERVS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_SERV_ubicacion';
    const B = cont1 + '_SERV_resumen';
    const C = cont1 + '_SERV_cantidad';
    const D = cont1 + '_SERV_origen';
    const E = cont1 + '_SERV_proposito';


  document.getElementById("tablaServidores").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><input type=text placeholder="Procesador, núcleos, RAM, capacidad de almacenamiento, sistema operativo." id='+B + ' class=form-control></td><td><input type=text id='+C + '  class=form-control></td><td><select class=form-control id='+ D +'><option value="Contrato con DGTIC">Contrato con DGTIC</option><option value="Adquisición de Recursos PROFORHCOM">Adquisición de Recursos PROFORHCOM</option><option value="Adquisición de Recursos COMIPEMS">Adquisición de Recursos COMIPEMS</option></select></td><td><input type=text id='+E + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_SERV1;
    var b = data.val().E_SERV2;
    var c = data.val().E_SERV3;
    var d = data.val().E_SERV4;
    var e = data.val().E_SERV5;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};



///////////////////////////// SECCION 2_4 /////////////////////////////////////////////////7
 var SECCION2_4 = data.val().SECCION2_4;
  $('#contador9').val(SECCION2_4);
  var calcular = $('#contador9').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador9");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_IMP_ESC' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_IE_inmueble';
    const B = cont1 + '_IE_perfil';
    const C = cont1 + '_IE_cantidad';
    const D = cont1 + '_IE_origen';
    const E = cont1 + '_IE_conectividad';



  document.getElementById("tablaImpEsc").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><input type=text placeholder="Tipo de impresión o digitalización, velocidad, máxima resolución." id='+B + ' class=form-control></td><td><input type=number id='+C + ' class=form-control></td><td><select class=form-control id='+ D +'><option value="Contrato con DGTIC">Contrato con DGTIC</option><option value="Adquisición de Recursos PROFORHCOM">Adquisición de Recursos PROFORHCOM</option><option value="Adquisición de Recursos COMIPEMS">Adquisición de Recursos COMIPEMS</option></select></td><td><select class=form-control id='+ E +'><option value="Conectada a la red (Uso compartido)">Conectada a la red (Uso compartido)</option><option value="Conectado a un equipo (Uso personal)">Conectado a un equipo (Uso personal)</option></select></td><td></td>';
 ch_pr2.on('value', function(data) {

    var a = data.val().E_IE1;
    var b = data.val().E_IE2;
    var c = data.val().E_IE3;
    var d = data.val().E_IE4;
    var e = data.val().E_IE5;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};

///////////////////////////// SECCION 2_5 /////////////////////////////////////////////////7
 var SECCION2_5 = data.val().SECCION2_5;
  $('#contador10').val(SECCION2_5);
  var calcular = $('#contador10').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador10");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_EA' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_EA_inmueble';
    const B = cont1 + '_EA_perfil';
    const C = cont1 + '_EA_cantidad';
    const D = cont1 + '_EA_origen';


  document.getElementById("tablaEquipAudiovisual").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_EA1;
    var b = data.val().E_EA2;
    var c = data.val().E_EA3;
    var d = data.val().E_EA4;
   
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};


///////////////////////////// SECCION 2_6 /////////////////////////////////////////////////7
 var SECCION2_6 = data.val().SECCION2_6;
  $('#contador11').val(SECCION2_6);
  var calcular = $('#contador11').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador11");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_OD' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_OD_inmueble';
    const B = cont1 + '_OD_perfil';
    const C = cont1 + '_OD_cantidad';
    const D = cont1 + '_OD_origen';


  document.getElementById("tablaOtrosDispositivos").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><input type=text placeholder="Controles de acceso, relojes checadores, lectores de huellas, lectores de código de barras, etc." id='+B + ' class=form-control></td><td><input type=number id='+C + ' class=form-control></td><td><select class=form-control id='+ D +'><option value="Contrato con DGTIC">Contrato con DGTIC</option><option value="Adquisición de Recursos PROFORHCOM">Adquisición de Recursos PROFORHCOM</option><option value="Adquisición de Recursos COMIPEMS">Adquisición de Recursos COMIPEMS</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_OD1;
    var b = data.val().E_OD2;
    var c = data.val().E_OD3;
    var d = data.val().E_OD4;
   
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};

///////////////////////////// SECCION 3_1 /////////////////////////////////////////////////7
 var SECCION3_1 = data.val().SECCION3_1;
  $('#contador12').val(SECCION3_1);
  var calcular = $('#contador12').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador12");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_T_IP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_T_IP_inmueble';
    const B = cont1 + '_T_IP_perfil';
    const C = cont1 + '_T_IP_cantidad';


  document.getElementById("tablaTelefoniaIp").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><input type=text id='+B + ' class=form-control></td><td><input type=text id='+C + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_T_IP1;
    var b = data.val().E_T_IP2;
    var c = data.val().E_T_IP3;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
  
  });
  
}

};

///////////////////////////// SECCION 3_2 /////////////////////////////////////////////////7
 var SECCION3_2 = data.val().SECCION3_2;
  $('#contador13').val(SECCION3_2);
  var calcular = $('#contador13').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador13");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_IR' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_IR_inmueble';
    const B = cont1 + '_IR_resumen';
    const C = cont1 + '_IR_cantidad';
    const D = cont1 + '_IR_puertos_ocupados';
    const E = cont1 + '_IR_puertos_desocupados';
    const F = cont1 + '_IR_switches_desocupados';
    const G = cont1 + '_IR_origen';


  document.getElementById("tablaRedes").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Argentina 28, Colonia Centro">Argentina 28, Colonia Centro</option><option value="Brasil 31, Colonia Centro">Brasil 31, Colonia Centro</option><option value="Revolución 1425, Colonia Campestre">Revolución 1425, Colonia Campestre</option><option value="Universidad 1200, Colonia Coyoacan">Universidad 1200, Colonia Coyoacan</option></select></td><td><input type=text placeholder="No incluir equipos administrados por la DGTIC: switches, access point, cámaras de video vigilancia, etc." id='+B + ' class=form-control></td><td><input type=number id='+C + ' class=form-control></td><td><input type=number id='+D + ' class=form-control></td><td><input type=number id='+E + ' class=form-control></td><td><input type=number id='+F + ' class=form-control></td><td><select class=form-control id='+ G +'><option value="Contrato con DGTIC">Contrato con DGTIC</option><option value="Adquisición de Recursos PROFORHCOM">Adquisición de Recursos PROFORHCOM</option><option value="Adquisición de Recursos COMIPEMS">Adquisición de Recursos COMIPEMS</option></select></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_IR1;
    var b = data.val().E_IR2;
    var c = data.val().E_IR3;
    var d = data.val().E_IR4;
    var e = data.val().E_IR5;
    var f = data.val().E_IR6;
    var g = data.val().E_IR7;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
    $('#'+G+'').val(g);
  
  });
  
}

};


///////////////////////////// SECCION 3_3/////////////////////////////////////////////////7
 var SECCION3_3 = data.val().SECCION3_3
  $('#contador14').val(SECCION3_3);
 var calcular = $('#contador14').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador14");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_OS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_OS_tipo';
    const B = cont1 + '_OS_ancho_banda';
    const C = cont1 + '_OS_proveedor';
    const D = cont1 + '_OS_area';
    const E = cont1 + '_OS_cantidad';
    const F = cont1 + '_OS_nombre';


  document.getElementById("tablaOtrosServicios").insertRow(-1).innerHTML = '<td><select class=form-control id='+ A +'><option value="Dedicado">Dedicado</option><option value="Asimétrico">Asimétrico</option><option value="Satelital">Satelital</option></select></td><td><input type=text id='+B + ' class=form-control></td><td><input type=text id='+C + ' class=form-control></td><td><input type=text id='+D + ' class=form-control></td><td><input type=number id='+E + ' class=form-control></td><td><input type=text id='+F + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_OS1;
    var b = data.val().E_OS2;
    var c = data.val().E_OS3;
    var d = data.val().E_OS4;
    var e = data.val().E_OS5;
    var f = data.val().E_OS6;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
  
  });
  
}

};


///////////////////////////// SECCION 4_1 /////////////////////////////////////////////////7
 var SECCION4_1 = data.val().SECCION4_1;
  $('#contador15').val(SECCION4_1);
  var calcular = $('#contador15').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador15");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_SC' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_SC_paquete';
    const B = cont1 + '_SC_version';
    const C = cont1 + '_SC_so';
    const D = cont1 + '_SC_licencias';
    const E = cont1 + '_SC_licencias_en_uso';
    const F = cont1 + '_SC_origen';


  document.getElementById("tablaSoftware").insertRow(-1).innerHTML = '<td><input type=text id='+A + '  class=form-control></td><td><input type=text id='+B + ' class=form-control></td><td><select class=form-control id='+ C +'><option value="Linux">Linux</option><option value="Mac">Mac</option><option value="Windows 10">Windows 10</option><option value="Windows Server">Windows Server</option>         </select></td><td><input type=number id='+D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_SC1;
    var b = data.val().E_SC2;
    var c = data.val().E_SC3;
    var d = data.val().E_SC4;
    var e = data.val().E_SC5;
    var f = data.val().E_SC6;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
    $('#'+F+'').val(f);
  
  
  });
  
}

};



///////////////////////////// SECCION 4_2/////////////////////////////////////////////////7
 var SECCION4_2 = data.val().SECCION4_2
  $('#contador16').val(SECCION4_2);
 var calcular = $('#contador16').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador16");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_SL' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_SL_paquete';
    const B = cont1 + '_SL_version';
    const C = cont1 + '_SL_so';
    const D = cont1 + '_SL_licencias';


  document.getElementById("tablaSoftwareFree").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' +D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_SL1;
    var b = data.val().E_SL2;
    var c = data.val().E_SL3;
    var d = data.val().E_SL4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};



///////////////////////////// SECCION 5_1 /////////////////////////////////////////////////7
 var SECCION5_1 = data.val().SECCION5_1;
  $('#contador17').val(SECCION5_1);
  var calcular = $('#contador17').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador17");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_SIP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_SIP_nombre';
    const B = cont1 + '_SIP_proposito';
    const C = cont1 + '_SIP_desarrollo';
    const D = cont1 + '_SIP_documentado';
    const E = cont1 + '_SIP_cantidad';


  document.getElementById("tablaSystemProd").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td><input type=text id=' + E + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_SIP1;
    var b = data.val().E_SIP2;
    var c = data.val().E_SIP3;
    var d = data.val().E_SIP4;
    var e = data.val().E_SIP5;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};

///////////////////////////// SECCION 5_2 /////////////////////////////////////////////////7
 var SECCION5_2 = data.val().SECCION5_2;
  $('#contador18').val(SECCION5_2);
  var calcular = $('#contador18').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador18");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_SID' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_SID_nombre';
    const B = cont1 + '_SID_proposito';
    const C = cont1 + '_SID_desarrollo';
    const D = cont1 + '_SID_documentado';
    const E = cont1 + '_SID_cantidad';


  document.getElementById("tablaSystemDes").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td><input type=text id=' + E + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_SID1;
    var b = data.val().E_SID2;
    var c = data.val().E_SID3;
    var d = data.val().E_SID4;
    var e = data.val().E_SID5;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};


///////////////////////////// SECCION 6_1 /////////////////////////////////////////////////7
 var SECCION6_1 = data.val().SECCION6_1;
  $('#contador19').val(SECCION6_1);
  var calcular = $('#contador19').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador19");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_M_A' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_M_A_titulo';
    const B = cont1 + '_M_A_descripcion';
    const C = cont1 + '_M_A_p_objetivo';
    const D = cont1 + '_M_A_ano_creacion';
    const E = cont1 + '_M_A_autor';


  document.getElementById("tablaMaterialAudiovisual").insertRow(-1).innerHTML = '<td><input type=text id='+A + '  class=form-control></td><td><input type=text id='+B + '  class=form-control></td><td><select class=form-control id='+C+'><option value="Estudiantes">Estudiantes</option><option value="Docentes">Docentes</option><option value="Padres de familia">Padres de familia</option><option value="Personal directivo ó administrativo">Personal directivo ó administrativo</option><option value="Público en general">Público en general</option></select></td><td><input type=number id='+D + ' class=form-control></td><td><input type=text id='+E + ' class=form-control></td><td></td>';
 ch_pr2.on('value', function(data) {

    var a = data.val().E_M_A1;
    var b = data.val().E_M_A2;
    var c = data.val().E_M_A3;
    var d = data.val().E_M_A4;
    var e = data.val().E_M_A5;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};

///////////////////////////// SECCION 6_2 /////////////////////////////////////////////////7
 var SECCION6_2 = data.val().SECCION6_2;
  $('#contador20').val(SECCION6_2);
  var calcular = $('#contador20').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador20");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_NTIC' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_NTIC_tipo';
    const B = cont1 + '_NTIC_proposito';
    const C = cont1 + '_NTIC_caracteristicas';
    const D = cont1 + '_NTIC_cantidad';
    const E = cont1 + '_NTIC_causa';


  document.getElementById("tablaNecesidades").insertRow(-1).innerHTML = '<td><select class=form-control id='+A+'><option value="licencias de software">licencias de software</option><option value="personal para soporte técnico">personal para soporte técnico</option><option value="Equipo de computo">Equipo de computo</option><option value="Capacitación de uso de software">Capacitación de uso de software</option></select></td><td><input type=text id='+B + ' class=form-control></td><td><input type=text id='+C + ' class=form-control></td><td><input type=number id='+D + ' class=form-control></td><td><input type=text id='+E + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_NTIC1;
    var b = data.val().E_NTIC2;
    var c = data.val().E_NTIC3;
    var d = data.val().E_NTIC4;
    var e = data.val().E_NTIC5;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};


  //aqui termina el serializado value(data)
});




    }

  } else {
    // No user is signed in.
window.location.href = 'index.html';
    console.log('usuario no logueado')

  }
});



function logout(){
  firebase.auth().signOut();
}
