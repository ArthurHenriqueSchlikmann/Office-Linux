const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('https://www.office.com/?auth=1')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
	if (process.plataform !== 'darwin') app.quit()
})
