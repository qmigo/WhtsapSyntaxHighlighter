function openReadMore() {
  const readMoreBtns = document.getElementsByClassName("read-more-button");
    for(const btn of readMoreBtns) {
      btn.click();
    }
}

function start() {
  
  const nodes = document.getElementsByClassName("oq31bsqd");
  
  for (let node of nodes) {

    const data = node.querySelector("._11JPr>span");

    if (data) {

      const CodeTag = data.querySelector('code');
      if(CodeTag) {
        const preElement = document.createElement('pre');
        preElement.classList += " extension-dark-bg"
        preElement.appendChild(CodeTag);
        data.appendChild(preElement)
      }
      
    }
  }
  hljs.highlightAll();

}

function startsetup() {
  setTimeout(()=>{
    openReadMore();
    setTimeout(()=>{
      start();
    },200)
  },200)
}

function contentChangeCallback(mutationsList, observer) {
  startsetup();
}

function newMsgAdded() {
  const targetNode = document.querySelector('.n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs');
  const config = { childList: true, subtree: false };
  const observer = new MutationObserver(contentChangeCallback);
  observer.observe(targetNode, config);
}

let timerToChat;

function checkDocumentLoaded() {
  const chatWindow = document.querySelector('#main');
  if (chatWindow) {

    newMsgAdded();

    const personTiles = document.querySelector('._3YS_f._2A1R8');
    personTiles.addEventListener('click',()=>{
      newMsgAdded();
    });

   
    timerToChat.clearTimeout;
    
  } else {
    console.log("chat not opened");
    timerToChat = setTimeout(checkDocumentLoaded, 1000);
  }
}

checkDocumentLoaded();  
