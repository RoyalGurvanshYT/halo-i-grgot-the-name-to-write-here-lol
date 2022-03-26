
var firebaseConfig = {
      apiKey: "AIzaSyDGiPbMglKIN6Gs-1-ZWL72-VwiD3eqy00",
      authDomain: "kwiiiiitttterr.firebaseapp.com",
      databaseURL: "https://kwiiiiitttterr-default-rtdb.firebaseio.com",
      projectId: "kwiiiiitttterr",
      storageBucket: "kwiiiiitttterr.appspot.com",
      messagingSenderId: "61007051980",
      appId: "1:61007051980:web:e259d2a79d33a4864f5669"
    };
    
    
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WeLc0mE " + user_name + "!!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

       console.log("room_name" + Room_names);
        row = "<div class ='room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)' > #"+ Room_names +"</div> <hr>";
        document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child("room_name").update({
    purpose:"adding_RoomName"
  
  });

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";


}
