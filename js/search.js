/**
 * Created with IntelliJ IDEA.
 * User: huxiangtao
 * Date: 13-9-13
 * Time: 上午10:22
 * To change this template use File | Settings | File Templates.
 */

$(function() {
    $.ajax({
        url: "search.xml",
        dataType: "xml",
        success: function( xmlResponse ) {
            var data = $( "article", xmlResponse ).map(function() {
                return {
                    value: $( "title", this ).text() + ", " +
                        ( $.trim( $( "date", this ).text() ) ),
                    desc: $("description", this).text(),
                    url: $("url", this).text()
                };
            }).get();

            $( "#J_search" ).autocomplete({
                source: data,
                  minLength: 0,
                select: function( event, ui ) {
                    window.location.href = ui.item.url;
                }
            });
        }
    });
});