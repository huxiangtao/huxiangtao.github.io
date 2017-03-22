/**
 * Created by huxiangtao on 14-6-17.
 */

require.config({
    baseUrl : "../js/lib",
    paths : {
        "jquery" : "jquery-1.11.1",
        "lazyloadmin" : "jquery.lazyload.min",
        "nprogressmin" : "nprogressmin",
        "search" : "../module/search",
        "backtop" : "../module/backtop",
        "lazyload" : "../module/lazyload",
        "sidenav" :  "../module/sidenav",
        "nprogress" : "../module/nprogress"

    },
    shim : {
        lazyloadmin : {'export':'ld','deps' : ['jquery']},
        nprogress : {'export' : 'nprogress','deps' : ['jquery']}
    }
});

define('core',['jquery','nprogressmin'],function($) {
    return $;
});


require(['core','nprogress','backtop','sidenav'],function($,nprogress,backtop,sidenav) {
    nprogress.nprogress();
    sidenav.sidenav();
    backtop.backtop();
});

