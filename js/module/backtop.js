/**
 * Created by huxiangtao on 14-6-17.
 */

define(['jquery'],function($) {

    var backtop = function() {
        var $text = "返回顶部",
            $elem = $('<a class="backToTop">hh</a>');

        $elem.click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
        });

        function $backTopFun() {
            $elem.appendTo($('body')).text($text);
            var st = $(document).scrollTop(),
                winh = $(window).height();

            (st > 100) ? $elem.fadeIn() : $elem.fadeOut();
        }

        $(window).bind("scroll",$backTopFun);
    };

    return {
        backtop : backtop
    };

});