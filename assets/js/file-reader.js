module.exports = class FileReader {
	constructor(folder, container) {
		this.fs = require('fs');
		this.folder = folder;
		this.container = container;

		this.init();
	};

	init() {
		this
			.fs
				.readdir(this.folder, (err, files) => {
					if(err) {
						return err;
					}

					files.forEach((file, index) => {
				    	const incrementor = document.querySelectorAll(`#checkbox-${index + 1}`).length ? 'a' : '';
				    	const text = file.split('.js')[0].replace(/-/g, ' ');

				    	document
				    		.querySelector(this.container)
				    			.insertAdjacentHTML('beforeend', `
				    				<li>
										<div class="checkbox">
											<input type="checkbox" name="checkbox-${incrementor}${index + 1}" id="checkbox-${incrementor}${index + 1}" value="${file}">

											<label for="checkbox-${incrementor}${index + 1}">${text}</label>
										</div>
									</li>
				    			`);
					});
				});
	};
};