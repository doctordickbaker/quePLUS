/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = ["empty"];
var userInput = document.getElementById('userInput');
var userSubmit = document.getElementById('userSubmit');



function listCreate() {
    feed.innerHTML = "";
  for(var x=1;x<list.length;x++){
    console.log("running");
    var card = document.createElement('div');
    card.className = "card";
    feed.appendChild(card);
    
    var order = document.createElement('div');
    order.className = "order";
    order.textContent = x;
    card.appendChild(order);
    
    var vidInfo = document.createElement('div');
    vidInfo.className = "vidInfo";
    vidInfo.textContent = list[x];
    card.appendChild(vidInfo);
    
    //var vidLength = document.createElement('div');
    //vidLength.className="vidLength";
    //vidLength.textContent = list[x];
    //card.appendChild(vidLength);
  };
};

function user() {
  console.log("onclick registered");
  list[list.length] = userInput.value;
  listCreate();
}

userSubmit.onclick = user;
listCreate();