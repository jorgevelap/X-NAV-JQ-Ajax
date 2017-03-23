$("#bt").click(function(){
$.ajax({
  url: "docn.txt",
  beforeSend: function( xhr ) {
    xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  }
})
  .done(function( data ) {
    	$("#text").html(data);
  });

});




