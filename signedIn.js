window.onload = checkUser;

function checkUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            document.getElementById('user').innerHTML += `<img src="${user.photoURL}" />`
            document.getElementById('welcome').innerHTML += user.displayName
        } else {
          // No user is signed in.
            window.location.replace('http://localhost:5500')
        }
      });
}