/**
*   Window Events
*/
windowEvents() {
    this
    	.$win
        	.on('load scroll', () => {
            	this.winST = this.$win.scrollTop();
        	});
};