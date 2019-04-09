/**
 *   Hide On Click
 */
hideOnClick($element, $target, className) {
    this
        .$doc
            .on('click', (e) => {
                const conditionOne = $(e.target).parents().is($element);
                const conditionTwo = $(e.target).is($element);

                if(!conditionOne && !conditionTwo) $target.removeClass(className);
            });
};