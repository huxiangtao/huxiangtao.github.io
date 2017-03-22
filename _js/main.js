/**
 * Created by huxiangtao on 14-6-17.
 */

require.config({
    baseUrl : "../dist/js",
    paths : {
        "jquery" : "nodemodules/jquery.min",
        "lunr" : "nodemodules/lunr.min",
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

