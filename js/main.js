/**
 * Created by huxiangtao on 14-6-17.
 */

require.config({
    baseUrl : "js/lib",
    paths : {
        "jquery" : "jquery",
        "lazyloadmin" : "jquery.lazyload.min",
        "nprogress" : "nprogress",
        "search" : "../module/search",
        "backtop" : "../module/backtop",
        "lazyload" : "../module/lazyload",
        "sidenav" :  "../module/sidenav"

    },
    shim : {
        lazyloadmin : {'export':'ld','deps' : ['jquery']},
        nprogress : {'export' : 'nprogress','deps' : ['jquery']}
    }
});


require(['backtop','sidenav'],function(backtop,sidenav) {
    sidenav.sidenav();
    backtop.backtop();

});

