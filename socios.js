$(function() {
  $( "#tabs" ).tabs({
    collapsible: true
  });
});

$(document).ready(function() {
  $.getJSON( "timeline.json", function( data ) {
    var item = "";
    var color = 0;
    $.each(data.mensajes, function( key, val ) {
      console.log(val.Autor);
      color = color + 20;
      $( "#msg" ).prepend(
        "<div id='"+key+"'>"+
          "<img src="+val.Avatar+" alt=fotouser.jpeg style=width:60px; height:60px;>"+
          "<h3><b>"+val.Autor+"</b> - "+val.Titulo+" - "+val.Fecha+"</h3>"+
          "<h5>"+val.Contenido+"</h5>"+
        "</div>" );

        $("#"+key).css("margin","20px");
        $("#"+key).css("margin-bottom","10px");
        $("#"+key).css("padding","20px");
        $("#"+key).css("border","5px solid rgb(0,"+color+",0)");
        $("#"+key+" img").css("float","left");
        $("#"+key+" img").css("margin","5px");
      //item =  "<li id='"+key+"'>" + val.Autor + "</li>" );
    });

    //"<p>"val.Autor+"</p>"+
    //
    //"<h1>"val.Contenido"</h1>"+

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
