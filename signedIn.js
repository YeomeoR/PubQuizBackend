window.onload = checkUser;
//grab elements
const quizButton = document.getElementById('to-quiz');

// event listeners
quizButton.addEventListener('click', () => {
  console.log('to the quiz');
  startQuiz();
});

function checkUser() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      document.getElementById(
        'user',
      ).innerHTML += `<img src="${user.photoURL}" />`;
      document.getElementById('welcome').innerHTML += user.displayName;
    } else {
      // No user is signed in.
      window.location.replace('http://localhost:5500');
    }
  });
}

function startQuiz() {
  window.location.replace('http://localhost:5501/quiz.html'); // only links up on localhost atm and man does it need <re-styling!>
}

function gameOver() {
// game is over when the payer gets an answer wrong

  addToDatabase(score);
  getHighScores();
}

// not called anywhere, yet. Should be called at the end of the game. Need GAME OVER function
function addToDatabase(score) {
  let db = firebase.firestore();
  db.collection('scores').add({
    name: user.displayName,
    score: 1, // need a counter for correct answers to make this dynamic
  });
}

function getHighScores() {
  let db = firebase.firestore();
  db.collection('users')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        console.log(data);
      });
    });
}
