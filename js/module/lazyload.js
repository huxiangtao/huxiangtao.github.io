/**
 * Created by huxiangtao on 14-6-17.
 */

define(['jquery','lazylodmin'],function($,ld) {

    var lazyLoad = function() {
        // 调用图片延时加载
        lazyload();

        function lazyload() {
            var $images = $("img.J_lazy"),
                $window = $(window);

            /**
             * loadImg
             * @param  {Array} images
             */
            var loadImg = function(images) {
                var top = $window.scrollTop() + $window.height();

                $.each(images, function(){
                    var $this = $(this),
                        src = $this.attr("data-original");

                    if ($this.offset().top < top) {
                        $this.attr("src", src);
                        $this.removeClass("J_lazy");
                    }
                });
            };

            if(!!$images.length) {
                loadImg($images);
            }
            $(document).on("scroll resize", function() {
                $("img.J_lazy").lazyload({
                    effect : "fadeIn"
                });
                $("img.J_lazy").removeClass("J_lazy");
            });
        };
      };
    return {
        lazyload : lazyLoad
    };
});

