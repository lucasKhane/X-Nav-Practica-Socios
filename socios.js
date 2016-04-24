$(function() {
  $( "#tabs" ).tabs({
    collapsible: true
  });
});

$(document).ready(function() {
    $.ajax({
      type: "GET",
	    url: "text.txt",
	    cache: false
    }).done(function( text ) {
        $("#local").click(function(){
	         $("#texto").html(text)
	     });
    })
    .fail(function( text ) {
        $("#local").click(function(){
           $("#texto2").html("Ha habido un fallo")
        });
    });
});
