// grab elements
const button = document.getElementById('sign-in');

// event  listeners
button.addEventListener('click', () => {
  console.log('Signing In');

  // call the signIn function to action
  signIn();
});

function signIn() {
  // create an instance of the Google provider Object
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      // check the user information is coming back
      console.log(user);
      // code which runs on success from here:
      // call the function with this data passed in
    //   userInfo(user);
        
        // if logged in send to new page
        window.location.replace('http://localhost:5500/signedIn.html')
    })  // code which runs on fail from here (slimmed down)
    .catch(function (error) {
      console.log(error);
    });
}

// function userInfo(user) {
//   //render user information into the empty html div id="user" in the browser
//   document.getElementById('user').innerHTML += `<img src="${user.photoURL}" />`;
//   document.getElementById('user').innerHTML += 'User: ' + user.displayName;
// }
