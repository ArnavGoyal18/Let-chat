const firebaseConfig = {
  apiKey: "AIzaSyDeT-rDB-n_iKffeNL2Ojwlb-rC4GgoepY",
  authDomain: "chat-app-d9cc4.firebaseapp.com",
  databaseURL: "https://chat-app-d9cc4-default-rtdb.firebaseio.com",
  projectId: "chat-app-d9cc4",
  storageBucket: "chat-app-d9cc4.appspot.com",
  messagingSenderId: "304720647673",
  appId: "1:304720647673:web:552ff632d701b876a31928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding Room Name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("room name-"+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        //End code
      });
    });
}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}