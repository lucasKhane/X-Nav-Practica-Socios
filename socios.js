var newsocio = [];

$(function() {
  $( "#tabs" ).tabs({
    collapsible: false
  });
});


var getNumMsg = function(){
  var c = document.getElementById("myline").childNodes.length;
  $( "#mensajes" ).html( "<b>Mensajes escritos: </b>"+c);
  console.log(c);
}

var getNumSocios = function(){
  $( "#socios" ).html("<b>Socios: </b>"+newsocio.length);
}

var getNumAsociados = function(){

}

var putmsgs = function(docJSON, tag){
  console.log(docJSON);
  $.getJSON(docJSON, function( data ) {
    var item = "";
    var color = 0;
    console.log("Join");
    $.each(data.mensajes, function( key, val ) {
      color = color + 40;
      console.log(tag);
      $(tag).prepend(
        "<div id='"+key+"'>"+
          "<img src="+val.Avatar+" alt=fotouser.jpeg style=width:60px; height:60px;>"+
          "<h3><b>"+val.Autor+"</b> - "+val.Titulo+" - "+val.Fecha+"</h3>"+
          "<h5>"+val.Contenido+"</h5>"+
        "</div>" );
        if (newsocio.indexOf(val.Autor) == -1){
          newsocio.push(val.Autor);
        };

        $("#"+key).css("margin","20px");
        $("#"+key).css("margin-bottom","10px");
        $("#"+key).css("padding","20px");
        $("#"+key).css("border","5px solid rgb(0,"+color+",0)");
        $("#"+key+" img").css("float","left");
        $("#"+key+" img").css("margin","5px");
    });
  }).done(function( text ) {
      switch (tag) {
        case "#timeline":
              getNumSocios()
          break;
        case "#myline":
              getNumMsg();
          break;
        case "#update":
              getNumSocios();
          break;
        default:

      }
  })
  .fail(function( text ) {
      console.log("HAY UN PROBLEMA");
  });
}

var actualizarEstado = function (estado){
  switch (estado) {
    case "timeline":
        //Hay que eliminar los dos, porque se crean IDs unicos y aunque esten ocultos se crean problemas para añadir los css (creo recordar que solo se aplicaba al primero)
        if (estado!="update"){
            $("#timeline").empty();
            $("#myline").empty();
            tag = "#timeline";
            putmsgs("timeline.json", tag);
        }
      break;
    case "myline":
        //Hay que eliminar los dos, porque se crean IDs unicos y aunque esten ocultos se crean problemas para añadir los css (creo recordar que solo se aplicaba al primero)
        $("#timeline").empty();
        $("#myline").empty();
        tag = "#myline";
        putmsgs("myline.json", tag);
      break;
    case "update":
        //Hay que eliminar los dos, porque se crean IDs unicos y aunque esten ocultos se crean problemas para añadir los css (creo recordar que solo se aplicaba al primero)
        $("#timeline").empty();
        $("#myline").empty();
        tag = "#timeline";
        putmsgs("timeline.json", tag);
        putmsgs("update.json", tag);
      break;
    default:

  }
}

$(document).ready(function() {
    var estado = "timeline";
    var tag = "#timeline";
    putmsgs("timeline.json", tag);
    $( "#Inicio" ).click(function() {
        estado = "timeline";
        actualizarEstado(estado);
    });
    $( "#Mensajes" ).click(function() {
        estado = "myline";
        actualizarEstado(estado);
    });
    $( "#newfeed" ).click(function() {
        estado = "update";
        actualizarEstado(estado);
    });
});
