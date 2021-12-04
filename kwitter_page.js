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
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png' style='height:10px;width:10px;'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+ "'onclick='updateLike(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_width_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function updateLike(message_id){
console.log("click on LIKE button- "+ message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_like=Number(likes)+1;
console.log(updated_like);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_like
});
}
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
