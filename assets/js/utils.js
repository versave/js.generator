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
	toggleBodyClass(className, condition) {
		condition ? body.classList.add(className) : body.classList.remove(className);
	}
};