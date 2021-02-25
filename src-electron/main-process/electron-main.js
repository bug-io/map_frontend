import { app, BrowserWindow, nativeTheme } from 'electron'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = __dirname
}

// const api = require('../api.js')
let mainWindow

function createApi () {
  let {PythonShell} = require('python-shell')

  let {shell} = require('electron')
  
  shell.openPath('C:/Users/jotap/OneDrive/Área de Trabalho/Bug.io/Testes/electron_py_api/run.bat')

  // let pyshell = new PythonShell(
  //   'C:/Users/jotap/OneDrive/Área de Trabalho/Bug.io/Testes/electron_py_api/hello.py',{env: }
  // );

  // pyshell.on('message', function(message) {
  //   console.log(message);
  //   console.log(typeof message);
  // });
}

function createWindow () {
  /**
   * Initial window options
   */
  // api();
  
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      // Change from /quasar.conf.js > electron > nodeIntegration;
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
      nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,

      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      // preload: path.resolve(__dirname, 'electron-preload.js')
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createApi()
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createApi()
    createWindow()
  }
})
