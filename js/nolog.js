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


//COMPUTADORAS PERSONALES

$('#E_CP_inmueble').val(data.val().E_CP_1);
$('#E_CP_perfil_sac').val(data.val().E_CP_2);
$('#E_CP_cantidad').val(data.val().E_CP_3);
$('#E_CP_origen').val(data.val().E_CP_4);

//SERVIDORES

$('#E_SERV_ubicacion').val(data.val().E_SERV_1);
$('#E_SERV_resumen').val(data.val().E_SERV_2);
$('#E_SERV_cantidad').val(data.val().E_SERV_3);
$('#E_SERV_origen').val(data.val().E_SERV_4);
$('#E_SERV_proposito').val(data.val().E_SERV5);

//IMPRESORAS Y ESCANERES

$('#E_IMP_ESC_inmueble').val(data.val().E_IMP_ESC_1);
$('#E_IMP_ESC_perfil_said').val(data.val().E_IMP_ESC_2);
$('#E_IMP_ESC_cantidad').val(data.val().E_IMP_ESC_3);
$('#E_IMP_ESC_origen').val(data.val().E_IMP_ESC_4);

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
$('#SC_IR_origen').val(data.val().SC_IR_4);

//OTROS SERVICIOS
$('#SC_OS_inmueble').val(data.val().SC_OS_1);
$('#SC_OS_resumen').val(data.val().SC_OS_2);
$('#SC_OS_cantidad').val(data.val().SC_OS_3);
$('#SC_OS_origen').val(data.val().SC_OS_4);

//SOFTWARE COMERCIAL

$('#L_SC_paquete').val(data.val().L_SC_1);
$('#L_SC_version').val(data.val().L_SC_2);
$('#L_SC_so').val(data.val().L_SC_3);
$('#L_SC_cant_lic').val(data.val().L_SC_4);
$('#L_SC_origen').val(data.val().L_SC_5);

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


  document.getElementById("tablaPersonalResponsable").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td><input type=text id=' + E + ' class=form-control></td><td><input type=text id=' + F + ' class=form-control></td><td></td>';

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


  document.getElementById("tablaPersonalApoyo").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><select class=form-control id=' + D + ' ><option selected>Selecciona una Opción</option><option value="Estructura">Estructura</option><option value="Eventual">Eventual</option><option value="Honorarios">Honorarios</option><option value="Docente">Docente</option><option value="Confianza">Confianza</option><option value="Base">Base</option></select><td></td>';





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



///////////////////////////// SECCION 2_1 /////////////////////////////////////////////////7
 var SECCION2_1 = data.val().SECCION2_1;
  $('#contador3').val(SECCION2_1);
  var calcular = $('#contador3').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador3");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_CP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_CP_inmueble';
    const B = cont1 + '_CP_perfil';
    const C = cont1 + '_CP_cantidad';
    const D = cont1 + '_CP_origen';


  document.getElementById("tablaCompuPersonal").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_CP1;
    var b = data.val().E_CP2;
    var c = data.val().E_CP3;
    var d = data.val().E_CP4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};


///////////////////////////// SECCION 2_2 /////////////////////////////////////////////////7
 var SECCION2_2 = data.val().SECCION2_2;
  $('#contador4').val(SECCION2_2);
  var calcular = $('#contador4').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador4");
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


  document.getElementById("tablaServidores").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td><input type=text id=' + E + ' class=form-control></td><td></td>';

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



///////////////////////////// SECCION 2_3 /////////////////////////////////////////////////7
 var SECCION2_3 = data.val().SECCION2_3;
  $('#contador5').val(SECCION2_3);
  var calcular = $('#contador5').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador5");
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



  document.getElementById("tablaImpEsc").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_IE1;
    var b = data.val().E_IE2;
    var c = data.val().E_IE3;
    var d = data.val().E_IE4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};

///////////////////////////// SECCION 2_4 /////////////////////////////////////////////////7
 var SECCION2_4 = data.val().SECCION2_4;
  $('#contador6').val(SECCION2_4);
  var calcular = $('#contador6').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador6");
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


