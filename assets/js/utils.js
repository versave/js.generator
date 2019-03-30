module.exports = {
	getSiblings(elem) {
		const siblings = [];
		let sibling = elem.parentNode.firstChild;

		while(sibling) {
			if (sibling.nodeType === 1 && sibling !== elem) {
				siblings.push(sibling);
			}
			sibling = sibling.nextSibling
		}

		return siblings;
	},
	toggleLoader(condition) {
		condition ? body.classList.add(classes.load) : body.classList.remove(classes.load);
	}
};