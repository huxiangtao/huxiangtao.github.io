/**
 * Created by huxiangtao on 14-6-17.
 */

define(['jquery'],function($) {

    var sidenav = function() {
        var $button = $(".J_sideMenu");
            $button.click(function() {
                $(".left-menu").toggle('slow',function() {
                    $(this).css('background-color','red');
                });
            });

    };

    return {
        sidenav : sidenav
    };
});
