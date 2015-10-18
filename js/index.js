/// #order #vidInfo #vidLength

var feed = document.getElementById("feed");
var list = ["test0","test1","test2"];


function listCreate() {
  for(var x=0;x<list.length;x++){
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
  }
};


listCreate();