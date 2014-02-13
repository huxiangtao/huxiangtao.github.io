/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-13
 * Time: 上午10:22
 * To change this template use File | Settings | File Templates.
 */

/*回到顶部*/
(function() {

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
})();

