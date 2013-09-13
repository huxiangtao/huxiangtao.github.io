/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-13
 * Time: 上午10:22
 * To change this template use File | Settings | File Templates.
 */


(function() {

    var $text = "返回顶部",
        $elem = $('<div class="backToTop"></div>').appendTo($('body')).text($text).click(function() {}),
        $backTopFun = function() {
            var st = $(document).scrollTop(),
                winh = $(window).height();

            (st > 0) ? $elem.show() : $elem.hide();
        };

    $(window).bind("scroll",$backTopFun);
})();