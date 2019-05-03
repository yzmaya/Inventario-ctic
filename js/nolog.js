firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in. 

    if(user != null){

    var email_id = user.email;
    document.getElementById("info").innerHTML = "Usuario : " + email_id;
    var uid = user.uid;
     document.getElementById("uid").innerHTML = uid; 
     



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
