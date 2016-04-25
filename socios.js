$(function() {
  $( "#tabs" ).tabs({
    collapsible: true
  });
});

$(document).ready(function() {
  $.getJSON( "timeline.json", function( data ) {
    var item = "";
    $.each(data.mensajes, function( key, val ) {
      console.log(val.Autor);
      $( "#msg" ).prepend( "<p id='"+key+"'>"+val.Autor+"</p>" );
      //item =  "<li id='"+key+"'>" + val.Autor + "</li>" );
    });


  });

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
