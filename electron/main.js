const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport'); // Modification ici

let serialPort;

// Vérification manuelle si on est en mode développement
const isDev = process.env.NODE_ENV === 'development';

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
  });

  if (isDev) {
    // En mode développement, charger depuis le serveur React
    mainWindow.loadURL('http://localhost:3000');
  } else {
    // En production, charger les fichiers compilés de React
    mainWindow.loadFile(path.join(__dirname, '../frontend/build/index.html'));
  }
}

app.whenReady().then(() => {
  // Ouvrir le port série
  serialPort = new SerialPort({
    path: 'COM10', // Notez que l'API a changé pour nécessiter un objet de configuration
    baudRate: 9600, // Ajustez selon votre appareil
  });

  serialPort.on('open', () => {
    console.log('Port série ouvert');
  });

  serialPort.on('error', (err) => {
    console.error('Erreur du port série :', err.message);
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Gestion de l'événement 'write-serial'
ipcMain.handle('write-serial', async (event, message) => {
  if (serialPort && serialPort.isOpen) {
    return new Promise((resolve, reject) => {
      serialPort.write(message + '\n', (err) => {
        if (err) {
          console.error('Erreur lors de l\'écriture sur le port série :', err.message);
          reject(err);
        } else {
          console.log('Message envoyé :', message);
          resolve('Message envoyé avec succès');
        }
      });
    });
  } else {
    console.error('Le port série n\'est pas ouvert');
    throw new Error('Le port série n\'est pas ouvert');
  }
});

app.on('window-all-closed', () => {
  if (serialPort && serialPort.isOpen) {
    serialPort.close();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
