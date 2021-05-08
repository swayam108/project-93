
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBFsVexA6ktIPVJSnh3w9n9GWtX3V8RZi4",
      authDomain: "kwitter-a2809.firebaseapp.com",
      databaseURL: "https://kwitter-a2809-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2809",
      storageBucket: "kwitter-a2809.appspot.com",
      messagingSenderId: "198977458225",
      appId: "1:198977458225:web:dd8d2c13b466b634ca0510"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
