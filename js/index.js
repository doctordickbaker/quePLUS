/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = ["empty"];
var grover = document.getElementById('grover');
var userInput = document.getElementById('userInput');
var userSubmit = document.getElementById('userSubmit');
var player = document.getElementById('player');
var firstpartURL = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';

var endURL = 'frameborder="0" allowfullscreen></iframe>"';
userInput.value="";

/////// Control for GROVER,  the sarcastic helper bot.

function groverBot(say){
  grover.innerHTML = say;
  
};

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
      
    vidInfo.onclick = function(currentLoopIterationX) {
      return function() {
        var userURL = list[currentLoopIterationX].slice(-11) + '"';
        player.innerHTML = firstpartURL + userURL + endURL;
        console.log(player.innerHTML);
            }
      }(x);

    //var vidLength = document.createElement('div');   ///  create Video length
    //vidLength.className="vidLength";
    //vidLength.textContent = list[x];
    //card.appendChild(vidLength);

    var delButton = document.createElement('div');  /////create delete button
    delButton.className = "fontawesome-minus";
    card.appendChild(delButton);

    delButton.onclick = function(currentLoopIterationX) {
      return function() {
        list.splice(currentLoopIterationX,1);
        listCreate();
      }
    }(x);

  };
};

function user() {
  list[list.length] = userInput.value;
  listCreate();
}



userSubmit.onclick = function() {
  if(userInput.value === ""){
    groverBot("You didn't enter anything yet.  Pathetic human");
  };
  if(userInput.value != "") {
    user();
    userInput.value="";
    groverBot("I honestly didn't think you could handle such a complicated task.");
  };

  
};

listCreate();
groverBot("Paste a youtube URL. I dare you.");