const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

const constants = require('./common/constants.js');
const events = require('./common/events.js');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

console.dir(constants.ipcChannels.test);

ipcMain.on('test-send', function (a, b) {
    console.log('fromFE', b);
    a.sender.send('test-reply', { name: 'FROM BE' });
});