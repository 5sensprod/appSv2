const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  writeSerial: (message) => ipcRenderer.invoke('write-serial', message),
})

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script loaded')
})
