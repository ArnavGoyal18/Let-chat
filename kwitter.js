function addUser(){
    user_name=document.getElementById("").value;
    user_password=document.getElementById("").value;
    localStorage.setItem("username", user_name);
    localStorage.setItem("password", user_password);
    window.location="kwitter_room.html";
}