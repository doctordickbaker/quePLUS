/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = ["empty"];
var userInput = document.getElementById('userInput');
var userSubmit = document.getElementById('userSubmit');



function listCreate() {
    feed.innerHTML = "";
  for(var x=1;x<list.length;x++){
    console.log(x);
    var card = document.createElement('div');
    card.className = "card";
    card.id =  "card" + x;
    console.log(currentCard);
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
    
    var delButton = document.createElement('div');
    delButton.className = "fontawesome-minus";
    card.appendChild(delButton);
    
    delButton.onclick= function deleteCard() {
      
    }
  };
};

function user() {
  console.log("onclick registered");
  list[list.length] = userInput.value;
  listCreate();
}

userSubmit.onclick = user;
listCreate();