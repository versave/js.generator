/**
 *    Equalize Height
 */
app.equalizeHeight = function($elements, initAfter) {
    function init() {
        app
            .$win
                .on('load resize', function() {
                    fixHeight();
                });
    };

    function fixHeight() {
        var height  = 0;

        $elements.each(function() {
            var $this = $(this);

            setHeight($this, 'auto');

            if($this.outerHeight() > height) {
                height = $this.outerHeight();
            }
        });

        setHeight($elements, height + 'px');
    };

    function setHeight($element, height) {
        $element.css('height', height);
    };

    if(app.$win.outerWidth() > initAfter) {
        init();
    }
};