/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = ["empty"];
var userInput = document.getElementById('userInput');
var userSubmit = document.getElementById('userSubmit');
var playing = false;



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
       
          var urlshort = currentLoopIterationX.slice(17);
          var urlcombined = "https://www.youtube.com/embed/" + urlshort;  
          var playing = false;
          
          var videoPlayer = document.createElement('iframe');         /// create blank iframe
          videoPlayer.src = list[currentCard];                        /// set created fame's src to for loops
          console.log(urlcombined);
          playing = true;
        
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
  user();
};

listCreate();