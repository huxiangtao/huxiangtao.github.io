/**
 * Created by huxiangtao on 14-6-17.
 */

require.config({
    baseUrl : "../dist/js",
    paths : {
        "jquery" : "node_modules/jquery.min",
        "lunr" : "node_modules/lunr.min",
    },
    shim : {
        lunr : {'export':'lunr','deps' : []}
    }
});

define('core',['jquery'],function($) {
    return $;
});


require(['core'],function($) {
});

