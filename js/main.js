/**
 * Created by huxiangtao on 14-6-17.
 */

require.config({
    baseUrl : "js/lib",
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
        lazyloadmin : {'export':'ld','deps' : ['jquery']}
    }
});


require(['backtop','sidenav','nprogress'],function(backtop,sidenav,nprogress) {
    sidenav.sidenav();
    backtop.backtop();
    nprogress.nprogress();
});

