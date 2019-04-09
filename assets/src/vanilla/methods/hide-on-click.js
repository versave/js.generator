/**
 *   Hide On Click
 */
app.hideOnClick = function($element, $target, className) {
    app
        .$doc
            .on('click', function(e) {
                var conditionOne = $(e.target).parents().is($element);
                var conditionTwo = $(e.target).is($element);

                if(!conditionOne && !conditionTwo) $target.removeClass(className);
            });
};