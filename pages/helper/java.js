
//Bon à savoir: (var) => {} égale à function(var) {}

const remote = require('electron').remote;

function init() {

  const { net } = require('electron').remote;
  const request = net.request('https://bigstones.fr/Network/pages/conversations/chats/xmls/6.txt')
  request.on('response', function(response) {
    response.on('data', function(chunk) {
      document.getElementById("centerText").innerHTML = chunk;
    })
    response.on('end', function() {
      console.log('Plus de données reçues.')
    })
  })
  request.end()

  var ipcRenderer = require('electron').ipcRenderer;
  ipcRenderer.on('filename', function (event,store) {
      alert(store);
  });

}

function closed() {

  if(confirm("Etes-vous sûr de vouloir quitter l'aide actuelle ?")) {
    remote.getCurrentWindow().close();
  }

}

function back() {

  console.log("backed !");

}
