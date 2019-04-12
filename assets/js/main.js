const electron = require('electron');
const remote = electron.remote;
const Generator = require('./assets/js/generator.js');
const FileReader = require('./assets/js/file-reader.js');
const utils = require('./assets/js/utils.js');
const body = document.querySelector('body');
const classes = {
	active: 'active',
	load: 'load'
};
const settings = {
	jsType: '',
	files: []
};


/**
 *	Load in files and get JS type
 */
window.addEventListener('load', () => {
	
	// Create HTML lists
	new FileReader([
		{
			folder: './assets/src/vanilla/methods/',
			container: '#vanilla-container'
		},
		{
			folder: './assets/src/es6/methods/',
			container: '#es6-container'
		}
	]).init().then(() => {
		body
			.classList
				.add('loaded');
		
		setTimeout(() => utils.toggleBodyClass('load', false), 200);
	});
	
	settings.jsType = document.querySelector('.tabs .tabs__head input:checked').value;

	document
		.querySelectorAll('.tabs .tabs__head input')
			.forEach(input => {
				input.addEventListener('change', function() {
					if(this.checked) {
						settings.jsType = this.value;

						const target = document.querySelector(this.parentNode.dataset.tab);

						target
							.classList
								.toggle(classes.active);

						utils.getSiblings(target).forEach(sibling => {
							sibling
								.classList
									.remove(classes.active);
						});
					}
				});
			});
});

/**
 *	Run Generator
 */
document
	.querySelector('#submit')
		.addEventListener('click', e => {
			e.preventDefault();

			utils.toggleBodyClass('inactive', true);

			remote
				.dialog
					.showOpenDialog({properties: ['openDirectory']}, path => {
						if(path == undefined) {
							utils.toggleBodyClass('inactive', false);
							return;
						}

						const inputs = document.querySelectorAll('.tab.active input');
						const inputsChecked = document.querySelectorAll('.tab.active input:checked');

						utils.toggleBodyClass('load', true);

						for(const input of inputs) {
							if(input.checked) {
								settings
									.files
										.push(input.value);
							}

							if(inputsChecked.length == settings.files.length) {
								new Generator(settings.jsType, settings.files, path[0]);

								settings.files = [];

								break;
							}
						}				
					});

		});
