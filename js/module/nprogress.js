/**
 * Created by huxiangtao on 14-6-17.
 */

define(['jquery','nprogressmin'],function($,nprogressmin) {

    var nprogress = function() {
        $(window).load(function() {
            NProgress.start();
            NProgress.inc();
            NProgress.done();
        });

    };

    return {
        nprogress : nprogress
    };
});