/**
 *   Window Events
 */
app.windowEvents = function() {
    app
   		.$win
        	.on('load scroll', function() {
            	app.winST = app.$win.scrollTop();
        	});
};