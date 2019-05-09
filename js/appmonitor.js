firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    console.log('usuario autentificado');
      var email_id = user.email;
    document.getElementById("info").innerHTML = email_id;

    

    if(user != null){

    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')
     window.location.href = 'index.html';

  }
});




function logout(){
  firebase.auth().signOut();
}







// Añadir un listener en tiempo real
 //  firebase.auth().onAuthStateChanged( firebaseUser => {
//Si existe autenticación hacer.....
   // if(firebaseUser) {
     //    window.location.href = "form.html";
    //} else {
      //console.log('no logueado');

    //}    
  //});




