firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

   
    

    if(user != null){



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
