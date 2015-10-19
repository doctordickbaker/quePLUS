/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = ["empty"];
var userInput = document.getElementById('userInput');
var userSubmit = document.getElementById('userSubmit');



/////// List creator. Called by other functions when the list needs to be recreated////////

function listCreate() {
  
  console.log("Creating list");
    feed.innerHTML = "";
  for(var x=1;x<list.length;x++){
    
    var card = document.createElement('div');  /// create the card itself,  which contains the below divs.
    card.className = "card";
    card.id =  "card" + x;
    feed.appendChild(card);
    
    var order = document.createElement('div');   ///create ordered number (place in list)
    order.className = "order";
    order.textContent = x;
    card.appendChild(order);
    
    var vidInfo = document.createElement('div');  /// Create video info (title)///
    vidInfo.className = "vidInfo";
    vidInfo.textContent = list[x];
    card.appendChild(vidInfo);
    
    //var vidLength = document.createElement('div');   ///  create Video length
    //vidLength.className="vidLength";
    //vidLength.textContent = list[x];
    //card.appendChild(vidLength);
    
    var delButton = document.createElement('div');  /////create delete button
    delButton.className = "fontawesome-minus";
    card.appendChild(delButton);
    
    function deleteCard(x) {
      console.log(x);
      list.splice(x,1);
      listCreate();
    };
    
    delButton.onclick = function(){
      deleteCard(x);
    };
    
    
  };
};

function user() {
  list[list.length] = userInput.value;
  listCreate();
}



userSubmit.onclick = function() {
  user();
};

listCreate();

/// note ON HOW TO REMOVE CARD:  remove list[x]