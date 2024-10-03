const { app, BrowserWindow } = require('electron')
const path = require('path')

// Vérification manuelle si on est en mode développement
const isDev = process.env.NODE_ENV === 'development'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  })

  if (isDev) {
    // En mode développement, charger depuis le serveur React
    mainWindow.loadURL('http://localhost:3000')
  } else {
    // En production, charger les fichiers compilés de React
    mainWindow.loadFile(path.join(__dirname, '../frontend/build/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
