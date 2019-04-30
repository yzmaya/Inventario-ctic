firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    console.log('usuario autentificado');
    window.location.href = 'form.html';

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      console.log('usuario logueado con no null');

    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')

  }
});

function login(){

  var userEmail = document.getElementById('campo_email').value;
  var userPwd = document.getElementById('campo_pwd').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPwd).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
