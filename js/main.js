/**
 * Created by huxiangtao on 14-6-17.
 */

require.config({
    baseUrl : "../js/lib",
    paths : {
        "jquery" : "jquery-1.11.1",
        "search" : "../module/search",
    },
    shim : {
        lazyloadmin : {'export':'ld','deps' : ['jquery']}
    }
});

define('core',['jquery'],function($) {
    return $;
});


require(['core'],function($) {
});

