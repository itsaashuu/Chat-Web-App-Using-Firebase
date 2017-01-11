var config = {
    apiKey: "AIzaSyBqucLe24KRDc842ye5_k_KKagmJJtkO-8",
    authDomain: "fir-learning-bff6d.firebaseapp.com",
    databaseURL: "https://fir-learning-bff6d.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "732903689793"
};
firebase.initializeApp(config);

const msg = document.getElementById('message');

function sendMessage(){
    var Msg = msg.value;
    firebase.database().ref('/messages').push(Msg);
}

function LogOut(){
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(firebaseUser => {
   if(firebaseUser){
       console.log(firebaseUser);
       logOut.classList.remove('hide');
   }else{
       console.log('not logged in');
       window.open("index.html",'_self',false);
   }
});

var count = 0;

firebase.database().ref('/messages').on('child_added', function(data){
    console.log(data.val());
    var node = document.createElement('ul');
    node.innerHTML = data.val();
    document.getElementById('chat').appendChild(node);
})