const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, dialog} = electron;

let appWindow;

app.on('ready', () => {
	appWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false
	});

	appWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'app.html'),
		protocol: 'file:',
		slashes: true
	}));
	
	appWindow.on('ready-to-show', () => {
		appWindow.maximize();
	});
})
.on('window-all-closed', () => app.quit());
