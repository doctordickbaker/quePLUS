/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = [];
var userInput = document.getElementById('userInput');
var userSubmit = document.getElementById('userSubmit');



function listCreate() {
  for(var x=0;x<list.length;x++){
    console.log("running");
    var card = document.createElement('div');
    card.className = "card";
    feed.appendChild(card);
    
    var order = document.createElement('div');
    order.className = "order";
    order.textContent = list[x];
    card.appendChild(order);
    
    var vidInfo = document.createElement('div');
    vidInfo.className = "vidInfo";
    vidInfo.textContent = list[x];
    card.appendChild(vidInfo);
    
    var vidLength = document.createElement('div');
    vidLength.className="vidLength";
    vidLength.textContent = list[x];
    card.appendChild(vidLength);
  };
};

function user() {
  console.log("onclick registered");
  list[list.length] = userInput.value;
  listCreate();
}

userSubmit.onclick = user;
listCreate();