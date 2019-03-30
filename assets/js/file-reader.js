module.exports = class FileReader {
	constructor(items) {
		this.fs = require('fs');
		this.items = items;
	};

	init() {
		return new Promise((resolve, reject) => {
			this
				.items
					.forEach((item, index) => {
						const {folder, container} = item;
						const itemIndex = index;

						this
							.fs
								.readdir(folder, (err, files) => {
									if(err) {
										return err;
									}

									files.forEach((file, index) => {
								    	const incrementor = document.querySelectorAll(`#checkbox-${index + 1}`).length ? 'a' : '';
								    	const text = file.split('.js')[0].replace(/-/g, ' ');

								    	document
								    		.querySelector(container)
								    			.insertAdjacentHTML('beforeend', `
								    				<li>
														<div class="checkbox">
															<input type="checkbox" name="checkbox-${incrementor}${index + 1}" id="checkbox-${incrementor}${index + 1}" value="${file}">

															<label for="checkbox-${incrementor}${index + 1}">${text}</label>
														</div>
													</li>
								    			`);

								    	if(this.items.length == itemIndex + 1 && files.length == index + 1) {
								    		resolve();
								    	}
									});
								});
					});
		});
	};
};