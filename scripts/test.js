function triggerChange() {

}


let timerToChat;

function startsetup () {
    console.log("highligh")
}

function contentChangeCallback() {
    console.log("new msg arrived");
}

function newMsgAdded () {

    const targetNode = document.querySelector('.n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs');
    const config = { childList: true, subtree: false };
    const observer = new MutationObserver(contentChangeCallback);
    observer.observe(targetNode, config);

}


function checkDocumentLoaded() {
  const chatWindow = document.querySelector('#main');
  if (chatWindow) {

    startsetup();

    const personTiles = document.querySelector('._3YS_f._2A1R8');
    personTiles.addEventListener('click',startsetup);
    
    timerToChat.clearTimeout;
    
  } else {
    console.log("chat not opened");
    timerToChat = setTimeout(checkDocumentLoaded, 1000);
  }
}

checkDocumentLoaded();  
