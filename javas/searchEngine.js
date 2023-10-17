
var win;
var helperWin;

function search() {

  win = remote.getCurrentWindow();

  const { BrowserWindow, screen } = require('electron').remote;
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  helperWin = new BrowserWindow({
    width: width - 40,
    height: 150,
    x: 20,
    y: height - 150,
    show: false,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  helperWin.loadFile('pages/helper/helper.html');
  helperWin.show();
  helperWin.on('closed', () => {
    win.restore();
  })
  helperWin.setAlwaysOnTop(true);

  win.minimize();

}
