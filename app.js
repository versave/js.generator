const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, dialog} = electron;

let appWindow;

app.on('ready', () => {
	appWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	// appWindow.setMenu(null);

	appWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'app.html'),
		protocol: 'file:',
		slashes: true
	}));
});
