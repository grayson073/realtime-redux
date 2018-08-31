const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const db = admin.database();
const playersRef = db.ref('players');
const gamesRef = db.ref('games');
const userGamesRef = db.ref('userGames');
const movesRef = db.ref('moves');

exports.playerQueue = functions.database.ref('/plays/{uid}').onCreate((snapshot, context) => {
  const { uid } = context.params;

  return playersRef.once('value')
    .then(snapshot => {
      const [player] = Object.keys(snapshot.val())
        .filter(key => key !== uid);

        if(!player) return null;

        const newGameRef = gamesRef.push();

        return Promise.all([
          newGameRef.set({ player1: uid, player2: player }),
          playersRef.child(uid).remove(),
          playersRef.child(player).remove(),
          userGamesRef.child(uid).child(newGameRef.key).set(true),
          userGamesRef.child(player).child(newGameRef.key).set(true)
        ]);
    });
});