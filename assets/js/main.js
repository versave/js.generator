const electron = require('electron');
const remote = electron.remote;
const Generator = require('./assets/js/generator.js');
const FileReader = require('./assets/js/file-reader.js');
const classes = {
	active: 'active'
};
const settings = {
	jsType: '',
	files: []
};

// Create HTML lists
new FileReader('./assets/src/vanilla/methods/', '#vanilla-container');
new FileReader('./assets/src/es6/methods/', '#es6-container');

// Get JS Type
window.addEventListener('load', () => {
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

						getSiblings(target).forEach(sibling => {
							sibling
								.classList
									.remove(classes.active);
						});
					}
				});
			});
});

// Run Generator
document
	.querySelector('#submit')
		.addEventListener('click', e => {
			e.preventDefault();

			remote
				.dialog
					.showOpenDialog({properties: ['openDirectory']}, path => {
						const inputs = document.querySelectorAll('.tab.active input:checked');

						inputs.forEach(input => {
							settings
								.files
									.push(input.value);

							if(inputs.length == settings.files.length) {
								new Generator(settings.jsType, settings.files, path[0]);

								settings.files = [];
							}
						});
				
					});

		});

// Get Siblings helper function
function getSiblings(elem) {
	const siblings = [];
	let sibling = elem.parentNode.firstChild;

	while(sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;
};



