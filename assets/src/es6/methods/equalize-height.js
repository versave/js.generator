/**
 *    Equalize Height
 */
equalizeHeight($elements, initAfter) {
    const self = this;

    if(self.$win.outerWidth() > initAfter) {
        init();
    }

    function init() {
        self
            .$win
                .on('load resize', () => fixHeight());
    };

    function fixHeight() {
        let height  = 0;

        $elements.each(function() {
            const $this = $(this);

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
};