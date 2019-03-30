module.exports = class Generator {
	constructor(directory, files, location) {
		this.fs = require('fs');
		this.beautify = require('js-beautify').js;
		this.utils = require('./utils.js');
		this.directory = `./assets/src/${directory}`;
		this.filesPath = `${this.directory}/methods/`;
		this.newFilePath = location;
		this.template = `${this.directory}/template.js`;
		this.readFiles = [];
		this.files = files; 

		this.init();
	};

	init() {
		this.createFile();

		this
			.getMethods(this.filesPath, this.files)
				.then(arr => {
					this
						.editTemplate(arr)
							.then(methods => {
								this.writeMethods(methods);
							});
		});	
	};

	getMethods(folder, files) {
		return new Promise(resolve => {
			files.forEach(file => {
				this
					.fs
						.readFile(`${folder}${file}`, 'utf8', (err, data) => {
							this
								.readFiles
									.push(data);

							if(files.length == this.readFiles.length) {
								resolve(this.readFiles);
							}
						});
			});
		});
	};

	editTemplate(methodsArray) {
		return new Promise(resolve => {
			this
				.fs
					.readFile(this.template, 'utf8', (err, data) => {
						const methods = data.replace(/METHODS/g, methodsArray.join('\n\n'));
						const beautifiedMethods = this.beautify(methods, {
							indent_size: 4,
							space_in_empty_paren: true,
							keep_array_indentation: true
						});

						resolve(beautifiedMethods);
					});
		});
	};

	writeMethods(methods) {
		this
			.fs
				.writeFile(this.newTemplate, methods, 'utf8', err => {
					if(err) {
						throw err;
					}

					setTimeout(() => this.utils.toggleLoader(false), 500);
				});
	};

	createFile() {
		this
			.fs
				.createReadStream(this.template).pipe(this.fs.createWriteStream(`${this.newFilePath}/main.js`));

		this.newTemplate = `${this.newFilePath}/main.js`;
	};
};