///////////////////////////// SECCION 2_5 /////////////////////////////////////////////////7
 var SECCION2_5 = data.val().SECCION2_5;
  $('#contador7').val(SECCION2_5);
  var calcular = $('#contador7').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador7");
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


  document.getElementById("tablaOtrosDispositivos").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td></td>';

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
  $('#contador8').val(SECCION3_1);
  var calcular = $('#contador8').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador8");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_T_IP' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_T_IP_inmueble';
    const B = cont1 + '_T_IP_perfil';
    const C = cont1 + '_T_IP_cantidad';


  document.getElementById("tablaTelefoniaIp").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td></td>';

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
  $('#contador9').val(SECCION3_2);
  var calcular = $('#contador9').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador9");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_IR' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_IR_inmueble';
    const B = cont1 + '_IR_resumen';
    const C = cont1 + '_IR_cantidad';
    const D = cont1 + '_IR_origen';


  document.getElementById("tablaRedes").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' +D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_IR1;
    var b = data.val().E_IR2;
    var c = data.val().E_IR3;
    var d = data.val().E_IR4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};


///////////////////////////// SECCION 3_3/////////////////////////////////////////////////7
 var SECCION3_3 = data.val().SECCION3_3
  $('#contador10').val(SECCION3_3);
 var calcular = $('#contador10').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador10");
 res.value = parseInt(res.value);

for (var i=0; i< res.value; i++) {

  var cont1 = 1 + i;


var uuid = $('p:first').text()
  var ch_pr = uuid + '/E_OS' + cont1;
  var ch_pr2 = firebase.database().ref(ch_pr);

    const A = cont1 + '_OS_inmueble';
    const B = cont1 + '_OS_resumen';
    const C = cont1 + '_OS_cantidad';
    const D = cont1 + '_OS_origen';


  document.getElementById("tablaOtrosServicios").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' +D + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_OS1;
    var b = data.val().E_OS2;
    var c = data.val().E_OS3;
    var d = data.val().E_OS4;
   

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
  
  });
  
}

};


///////////////////////////// SECCION 4_1 /////////////////////////////////////////////////7
 var SECCION4_1 = data.val().SECCION4_1;
  $('#contador11').val(SECCION4_1);
  var calcular = $('#contador11').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador11");
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
    const E = cont1 + '_SC_origen';


  document.getElementById("tablaSoftware").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td><input type=text id=' + E + ' class=form-control></td><td></td>';

 ch_pr2.on('value', function(data) {

    var a = data.val().E_SC1;
    var b = data.val().E_SC2;
    var c = data.val().E_SC3;
    var d = data.val().E_SC4;
    var e = data.val().E_SC5;

    $('#'+A+'').val(a);
    $('#'+B+'').val(b);
    $('#'+C+'').val(c);
    $('#'+D+'').val(d);
    $('#'+E+'').val(e);
  
  });
  
}

};



///////////////////////////// SECCION 4_2/////////////////////////////////////////////////7
 var SECCION4_2 = data.val().SECCION4_2
  $('#contador12').val(SECCION4_2);
 var calcular = $('#contador12').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador12");
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
  $('#contador13').val(SECCION5_1);
  var calcular = $('#contador13').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador13");
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
  $('#contador14').val(SECCION5_2);
  var calcular = $('#contador14').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador14");
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
  $('#contador15').val(SECCION6_1);
  var calcular = $('#contador15').val();
  

if (calcular == 0) {    
//console.log('no hay nada extra dude');
}else{

res = document.getElementById("contador15");
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


  document.getElementById("tablaNecesidades").insertRow(-1).innerHTML = '<td><input type=text id='+A + ' class=form-control></td><td><input type=text id= ' +B + ' class=form-control></td><td><input type=text id=' +C + ' class=form-control></td><td><input type=text id=' + D + ' class=form-control></td><td><input type=text id=' + E + ' class=form-control></td><td></td>';

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
