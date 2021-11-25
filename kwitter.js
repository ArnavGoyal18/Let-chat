function addUser(){
    user_name=document.getElementById("username").value;
    user_password=document.getElementById("password").value;
    localStorage.setItem("username", user_name);
    localStorage.setItem("password", user_password);
    window.location="Kwitter_room.html";
}